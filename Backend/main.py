from fastapi import FastAPI, File, UploadFile

from io import BytesIO
import pandas as pd

app = FastAPI()

    
@app.post("/upload")
def upload(file: UploadFile = File(...)):
    contents = file.file.read()
    buffer = BytesIO(contents)
    df = pd.read_csv(buffer)
    buffer.close()
    file.file.close()
    return df.to_dict(orient='records')


