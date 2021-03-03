from .db import db


class Page_layout(db.Model):
    __tablename__ = 'page_layout'

    id = db.Column(db.Integer, primary_key=True)
    layout = db.Column(db.String(100), nullable=False)
    navbarPosition = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "layout": self.layout,
            "navbarPosition": self.navbarPosition,
        }
