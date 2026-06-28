from rest_framework import serializers

from apps.accounts.models import User
from apps.accounts.services import AccountService
from apps.accounts.validators import validate_user_password


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only=True,
        min_length=8,
    )

    confirm_password = serializers.CharField(
        write_only=True,
    )

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
        email = value.lower()

        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("User already exists.")

        return email

    def validate_password(self, value):
        validate_user_password(value)
        return value

    def validate(self, attrs):

        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError(
                {"confirm_password": "Passwords do not match."}
            )

        return attrs

    def create(self, validated_data):
        return AccountService.create_user(validated_data)
