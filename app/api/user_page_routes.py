from flask import Blueprint, jsonify, request
from sqlalchemy import desc, func
from werkzeug.utils import secure_filename

from app.config import Config
from app.forms import CreateUserPage
from app.helpers import allowed_file, upload_file_to_s3, \
    validation_errors_to_error_messages
from app.models import Background_images, Color_palette, \
    Page_layout, Reservations, User_page, User

user_page_routes = Blueprint("user_page", __name__)


@user_page_routes.route('/', methods=["POST"])
def create_user_page():
    form = CreateUserPage()
    form['csrf_token'].data = request.cookies['csrf_token']

    if 'profileImg' in request.files:
        image = request.files['profileImg']

        if allowed_file(image.filename):
            image.filename = secure_filename(image.filename)
            profileImg = upload_file_to_s3(image, Config.S3_BUCKET)

        user_page = User_page()
        form.populate_obj(user_page)
        project.profileImg = profileImg
        db.session.add(user_page)
        db.session.commit()
        return project.to_dict()
