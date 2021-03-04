from .db import db


class User_page(db.Model):
    __tablename__ = 'user_page'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    pageName = db.Column(db.String(100), nullable=False)
    partnerOne = db.Column(db.String(100), nullable=False)
    partnerTwo = db.Column(db.String(100), nullable=False)
    weddingDateTime = db.Column(db.DateTime, nullable=False)
    venueName = db.Column(db.String(255), nullable=False)
    venueAddress = db.Column(db.String(255), nullable=False)
    venueCity = db.Column(db.String(255), nullable=False)
    venueState = db.Column(db.String(255), nullable=False)
    venueZip = db.Column(db.Integer, nullable=False)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    profileImg = db.Column(db.String(255), nullable=False)
    pageLayoutId = db.Column(
        db.Integer, db.ForeignKey("page_layout.id"), nullable=False)
    backgroundImgId = db.Column(
        db.Integer, db.ForeignKey("background_images.id"), nullable=False)
    colorPaletteId = db.Column(
        db.Integer, db.ForeignKey("color_palette.id"), nullable=False)

    user = db.relationship("User", back_populates="user_page")
    reservations = db.relationship("Reservations", back_populates="user_page")
    page_layout = db.relationship("Page_layout", back_populates="user_page")
    background_images = db.relationship(
        "Background_images", back_populates="user_page")
    color_palette = db.relationship(
        "Color_palette", back_populates="user_page")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "pageName": self.pageName,
            "partnerOne": self.partnerOne,
            "partnerTwo": self.partnerTwo,
            "weddingDate": self.weddingDate,
            "weddingTime": self.weddingTime,
            "venueName": self.venueName,
            "venueLocation": self.venueLocation,
            "profileImg": self.profileImg,
            "pageLayoutId": self.pageLayoutId,
            "backgroundImgId": self.backgroundImgId,
            "colorPaletteId": self.colorPaletteId
        }
