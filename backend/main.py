from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# localhost:xxxx
@app.get("/")
def root():
    return {"hello":"world"}

origins = [""]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=[""],
    allow_headers=["*"],
)

# create an endpoint that recieves form data for a single service

@app.post('/submit-request')
async def submitRequest(req:Request):
    # service type (inspection or repair) - serviceName
    # requested time (text string)        - serviceTime
    # comments (text string)              - comments

    body = await req.json()
    # body = pythong dict w key value
    # serviceName = body['ServiceName']
    serviceName = body.get('ServiceName')
    serviceTime = body.get('ServiceTime')
    comments = body.get('comments')

    # store this somewhere

    print("serviceName", serviceName)
    print("serviceTime", serviceTime)
    print("comments", comments)

    return body