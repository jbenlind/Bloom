from werkzeug.security import generate_password_hash
from app.models import db, Background_images


def seed_background_images():

    imageOne = Background_images(
        id='1',
        imgUrl='https://bloombucketjesse.s3.us-east-2.amazonaws.com/backgroundImage-1.jpg',
    )
    imageTwo = Background_images(
        id='2',
        imgUrl='https://bloombucketjesse.s3.us-east-2.amazonaws.com/backgroundImage-2.jpg',
    )
    imageThree = Background_images(
        id='3',
        imgUrl='https://bloombucketjesse.s3.us-east-2.amazonaws.com/backgroundImage-3.jpg',
    )
    imageFour = Background_images(
        id='4',
        imgUrl='https://bloombucketjesse.s3.us-east-2.amazonaws.com/backgroundImage-4.jpg',
    )
    imageFive = Background_images(
        id='5',
        imgUrl='https://bloombucketjesse.s3.us-east-2.amazonaws.com/backgroundImage-5.jpg',
    )

    db.session.add_all([imageOne, imageTwo, imageThree, imageFour, imageFive])
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_background_images():
    db.session.execute('TRUNCATE background_images CASCADE;')
    db.session.commit()
