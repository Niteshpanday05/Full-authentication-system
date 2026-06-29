from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken

from apps.accounts.models import User

from apps.accounts.email import EmailService

class AccountService:

    @staticmethod
    def create_user(validated_data):
        validated_data.pop("confirm_password", None)

        user = User.objects.create_user(
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            password=validated_data["password"],
        )

        EmailService.send_verification_email(user)

        return user

    @staticmethod
    def login(email: str, password: str):
        user = authenticate(
            username=email,
            password=password
        )

        if not user:
            raise AuthenticationFailed("Invalid email or password.")

        if not user.is_active:
            raise AuthenticationFailed("Your account is disabled.")

        if not user.is_verified:
            raise AuthenticationFailed("Please verify your email first.")

        refresh = RefreshToken.for_user(user)

        return {
            "user": user,
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }