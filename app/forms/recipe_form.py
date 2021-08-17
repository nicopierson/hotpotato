from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired
# from app.models import Recipe


class RecipeCreateForm(FlaskForm):
    thumbnail_url = StringField(validators=[DataRequired()])
    user_id = IntegerField(validators=[DataRequired()])
    name = StringField(validators=[DataRequired()])
