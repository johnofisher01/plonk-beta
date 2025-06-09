from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import articles

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the ADHD Calendar API"}

# Include article routes
app.include_router(articles.router)
