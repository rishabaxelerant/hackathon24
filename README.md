#### For Mac:

## Setup Ollama
- Download & install https://ollama.ai/
- run `ollama run openchat`

# Setup Sales GPT

- Open Terminal.
- Navigate to your empty project directory: `mkdir salesAgent && cd salesAgent`
- Create a virtual environment: `python3 -m venv env`
- Activate the virtual environment: `source env/bin/activate`

Clone the SalesGPT Github repository: 

`git clone https://github.com/rishabaxelerant/hackathon24.git`

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


# Setup Sales Calling GPT

- Create a virtual environment: `python3 -m venv env`
- Activate the virtual environment: `source env/bin/activate`
- Go to the sales takk gpt folder: `cd salestakgpt`
- Install Requirements: 
    ```
    brew install portaudio19-dev python-pyaudio
    brew install portaudio
    pip install pyaudio    
    pip install -r requirements.txt 
    ```
- Run talking Agent: `python chat.py`