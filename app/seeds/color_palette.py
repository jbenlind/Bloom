import json
from werkzeug.security import generate_password_hash
from app.models import db, Color_palette


def seed_color_palette():

    paletteOne = Color_palette(
        id='1',
        layout='standard',
    )


    new_color_palette = []
    with open('./app/seeds/color_palette.json') as f:
        data = json.load(f)
        for palette in data:
            new_color_palette = Color_palette(**palette)
            new_color_palette.append(new_color_palette)

    db.session.add_all([paletteOne])
    db.session.add_all(new_color_palette)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_page_layout():
    db.session.execute('TRUNCATE color_palette CASCADE;')
    db.session.commit()
