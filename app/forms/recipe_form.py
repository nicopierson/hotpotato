from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, Field
from wtforms.validators import DataRequired, Length
# from app.models import Recipe1


class ListField(Field):
    def process_formdata(self, valuelist):
        self.data = valuelist


class RecipeCreateForm(FlaskForm):

    thumbnail_url = StringField(validators=[Length(
        max=1500, message="URL for image cannot be more than 1500 characters")])
    user_id = IntegerField(validators=[DataRequired()])
    name = StringField(validators=[DataRequired(), Length(
        max=255, message="Creation title cannot be more than 255 characters long")])
    categories_relations = ListField()


class RecipeDirectionsCreateForm(FlaskForm):
    directions = StringField(validators=[DataRequired()])
    steps = IntegerField(validators=[DataRequired()])
    recipe_id = IntegerField(validators=[DataRequired()])


class RecipeDirectionsUpdateForm(FlaskForm):
    id = IntegerField(validators=[DataRequired()])
    directions = StringField(validators=[DataRequired()])
    recipe_id = IntegerField(validators=[DataRequired()])
    steps = IntegerField(validators=[DataRequired()])


class RecipeIngredientsCreateForm(FlaskForm):
    ingredient = StringField(validators=[DataRequired()])
    measurement = StringField()
    recipe_id = IntegerField(validators=[DataRequired()])


class RecipeIngredientsUpdateForm(FlaskForm):
    id = IntegerField(validators=[DataRequired()])
    ingredient = StringField(validators=[DataRequired()])
    measurement = StringField()
    recipe_id = IntegerField(validators=[DataRequired()])


class RecipePhotosCreateForm(FlaskForm):
    video_url = StringField()
    img_url = StringField(validators=[DataRequired()])
    recipe_id = IntegerField(validators=[DataRequired()])
