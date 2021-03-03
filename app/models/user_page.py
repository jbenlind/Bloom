from .db import db


class User_page(db.Model):
    __tablename__ = 'user_page'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    pageName = db.Column(db.String(100), nullable=False)
    partnerOne = db.Column(db.String(100), nullable=False)
    partnerTwo = db.Column(db.String(100), nullable=False)
    weddingDate = db.Column(db.DateTime, nullable=False)
    weddingTime = db.Column(db.DateTime, nullable=False)
    venueName = db.Column(db.String(255), nullable=False)
    venueLocation = db.Column(db.String(255), nullable=False)
    profileImg = db.Column(db.String(255), nullable=False)
    pageLayoutId = db.Column(db.Integer, nullable=False)
    backgroundImgId = db.Column(db.Integer, nullable=False)
    colorPalleteId = db.Column(db.Integer, nullable=False)

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
            "colorPalleteId": self.colorPalleteId
        }
