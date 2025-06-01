from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import json

# Import your chain and helper function from your existing file.
from langchain_route import form_chain, extract_json, action

app = FastAPI()

# Add CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*","http://localhost:4200"],  # For demo purposes; in production, specify  frontend URL(s)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate")
async def generate(request: Request):
    """
    Single endpoint to handle both initial generation and follow-up updates.
    Expects a JSON payload with an "input" key containing the entire conversation context.
    """
    try:
        payload = await request.json()
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid JSON payload")
    
    # 'input' contains either the initial user request or the combined conversation context for follow-up
    user_input = payload.get("input")
    if not user_input:
        raise HTTPException(status_code=400, detail="Missing 'input' in payload")
    
    # Pass the combined input to your chain
    response_str = action( user_input)
    response_str = extract_json(response_str)
    
    try:
        response_json = json.loads(response_str)
    except Exception:
        raise HTTPException(status_code=500, detail="Error parsing JSON from chain output")
    
    return response_json
