# import uuid
# from datetime import datetime
# from application.extensions import db

# class CarDetail(db.Model):
#   __tablename__ = "car_details"
#   id = db.Column(db.String(64), primary_key=True, default=str(uuid.uuid4()))
#   make = db.Column(db.String(64), nullable=False)
#   model = db.Column(db.String, nullable=False)
#   year = db.Column(db.SmallInteger, nullable=False)
#   transmission_type = db.Column(db.String(8))
#   fuel_type = db.Column(db.String(16))
#   engine_size = db.Column(db.Numeric(precision=3, scale=2))
#   seating_capacity = db.Column(db.SmallInteger)
#   car_id = db.Column(db.String, db.ForeignKey('cars.id') )
