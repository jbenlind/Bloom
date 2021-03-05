from flask import Blueprint, jsonify, request
from sqlalchemy import desc, func
from werkzeug.utils import secure_filename

from app.config import Config
from app.helpers import allowed_file, upload_file_to_s3, \
    validation_errors_to_error_messages
from app.models import Project, Donation, User, Image, db

page_element_routes = Blueprint('page_element', __name__)


# @page_element_routes.route('/')
# def get_all_elements():
#     page_element =
