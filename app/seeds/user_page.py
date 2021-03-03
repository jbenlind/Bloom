import json
from werkzeug.security import generate_password_hash
from app.models import db, User_page


def seed_user_page():

    one = User_page(
        userId=2,
        pageName="Jesse's page",
        partnerOne="Karis Naumann",
        partnerTwo="Jesse Lindloff"
        weddingDateTime=datetime.now(),
        venueName="The Ivy House",
        venueLocation="906 South Barclay Street, Milwaukee, Wisconsin 53204"
        profileImg="https://bloombucketjesse.s3.us-east-2.amazonaws.com/bloomFavicon.ico.png",
        pageLayoutId="1"
        backgroundImgId="1"
        colorPaletteId="1"
    )


def undo_user_page():
    db.session.execute('TRUNCATE user_page CASCADE')
    db.session.commit()
