import datetime
from werkzeug.security import generate_password_hash
from app.models import db, User_page, Background_images, User


def seed_user_page():

    one = User_page(
        userId=1,
    )
    two = User_page(
        userId=2,
        pageName="Jesse's page",
        partnerOne="Karis Naumann",
        partnerTwo="Jesse Lindloff",
        weddingDateTime=datetime.datetime.now(),
        venueName="The Ivy House",
        venueAddress="906 South Barclay Street",
        venueCity="Milwaukee",
        venueState="Wisconsin",
        venueZip=53204,
        profileImg="https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg",
        pageLayoutId=1,
        backgroundImgId=1,
        colorPaletteId=1
    )

    db.session.add_all([one, two])
    db.session.commit()


def undo_user_page():
    db.session.execute('TRUNCATE user_page RESTART IDENTITY CASCADE')
    db.session.commit()
