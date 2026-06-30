from rest_framework_simplejwt.tokens import RefreshToken


class AuthService:
    @staticmethod
    def logout(refresh_token: str):
        token = RefreshToken(refresh_token)
        token.blacklist()