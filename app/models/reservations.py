from .db import db


class Reservations(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    userPageId = db.Column(db.Integer, db.ForeignKey("user_page.id"))
    firstName = db.Column(db.String(150), nullable=False)
    lastName = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    attending = db.Column(db.Boolean, nullable=False)
    numberAttending = db.Column(db.Integer, nullable=False)
    foodAllergies = db.Column(db.Boolean, nullable=False)
    foodAllergiesDescription = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "userPageId": self.userPageId,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email,
            "attending": self.attending,
            "numberAttending": self.numberAttending,
            "foodAllergies": self.foodAllergies,
            "foodAllergiesDescription": self.foodAllergiesDescription
        }
