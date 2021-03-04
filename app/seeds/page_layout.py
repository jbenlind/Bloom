from werkzeug.security import generate_password_hash
from app.models import db, Page_layout


def seed_page_layout():

    layoutOne = Page_layout(
        layout='horizontal',
        navbarPosition='bottom'
    )

    db.session.add_all([layoutOne])
    db.session.commit()

def undo_page_layout():
    db.session.execute('TRUNCATE page_layout RESTART IDENTITY CASCADE;')
    db.session.commit()
