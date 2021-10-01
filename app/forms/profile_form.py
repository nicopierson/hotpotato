from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import IntegerField
from wtforms.validators import InputRequired, ValidationError, Optional, Length, URL, Email
from app.models import User


def email_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if 'id' in form.data:
        if user and user.id != form.data['id']:
            raise ValidationError('Email address is already in use.')
    else:
        if user:
            raise ValidationError('Email address is already in use.')


def profile_exists(form, field):
    # Checking if profile is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if 'id' in form.data:
        if user and user.id != form.data['id']:
            raise ValidationError('Username is already in use.')
    else:
        if user:
            raise ValidationError('Username is already in use.')
    

class ProfileForm(FlaskForm):
    id = IntegerField('id', 
    validators=[
        InputRequired()
    ])
    username = StringField('username', 
        validators=[
            InputRequired(), 
            profile_exists, 
            Length(min=1, max=40)
        ])
    profile_img = StringField('profile_img', 
        validators=[
            Optional(),
            URL(),
            Length(min=1, max=500)
        ])
    email = StringField('email', 
        validators=[
            InputRequired(),
            Email(),
            email_exists,
            Length(min=1, max=255),
        ])