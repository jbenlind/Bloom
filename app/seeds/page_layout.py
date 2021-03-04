import json
from werkzeug.security import generate_password_hash
from app.models import db, Page_layout


def seed_page_layout():

    layoutOne = Page_layout(
        id='1',
        layout='horizontal',
        navbarPosition='bottom'
    )


    new_page_layout = []
    with open('./app/seeds/page_layout.json') as f:
        data = json.load(f)
        for layout in data:
            new_page_layout = Page_layout(**layout)
            new_page_layout.append(new_page_layout)

    db.session.add_all([layoutOne])
    db.session.add_all(new_page_layout)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_page_layout():
    db.session.execute('TRUNCATE page_layout CASCADE;')
    db.session.commit()
