#### For Mac:

## Setup Ollama
- Download & install https://ollama.ai/
- run `ollama run openchat`

# Setup Sales GPT

- Open Terminal.
- Navigate to your project directory: `cd path/to/your/project`
- Create a virtual environment: `python3 -m venv env`
- Activate the virtual environment: `source env/bin/activate`

Clone the SalesGPT Github repository: 

`git clone https://github.com/rishabaxelerant/hackathon24.git`

Navigate to the repository and in case you used a different venv name rename the VENV variable in the Makefile: 

`cd SalesGPT`

`pip install salesgpt`

`make setup`

`python run_api.py`

To deactivate a virtual environment after you have stopped using it simply run: `deactivate`


