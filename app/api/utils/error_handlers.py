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
