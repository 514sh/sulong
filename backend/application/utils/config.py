import os
from dotenv import load_dotenv
load_dotenv()

class Config:
  POSTGRES_URI = os.getenv('POSTGRES_URI')