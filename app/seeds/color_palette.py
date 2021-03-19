from werkzeug.security import generate_password_hash
from app.models import db, Color_palette


def seed_color_palette():

    paletteOne = Color_palette(
        name="Imperial",
        backgroundImageId=1,
    )
    paletteTwo = Color_palette(
        name="Regal",
        backgroundImageId=2
    )
    paletteThree = Color_palette(
        name="Muted",
        backgroundImageId=3
    )
    paletteFour = Color_palette(
        name="Oceanic",
        backgroundImageId=4
    )
    paletteFive = Color_palette(
        name="Vibrant",
        backgroundImageId=5
    )
    paletteSix = Color_palette(
        name="Classic",
    )

    db.session.add_all([paletteOne,
                        paletteTwo,
                        paletteThree,
                        paletteFour,
                        paletteFive])
    db.session.commit()


def undo_color_palette():
    db.session.execute('TRUNCATE color_palette RESTART IDENTITY CASCADE;')
    db.session.commit()
