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


@user_page_routes.route("/all")
def get_all_pages():
    page = User_page.query.all()
    page = [page.to_dict() for page in page]
    return jsonify(page)


@user_page_routes.route("/<int:userId>", methods=["GET"])
def get_user_page_info(userId):
    userPage = User_page.query.filter(User_page.userId == userId).first()
    if not userPage:
        userPage = User_page()
        db.session.add(userPage)
        db.session.commit()
    return userPage.to_dict()


@user_page_routes.route("/", methods=["POST"])
def create_user_page():
    form = CreateUserPage()
    form['csrf_token'].data = request.cookies['csrf_token']
    profileImg = ""
    image = ""
    date = ""

    if form.data['profileImg'] is not None:
        image = form.data['profileImg']

    if image != "":
        if type(image) == str:
            profileImg = image
        elif allowed_file(image.filename):
            image.filename = secure_filename(image.filename)
            profileImg = upload_file_to_s3(image, Config.S3_BUCKET)

    try:
        userPage = User_page.query.filter(
                                User_page.userId == form.userId.data).first()
        if not profileImg:
            profileImg = userPage.profileImg
        form.populate_obj(userPage)
        userPage.weddingDateTime = request.form.get("weddingDateTime")
        userPage.profileImg = profileImg
        db.session.commit()
        return userPage.to_dict()
    except Exception as e:
        userPage = User_page()
        form.populate_obj(userPage)
        userPage.profileImg = profileImg
        db.session.add(userPage)
        db.session.commit()
        return userPage.to_dict()
