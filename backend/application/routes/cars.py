from application.extensions import db
from application.models.car import Car

from flask import Blueprint, jsonify, request
blueprint = Blueprint('cars', __name__)

@blueprint.route("/<uuid:user_id>", methods=['POST'])
def add_car(user_id):
  car_data = request.get_json()
  car_data["owner"] = user_id
  print(car_data)
  new_car = Car(**car_data)
  db.session.add(new_car)
  db.session.commit()

  return jsonify(new_car.to_dict()), 201
