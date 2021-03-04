from werkzeug.security import generate_password_hash
from app.models import db, User

def seed_users():

    demo = User(
        username='demo',
        email='demo@bloom.io',
        password='password'
    )

    jesse = User(
        username='jesse',
        email='jesse@bloom.io',
        password='password',
    )

    db.session.add_all([demo, jesse])
    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
