from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FileField
from wtforms.validators import DataRequired, Email, ValidationError
from sqlalchemy import or_
from app.models import User


def user_exists(form, field):
    print("Checking if user exists", field.data)
    email = field.data
    user = User.query.filter(
        or_(User.email == email, User.username == field.data)).first()
    if user:
        raise ValidationError("User already exists.")


class SignUpForm(FlaskForm):
    username = StringField('username',
                           validators=[DataRequired(), user_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
