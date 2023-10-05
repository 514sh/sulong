import pytest

from application import create_app, db
from application.utils.config import Config
from application import db
from application.models.user import User

@pytest.fixture()
def app():
  app = create_app(Config.POSTGRES_URI)
  app.config.update({
    "TESTING": True
  })
  with app.app_context():
    db.create_all()
  yield app
  with app.app_context():
    db.session.remove()
    db.drop_all()

@pytest.fixture()
def client(app):
  return app.test_client()

@pytest.fixture()
def response_create_user(client, app):
  new_user = {
    "name": "Mark",
    "password": "123",
    "email": "mark_01@gmail.com"
  }

  response = client.post("/api/users/", json=new_user)
  return response

@pytest.fixture()
def instance_user(response_create_user, app):
  with app.app_context():
    return User.query.first()
  
@pytest.fixture()
def response_create_payment_details(instance_user, client, app):
  new_payment_detail = {
    "method": "gcash",
    "reference": "09231407456"
  }
  id = instance_user.id
  response = client.post(f"/api/users/{id}", json=new_payment_detail)
  return response

@pytest.fixture()
def response_add_car(instance_user ,client, app):
  new_car = {
    "place_name": "Apalit, Pampanga, Philippines",
    "longitude": 120.768539,
    "latitude": 14.953650,
    "price_per_day": 2000.50
  }
  id = instance_user.id
  response = client.post(f"/api/cars/{id}", json=new_car)
  return response