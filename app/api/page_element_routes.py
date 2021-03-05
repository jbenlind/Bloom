from flask import Blueprint, jsonify, request
from sqlalchemy import desc, func
from werkzeug.utils import secure_filename

from app.config import Config
from app.models import Background_images, Page_layout, Color_palette

page_element_routes = Blueprint('page_element', __name__)


@page_element_routes.route('')
def get_all_elements():
    background_images = Background_images.query.all()
    page_layouts = Page_layout.query.all()
    color_palettes = Color_palette.query.all()
    return {
        "background_images":
        [background_image.to_dict() for background_image in background_images],
        "page_layouts":
        [page_layout.to_dict() for page_layout in page_layouts],
        "color_palettes":
        [color_palette.to_dict() for color_palette in color_palettes]
    }
