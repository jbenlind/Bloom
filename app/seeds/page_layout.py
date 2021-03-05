from werkzeug.security import generate_password_hash
from app.models import db, Page_layout


def seed_page_layout():

    horizontalOne = Page_layout(
        layout='horizontal',
        navbarPosition='top'
    )
    horizontalTwo = Page_layout(
        layout='horizontal',
        navbarPosition='bottom'
    )
    verticalOne = Page_layout(
        layout='vertical',
        navbarPosition='top'
    )

    db.session.add_all([horizontalOne, horizontalTwo, verticalOne])
    db.session.commit()


def undo_page_layout():
    db.session.execute('TRUNCATE page_layout RESTART IDENTITY CASCADE;')
    db.session.commit()
