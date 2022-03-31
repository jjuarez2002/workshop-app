from fastapi import FastAPI, Request

app = FastApi()

@app.get("/")
# localhost:xxxx
def root():
    {"hello":"world"}
