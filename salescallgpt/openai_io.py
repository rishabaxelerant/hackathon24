from typing import List, Optional
import os
import openai
import requests

# openai.api_key = os.environ["OPENAI_API_KEY"]
conversation_history = []

class OpenAIChatCompletion:
    def __init__(self, system_prompt: str, model: Optional[str] = None):
        self.system_prompt = system_prompt
        self.model = model

    def get_response(self, transcript: List[str]) -> str:
        print(transcript);
        last_message = transcript.pop()
        answer = self.calltoSalesGPT(last_message)

        # messages = [
        #     {"role": "system", "content": self.system_prompt},
        # ]
        # for i, text in enumerate(reversed(transcript)):
        #     messages.insert(1, {"role": "user" if i % 2 == 0 else "assistant", "content": text})
        # output = openai.ChatCompletion.create(
        #     model="gpt-3.5-turbo" if self.model is None else self.model,
        #     messages=messages,
        # )
        return answer
        # return output["choices"][0]["message"]["content"]

    def calltoSalesGPT(self, input_words):
        global conversation_history
        # Call Sales GPT for answer the API?
        headers = {
            'Content-Type': 'application/json',
        }
        

        json_data = {
            'human_say': input_words,
            'conversation_history': conversation_history,
        }

        conversation_history.append("User: " + input_words + " <END_OF_TURN>")
        # print(json_data)
        response = requests.post('http://127.0.0.1:8000/chat', headers=headers, json=json_data)
        print(input_words)
        try:
            data = response.json()
            conversation_history.append(data["name"] + ": " + data["say"])
            answer = data["say"].replace('<END_OF_TURN>', '')
            return answer
        except:
            print("Error While Calling FAST API")
        # print(conversation_history)
        
