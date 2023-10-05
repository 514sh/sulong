from application.models.car import Car

def test_add_car(response_add_car, app):
  
  with app.app_context():
    assert Car.query.count() == 1 
    assert Car.query.first().place_name == "Apalit, Pampanga, Philippines"
  
  assert response_add_car.status_code == 201