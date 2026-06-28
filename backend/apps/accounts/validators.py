from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError


def validate_user_password(password):
    """
    Validate password using Django's password validators.
    """
    validate_password(password)