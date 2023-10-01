import uuid
from datetime import datetime
from application.extensions import db
class User(db.Model):
  __tablename__ = "users"
  id = db.Column(db.Uuid, primary_key = True, default = uuid.uuid4())
  name = db.Column(db.String(255), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  admin = db.Column(db.Boolean, default = False)
  password = db.Column(db.String(255), nullable = False)
  created_at = db.Column(db.DateTime, default=datetime.now())
  payment_details = db.relationship('PaymentDetail', backref='users')

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "email": self.email,
      "admin": self.admin,
      "password": self.password,
      "created_at": self.created_at,
      "payment_details": [i.to_dict() for i in self.payment_details]
    }