from gevent import monkey

monkey.patch_all()

import logging
import argparse
import tempfile
import os
import time
from salescallgpt.agents import OpenAIChat, TwilioCaller
from salescallgpt.audio_input import get_whisper_model
from salescallgpt.twilio_io import TwilioServer
from salescallgpt.conversation import run_conversation
from pyngrok import ngrok
from sys import exit

from dotenv import load_dotenv
load_dotenv()

def main(port, remote_host, start_ngrok, number):
    if start_ngrok:
        ngrok_http = ngrok.connect(port)
        remote_host = ngrok_http.public_url.split("//")[1]

    # remote_host="loosely-evolved-dory.ngrok-free.app"
    static_dir = os.path.join(tempfile.gettempdir(), "twilio_static")
    os.makedirs(static_dir, exist_ok=True)
    logging.info(f"Starting server at {remote_host} from local:{port}, serving static content from {static_dir}")
    logging.info(f"Set call webhook to https://{remote_host}/incoming-voice")
    # exit(0)
    tws = TwilioServer(remote_host=remote_host, port=port, static_dir=static_dir)
    tws.start()
    agent_a = OpenAIChat(
        system_prompt="You are a machine learning assistant. Answer the users questions about machine learning with short rhymes. Ask follow up questions when needed to help clarify their question.",
        init_phrase="Hello",
    )

    def run_chat(sess):
        agent_b = TwilioCaller(sess, thinking_phrase="")
        while not agent_b.session.media_stream_connected():
            time.sleep(0.1)
        run_conversation(agent_a, agent_b)

    tws.on_session = run_chat

    tws.start_call(number)


if __name__ == "__main__":
    logging.getLogger().setLevel(logging.INFO)
    parser = argparse.ArgumentParser()
    parser.add_argument("--preload_whisper", action="store_true")
    parser.add_argument("--start_ngrok", action="store_true")
    parser.add_argument("--port", type=int, default=8080)
    parser.add_argument("--number", type=str, default="")
    parser.add_argument("--remote_host", type=str, default="localhost")
    args = parser.parse_args()
    if args.preload_whisper:
        get_whisper_model()
    main(args.port, args.remote_host, args.start_ngrok, args.number)
