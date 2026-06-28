from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.exceptions import AuthenticationFailed


class AccountService:

    ...

    @staticmethod
    def login(email: str, password: str):

        user = authenticate(
            username=email,
            password=password
        )

        if not user:
            raise AuthenticationFailed(
                "Invalid email or password."
            )

        if not user.is_active:
            raise AuthenticationFailed(
                "Your account is disabled."
            )

        if not user.is_verified:
            raise AuthenticationFailed(
                "Please verify your email first."
            )

        refresh = RefreshToken.for_user(user)

        return {
            "user": user,
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }