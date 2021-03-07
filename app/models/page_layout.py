from .db import db


class Page_layout(db.Model):
    __tablename__ = 'page_layout'

    id = db.Column(db.Integer, primary_key=True)
    layout = db.Column(db.String(100), nullable=False)
    imageUrl = db.Column(db.String(100))

    user_page = db.relationship("User_page", back_populates="page_layout")

    def to_dict(self):
        return {
            "id": self.id,
            "layout": self.layout,
            "imageUrl": self.imageUrl,
        }
