import pytest

from application import create_app, db
from application.utils.config import Config

@pytest.fixture()
def app():
  app = create_app(Config.POSTGRES_URI)
  app.config.update({
    "TESTING": True
  })
  with app.app_context():
    db.create_all()
  yield app

@pytest.fixture()
def client(app):
  return app.test_client()