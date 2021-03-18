from werkzeug.security import generate_password_hash
from app.models import db, Page_layout


def seed_page_layout():

    layoutOne = Page_layout(
        layout='Classic',
        imageUrl="https://bloombucketjesse.s3.us-east-2.amazonaws.com/layout-nav-top.png"
    )
    layoutTwo = Page_layout(
        layout='Inverted',
        imageUrl="https://bloombucketjesse.s3.us-east-2.amazonaws.com/layout-nav-bottom.png"

    )
    layoutThree = Page_layout(
        layout='Edge',
        imageUrl="https://bloombucketjesse.s3.us-east-2.amazonaws.com/layout-nav-left.png"

    )
    layoutFour = Page_layout(
        layout='Side Car',
        imageUrl="https://bloombucketjesse.s3.us-east-2.amazonaws.com/layout-nav-right.png"

    )

    db.session.add_all([layoutOne, layoutTwo, layoutThree, layoutFour])
    db.session.commit()


def undo_page_layout():
    db.session.execute('TRUNCATE page_layout RESTART IDENTITY CASCADE;')
    db.session.commit()
