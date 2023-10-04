from application.extensions import db
from application.models.user import User
from application.models.payment_detail import PaymentDetail
from flask import Blueprint, jsonify, request
blueprint = Blueprint('users', __name__)

@blueprint.route("/")
def get_all_user():
  users = db.session.execute(db.select(User).order_by(User.name)).scalars()
  users_dict = [i.to_dict() for i in users]

  return jsonify(users_dict), 200

@blueprint.route("/<uuid:user_id>")
def get_one_user(user_id):
  
  user = db.session.execute(db.select(User).filter_by(id=str(user_id))).scalar_one()
  user_dict = user.to_dict()
  print(user_dict)
  return jsonify(user_dict), 200

@blueprint.route("/", methods=['POST'])
def create_user():
  user_data = request.get_json()

  new_user = User(**user_data)
  db.session.add(new_user)
  db.session.commit()

  return jsonify(new_user.to_dict()), 201

@blueprint.route("/<uuid:user_id>", methods=['POST'])
def add_user_payment_details(user_id):
  payment_detail_data = request.get_json()
  payment_detail_data["user_id"] = user_id
  print(payment_detail_data)
  new_payment_detail = PaymentDetail(**payment_detail_data)
  db.session.add(new_payment_detail)
  db.session.commit()
  return jsonify(new_payment_detail.to_dict()), 201