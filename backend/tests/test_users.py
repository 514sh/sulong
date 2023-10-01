# from application.models.user import User

# def test_get_all_users(client):
#   response = client.get("/api/users")
#   data = response.get_json()
#   print(response.request)
#   assert True

# def test_create_user(client, app):
#   new_user = {
#     "name": "Mark",
#     "password": "123",
#     "email": "mark_01@gmail.com"
#   }

#   response = client.post("/api/users", json=new_user)

#   print(response.data)
  
#   with app.app_context():
#     assert User.query.count() == 1
