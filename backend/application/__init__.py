from flask import Flask
from .extensions import db
from .utils.config import Config

from .routes import users
from .routes import cars

def create_app(db_uri):
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

  app.register_blueprint(users.blueprint, url_prefix='/api/users')
  app.register_blueprint(cars.blueprint, url_prefix='/api/cars')
  db.init_app(app)

  # with app.app_context():
  #   db.create_all()

  return app  

def main():
  app = create_app(db_uri=Config.POSTGRES_URI)

  with app.app_context():
    db.create_all()
  app.run(port=5000, debug=True)
