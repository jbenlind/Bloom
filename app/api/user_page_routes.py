from flask import Blueprint, jsonify, request
from sqlalchemy import desc, func
from werkzeug.utils import secure_filename

from app.config import Config
from app.forms import CreateUserPage
from app.helpers import allowed_file, upload_file_to_s3, \
    validation_errors_to_error_messages
from app.models import Background_images, Color_palette, \
    Page_layout, Reservations, User_page, User, db

user_page_routes = Blueprint("user_page", __name__)


@user_page_routes.route("/<int:userId>", methods=["GET"])
def get_user_page_info(userId):
    userPage = User_page.query.filter(User_page.userId == userId).one()
    return userPage.to_dict()


@user_page_routes.route("/", methods=["POST"])
def create_user_page():
    form = CreateUserPage()
    form['csrf_token'].data = request.cookies['csrf_token']
    profileImg = ""
    image = ""

    if form.data['profileImg'] is not None:
        image = form.data['profileImg']

    if image != "" and allowed_file(image.filename):
        image.filename = secure_filename(image.filename)
        profileImg = upload_file_to_s3(image, Config.S3_BUCKET)

    try:
        userPage = User_page.query.filter(User_page.userId == form.userId.data).one()
        if not profileImg:
            profileImg = userPage.profileImg
        form.populate_obj(userPage)
        userPage.profileImg = profileImg
        db.session.commit()
        return userPage.to_dict()
    except:
        userPage = User_page()
        form.populate_obj(userPage)
        userPage.profileImg = profileImg
        db.session.add(userPage)
        db.session.commit()
        return userPage.to_dict()
