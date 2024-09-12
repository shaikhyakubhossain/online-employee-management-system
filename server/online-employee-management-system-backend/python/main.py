from fastapi import FastAPI

# Create a FastAPI instance
app = FastAPI()

# Define a simple root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI"}

# Define an endpoint that returns an item based on its ID
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

# Define an endpoint for creating an item
@app.post("/items/")
def create_item(name: str, description: str = None):
    return {"name": name, "description": description}
