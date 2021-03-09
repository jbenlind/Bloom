from .db import db


class Color_palette(db.Model):
    __tablename__ = 'color_palette'

    id = db.Column(db.Integer, primary_key=True)
    backgroundImageId = db.Column(
        db.Integer, db.ForeignKey("background_images.id"), nullable=True)
    name = db.Column(db.String(100), nullable=True)
    palette = db.Column(db.String(255), nullable=True)

    user_page = db.relationship("User_page", back_populates="color_palette")
    background_images = db.relationship(
        "Background_images", back_populates="color_palette")

    def to_dict(self):
        return {
            "id": self.id,
            "backgroundImageId": self.backgroundImageId,
            "name": self.name,
            "palette": self.palette,
        }
