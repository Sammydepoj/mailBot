from fastapi import FastAPI, File, UploadFile, Form
from fastapi_mail import FastMail, MessageSchema, MessageType, ConnectionConfig
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import csv, codecs

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


conf = ConnectionConfig(
    MAIL_USERNAME = "ik.ugwuanyi@gmail.com",
    MAIL_PASSWORD = "AAF3AB7DEC1C8C1BB65391F67B95B8DED4F3",
    MAIL_FROM = "ik.ugwuanyi@gmail.com",
    MAIL_PORT = 2525,
    MAIL_SERVER = "smtp.elasticemail.com",
    MAIL_FROM_NAME="Mailbot",
    MAIL_STARTTLS = True,
    MAIL_SSL_TLS = False,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)


async def send_email(receipients: list, email_body, subject):

    message = MessageSchema(
        subject=subject,
        recipients=receipients,
        body=email_body,
        subtype=MessageType.html
    )

    fm = FastMail(conf)
    await fm.send_message(message)


    
@app.post("/upload")
async def upload(
    subject: str = Form(...),
    body: str = Form(...),
    file: UploadFile = File(...)
    ):

    csv_file = csv.DictReader(codecs.iterdecode(file.file, 'utf-8'))
    
    email_list = []

    for row in csv_file:
        email_list.append(row['email'])


    await send_email(email_list, body, subject)
    
    return JSONResponse(email_list, 200)


