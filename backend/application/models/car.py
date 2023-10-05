import uuid
from datetime import datetime
from application.extensions import db

class Car(db.Model):
  __tablename__ = "cars"
  id = db.Column(db.String(64), unique=True, primary_key=True, default=str(uuid.uuid4()))
  owner = db.Column(db.String, db.ForeignKey('users.id'))
  place_name = db.Column(db.String(255), nullable=False)
  longitude = db.Column(db.Float, nullable=False)
  latitude = db.Column(db.Float, nullable=False)
  available = db.Column(db.Boolean, default=True)
  approved = db.Column(db.Boolean, default=False)
  price_per_day = db.Column(db.Numeric(10, 2), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.now())
  last_updated = db.Column(db.DateTime, default=datetime.now())
  # car_details = db.relationship('CarDetail', backref='car', uselist=False, query='subquery')

  def to_dict(self):
    return {
      "id": str(self.id),
      "owner": str(self.owner),
      "place_name": self.place_name,
      "longitude": self.longitude,
      "latitude": self.latitude,
      "available": self.available,
      "approved": self.approved,
      "price_per_day": str(self.price_per_day),
      "created_at": str(self.created_at),
      "last_updated": str(self.last_updated)
    }
