from application.models.user import User

def test_user_creation(app):
  user_dict = {
    "name": "from model",
    "email": "model@xyz.com",
    "password": "1234"
  }

  user = User(**user_dict)

  assert user.password == "1234"