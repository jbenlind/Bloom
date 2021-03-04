import json
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

    new_reservations = []
    with open('./app/seeds/reservations.json') as f:
        data = json.load(f)
        for reservation in data:
            new_reservations = Reservations(**reservation)
            new_reservations.append(new_reservations)

    db.session.add_all([one])
    db.session.add_all(new_reservations)
    db.session.commit()


def undo_reservations():
    db.session.execute('TRUNCATE reservations CASCADE')
    db.session.commit()
