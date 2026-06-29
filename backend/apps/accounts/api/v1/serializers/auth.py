from rest_framework import serializers


from apps.accounts.models import User
from apps.accounts.services import AccountService
from apps.accounts.validators import validate_user_password
from rest_framework_simplejwt.serializers import TokenRefreshSerializer



from apps.accounts.services import AccountService


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = (
            "email",
            "first_name",
            "last_name",
            "password",
            "confirm_password",
        )
        
    

    def validate_email(self, value):
        value = value.lower()

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "User already exists."
            )

        return value

    def validate_password(self, value):
        validate_user_password(value)
        return value

    def validate(self, attrs):

        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError(
                "Passwords do not match."
            )

        return attrs

    def create(self, validated_data):
        return AccountService.create_user(validated_data)
    
class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()

    password = serializers.CharField(
        write_only=True
    )

    def validate(self, attrs):

        return AccountService.login(
            attrs["email"],
            attrs["password"]
        )
        


class RefreshTokenSerializer(TokenRefreshSerializer):
    """
    Extend Simple JWT refresh serializer.
    """
    pass


class LogoutSerializer(serializers.Serializer):

    refresh = serializers.CharField()

    def save(self):

        refresh_token = self.validated_data["refresh"]

        token = RefreshToken(refresh_token)

        token.blacklist()