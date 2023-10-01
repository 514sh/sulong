import os
from dotenv import load_dotenv
load_dotenv()

class Config:
  # postgres://<username>:<password>@<server>:<port>/<database>
  POSTGRES_URI = os.getenv('POSTGRES_URI')
