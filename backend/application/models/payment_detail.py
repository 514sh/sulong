import uuid
from application.extensions import db

class PaymentDetail(db.Model):
  __tablename__ = "payment_details"
  id = db.Column(db.String(64), primary_key = True, default = str(uuid.uuid4()))
  method = db.Column(db.String(32), nullable = False)
  reference = db.Column(db.String(16), nullable = False, unique = True)
  user_id = db.Column(db.String, db.ForeignKey('users.id'), unique= True)

  def to_dict(self):
    return {
      "id": str(self.id),
      "method": self.method,
      "reference": self.reference,
      "user_id": str(self.user_id),
    }