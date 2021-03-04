import json
from werkzeug.security import generate_password_hash
from app.models import db, Background_Images


def seed_color_palette():

    paletteOne = Background_Images(
        id='1',
        imgUrl='standard',
    )


    new_background_image = []
    with open('./app/seeds/background_images.json') as f:
        data = json.load(f)
        for image in data:
            new_background_image = Background_Images(**image)
            new_background_image.append(new_background_image)

    db.session.add_all([paletteOne])
    db.session.add_all(new_background_image)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_page_layout():
    db.session.execute('TRUNCATE color_palette CASCADE;')
    db.session.commit()
