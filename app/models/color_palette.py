from .db import db


class Color_palette(db.Model):
    __tablename__ = 'color_palette'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    palette = db.Column(db.String(255), nullable=False)

    user_page = db.relationship("User_page", back_populates="color_palette")

    def to_dict(self):
        return {
            "id": self.id,
            "palette": self.palette,
        }
