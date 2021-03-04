from flask.cli import AppGroup
from .users import seed_users, undo_users
from .user_page import seed_user_page, undo_user_page
from .reservations import seed_reservations, undo_reservations
from .page_layout import seed_page_layout, undo_page_layout
from .color_palette import seed_color_palette, undo_color_palette


seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    seed_users()
    seed_user_page()
    seed_reservations()
    seed_page_layout()
    seed_color_palette()


@seed_commands.command('undo')
def undo():
    undo_color_palette()
    undo_page_layout()
    undo_reservations()
    undo_user_page()
    undo_users()
