from flask_login import current_user

def validation_errors_to_error_messages(validation_errors):
    # helper function to collect and display errors
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


def authorization_errors_to_error_messages(message="unauthorized user"):
    return {'errors': [message]}, 401


def input_errors_to_error_messages(message="incorrect input"):
    return {'errors': [message]}, 401


def throw_validation_error(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    error_obj = {}
    for field in validation_errors:
        for error in validation_errors[field]:
            error_obj[field] = error
    return {'errors': [ error_obj ]}, 401


def id_exists(id, model):
    """
    Simple function to check if id exists in the model
    """
    exists = model.query.get_or_404(id)
    if exists:
        return True
    return False


def throw_server_error(message="Server Error"):
    """
    Throw a server error 500
    """
    return {'errors': message}, 500


def throw_authorization_error(message="Unauthorized"):
    """
    Throw an unauthorized error 401
    """
    return {'errors': message}, 401


def throw_not_found_error(message="Not Found"):
    """
    Throw an not found error 404
    """
    return {'errors': message}, 404


def throw_input_error(message="Invalid Input"):
    """
    Throw an invalid input error 401
    """
    return {'errors': message}, 401


def user_is_owner(user_id):
    """
    Check if the user is the current owner of the id parameter
    """
    if current_user:
        return user_id == current_user.id
    return False
