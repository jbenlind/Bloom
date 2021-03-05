from .db import db


class Background_images(db.Model):
    __tablename__ = 'background_images'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    imageUrl = db.Column(db.String(255), nullable=False)

    user_page = db.relationship(
        "User_page", back_populates="background_images")
    color_palette = db.relationship(
        "Color_palette", back_populates="background_images")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "imageUrl": self.imageUrl,
        }
