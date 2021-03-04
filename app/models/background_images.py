from .db import db


class Background_images(db.Model):
    __tablename__ = 'background_images'

    id = db.Column(db.Integer, primary_key=True)
    imageUrl = db.Column(db.String(255), nullable=False)

    user_page = db.relationship("User_page", back_populates="background_images")

    def to_dict(self):
        return {
            "id": self.id,
            "imageUrl": self.imageUrl,
        }
