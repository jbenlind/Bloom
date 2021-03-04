from werkzeug.security import generate_password_hash
from app.models import db, Color_palette


def seed_color_palette():

    paletteOne = Color_palette(
        palette='standard',
    )

    db.session.add_all([paletteOne])
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_color_palette():
    db.session.execute('TRUNCATE color_palette RESTART IDENTITY CASCADE;')
    db.session.commit()
