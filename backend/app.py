from flask import Flask
from application.extensions import db
from application.utils.config import Config

from application.routes import users

def create_app():
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = Config.POSTGRES_URI
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

  app.register_blueprint(users.blueprint, url_prefix='/api/users')
  db.init_app(app)

  with app.app_context():
    db.create_all()

  app.run(port=5000, debug=True)  

create_app()