from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"hello":"world"}

# create an endpoint that receives form data
# for a single service
@app.post("/submit-request")
async def submitRequest (req:Request):
    #   service type (inspection or repair) -   serviceName
    #   requested time (text string)        -   serviceTime
    #   comments (text string)              -   comments

    body = await req.json()
    # body = python dictionary that contains
    # serviceName = body['serviceName'] 
    serviceName = body.get('serviceName')
    serviceTime = body.get('serviceTime')
    comments = body.get('comments')

    print("serviceName", serviceName)
    print("serviceTime", serviceTime)
    print("comments", comments)

    return body