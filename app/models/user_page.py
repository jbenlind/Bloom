from .db import db


class User_page(db.Model):
    __tablename__ = 'user_page'

    id = db.Column(db.Integer, primary_key=True)
    backgroundImgId = db.Column(
        db.Integer, db.ForeignKey("background_images.id"), nullable=True)
    pageLayoutId = db.Column(
        db.Integer, db.ForeignKey("page_layout.id"), nullable=True)
    colorPaletteId = db.Column(
        db.Integer, db.ForeignKey("color_palette.id"), nullable=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    pageName = db.Column(db.String(100), nullable=True)
    partnerOne = db.Column(db.String(100), nullable=True)
    partnerTwo = db.Column(db.String(100), nullable=True)
    weddingDateTime = db.Column(db.DateTime, nullable=True)
    venueName = db.Column(db.String(255), nullable=True)
    venueAddress = db.Column(db.String(255), nullable=True)
    venueCity = db.Column(db.String(255), nullable=True)
    venueState = db.Column(db.String(255), nullable=True)
    venueZip = db.Column(db.Integer, nullable=True)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    profileImg = db.Column(db.String(255), nullable=True)

    user = db.relationship("User", back_populates="user_page")
    reservations = db.relationship("Reservations", back_populates="user_page")
    page_layout = db.relationship("Page_layout", back_populates="user_page")
    background_images = db.relationship(
        "Background_images", back_populates="user_page")
    color_palette = db.relationship(
        "Color_palette", back_populates="user_page")

    def to_dict(self):
        return {
            "userId": self.userId,
            "pageName": self.pageName,
            "partnerOne": self.partnerOne,
            "partnerTwo": self.partnerTwo,
            "weddingDateTime": self.weddingDateTime,
            "venueName": self.venueName,
            "venueAddress": self.venueAddress,
            "venueCity": self.venueCity,
            "venueState": self.venueState,
            "venueZip": self.venueZip,
            "profileImg": self.profileImg,
            "pageLayoutId": self.pageLayoutId,
            "backgroundImgId": self.backgroundImgId,
            "colorPaletteId": self.colorPaletteId
        }
