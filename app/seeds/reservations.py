from werkzeug.security import generate_password_hash
from app.models import db, Reservations


def seed_reservations():

    one = Reservations(
            userPageId=1,
            firstName="Jesse",
            lastName="Lindloff",
            email="jesse@bloom.io",
            attending=False,
            numberAttending=0,
            foodAllergies=False,
            foodAllergiesDescription=""
    )


    db.session.add_all([one])
    db.session.commit()


def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE')
    db.session.commit()
