from flask import Blueprint, request
from flask_login import login_required
from app.models import User, db
from app.forms.profile_form import ProfileForm
from app.api.utils.error_handlers import (
    throw_authorization_error, user_is_owner, throw_validation_error, throw_server_error
)

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def profile_update(id):
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if user_is_owner(id):
            user = User.query.get_or_404(id)
            form.populate_obj(user)
            if not user.profile_img:
                user.profile_img = 'https://hotpotatorecipes.s3.us-west-1.amazonaws.com/chef.png'
            try:
                db.session.add(user)
                db.session.commit()
                return user.to_dict()
            except:
                return throw_server_error()
        return throw_authorization_error()
    return throw_validation_error(form.errors)