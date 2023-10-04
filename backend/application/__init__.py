from flask import Flask
from .extensions import db
from .utils.config import Config

from .routes.users import blueprint as users_bp

def create_app(db_uri):
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

  app.register_blueprint(users_bp, url_prefix='/api/users')
  db.init_app(app)

  # with app.app_context():
  #   db.create_all()

  return app  

def main():
  app = create_app(db_uri=Config.POSTGRES_URI)

  with app.app_context():
    db.create_all()
  app.run(port=5000, debug=True)
