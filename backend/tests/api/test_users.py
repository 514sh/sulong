from application.models.user import User

def test_get_all_users(response_create_user, client):
  response = client.get("/api/users/")

  assert response.get_json() == [response_create_user.get_json()]
  assert response.status_code == 200

def test_create_user(response_create_user, app):
  
  with app.app_context():
    assert User.query.count() == 1 
    assert User.query.first().email == "mark_01@gmail.com"

  assert response_create_user.status_code == 201
  
def test_user_get_one(client, response_create_user ,instance_user):
  id = instance_user.id
  response = client.get(f"/api/users/{id}")
  assert response.get_json() == response_create_user.get_json()
  assert response.status_code == 200

def test_add_user_payment_details(app,client, response_create_payment_details, instance_user):
  id = instance_user.id

  response_user = client.get(f"/api/users/{id}")
  response_user_dict = dict(response_user.get_json())
  
  assert response_user.status_code == 200
  assert response_user_dict["payment_details"][0]["method"] == "gcash"
  assert response_user_dict["payment_details"][0]["reference"] == "09231407456"
  assert response_user_dict["payment_details"][0]["user_id"] == instance_user.id