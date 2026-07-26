from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
import shutil

# Import AI function
from ai_model import enhance_image

app = FastAPI(
    title="DeepEnhance AI",
    version="1.0.0"
)

# ---------------------------------
# CORS Configuration
# ---------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",

        ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------
# Folder Configuration
# ---------------------------------
UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "outputs"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Serve output images
app.mount("/outputs", StaticFiles(directory=OUTPUT_FOLDER), name="outputs")


# ---------------------------------
# Home API
# ---------------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to DeepEnhance AI 🚀"
    }


# ---------------------------------
# Upload API
# ---------------------------------
@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return JSONResponse(
        {
            "status": "success",
            "filename": file.filename,
            "path": file_path
        }
    )


# ---------------------------------
# Enhance API
# ---------------------------------
@app.post("/enhance")
async def enhance(file: UploadFile = File(...)):

    # Save uploaded image
    upload_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(upload_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Enhance image using AI
    output_path = enhance_image(upload_path)

    # Get only the filename
    filename = os.path.basename(output_path)

    # Return URL for frontend
    return {
        "status": "success",
        "image_url": f"http://127.0.0.1:8000/outputs/{filename}"
    }