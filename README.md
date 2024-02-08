Inspired from https://github.com/filip-michalsky/SalesGPT?


#### For Mac:

## Setup Ollama
- Download & install https://ollama.ai/
- run `ollama run openchat`

# Setup Sales GPT

- Open Terminal.
- Navigate to your empty project directory: `git clone https://github.com/rishabaxelerant/hackathon24.git`
- Create a virtual environment inside project root: `python3 -m venv envserver`
- Activate the virtual environment: `source envserver/bin/activate`

Clone the SalesGPT Github repository: 


Navigate to the repository and in case you used a different venv name rename the VENV variable in the Makefile: 

`cd hackathon24`

`pip install salesgpt`

`make setup`

Create .env file with following values
OPENAI_API_KEY="xx"
OTHER_API_KEY="yy"

```
cat > .env
OPENAI_API_KEY="xx"
OTHER_API_KEY="yy"
```

`python run_api.py`

To deactivate a virtual environment after you have stopped using it simply run: `deactivate`


# Setup Sales Talking GPT

- Create a virtual environment inside project root: `python3 -m venv envclientcall`
- Activate the virtual environment: `source envclientcall/bin/activate`
- Go to the sales takk gpt folder: `cd salestalkgpt`
- Install Requirements: 
    ```
    brew install portaudio19-dev python-pyaudio
    brew install portaudio
    pip install pyaudio
    pip3 install PyObjC    
    pip install -r requirements.txt 
    ```
- Run talking Agent: `python chat.py`


# Setup Sales Calling GPT

- Install requriements: `cd salescallgpt && pip install -r requirements.txt`
- Add Additional tools: `brew install ffmpeg`
- Install whisperAI: `pip install git+https://github.com/openai/whisper.git`
- Setup Twilio Account
- Setup Ngrok Account & local setup
- Add environment varaibles:
```
Environment Variables
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
```
- From project root run: `python call_gpt.py --preload_whisper --start_ngrok --number "+918277XXXXXX"` 
