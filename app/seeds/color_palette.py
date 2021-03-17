from werkzeug.security import generate_password_hash
from app.models import db, Color_palette


def seed_color_palette():

    paletteOne = Color_palette(
        name="Classic",
        backgroundImageId=1,
    )
    paletteTwo = Color_palette(
        name="Imperial",
        backgroundImageId=1,
    )
    paletteThree = Color_palette(
        name="Classic",
        backgroundImageId=2
    )
    paletteFour = Color_palette(
        name="Regal",
        backgroundImageId=2
    )
    paletteFive = Color_palette(
        name="Classic",
        backgroundImageId=3
    )
    paletteSix = Color_palette(
        name="Muted",
        backgroundImageId=3
    )
    paletteSeven = Color_palette(
        name="Classic",
        backgroundImageId=4
    )
    paletteEight = Color_palette(
        name="Oceanic",
        backgroundImageId=4
    )
    paletteNine = Color_palette(
        name="Classic",
        backgroundImageId=5
    )
    paletteTen = Color_palette(
        name="Vibrant",
        backgroundImageId=5
    )

    db.session.add_all([paletteOne,
                        paletteTwo,
                        paletteThree,
                        paletteFour,
                        paletteFive,
                        paletteSix,
                        paletteSeven,
                        paletteEight,
                        paletteNine,
                        paletteTen])
    db.session.commit()


def undo_color_palette():
    db.session.execute('TRUNCATE color_palette RESTART IDENTITY CASCADE;')
    db.session.commit()
