from flask.cli import AppGroup
from .users import seed_users, undo_users
from .user_page import seed_user_page, undo_user_page
from .reservations import seed_reservations, undo_reservations
from .page_layout import seed_page_layout, undo_page_layout
from .color_palette import seed_color_palette, undo_color_palette
from .background_images import seed_background_images, undo_background_images


seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_page_layout()
    seed_background_images()
    seed_color_palette()
    seed_user_page()
    seed_reservations()


@seed_commands.command('undo')
def undo():
    undo_reservations()
    undo_user_page()
    undo_color_palette()
    undo_background_images()
    undo_page_layout()
    undo_users()
