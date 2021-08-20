from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class ProfileForm(FlaskForm):
    username = StringField(validators=[DataRequired()])
    email = StringField(validators=[DataRequired()])