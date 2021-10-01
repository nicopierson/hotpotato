from flask import Blueprint, request
from flask_login import login_required
from app.models import User, db
from app.forms import ProfileForm
from app.api.utils.error_handlers import (
    throw_authorization_error, user_is_owner, throw_validation_error, throw_server_error
)

profile_routes = Blueprint('profiles', __name__)


@profile_routes.route('/<int:id>', methods=['PUT'])
@login_required
def profile_update(id):
        form = ProfileForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            if user_is_owner(id):
                user = User.query.get_or_404(id)
                form.populate_obj(user)
                try:
                    db.session.add(user)
                    db.session.commit()
                    return user.to_dict()
                except:
                    return throw_server_error()
            return throw_authorization_error()
        return throw_validation_error(form.errors)