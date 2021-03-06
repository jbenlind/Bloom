from flask_wtf import FlaskForm
from wtforms import StringField, FileField, IntegerField, FloatField, DateTimeField
# from wtforms.fields.html5 import DateTimeLocalField
from app.models import User_page


class CreateUserPage(FlaskForm):
    backgroundImgId = IntegerField("backgroundImgId")
    pageLayoutId = IntegerField("pageLayoutId")
    colorPaletteId = IntegerField("colorPaletteId")
    userId = IntegerField("userId")
    pageName = StringField("pageName")
    partnerOne = StringField("partnerOne")
    partnerTwo = StringField("partnerTwo")
    weddingDateTime = DateTimeField("weddingDateTime")
    venueName = StringField("venueName")
    venueAddress = StringField("venueAddress")
    venueCity = StringField("venueCity")
    venueState = StringField("venueState")
    venueZip = IntegerField("venueZip")
    latitude = FloatField("latitude")
    longitude = FloatField("longitude")
    profileImg = FileField("profileImg")
