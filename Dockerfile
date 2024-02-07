FROM python:3

COPY ./Makefile Makefile
COPY ./ .
COPY ./run_api.py run_api.py

RUN pip install salesgpt

# RUN make setup

EXPOSE 8000

