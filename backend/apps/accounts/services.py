from .models import User


class AccountService:

    @staticmethod
    def create_user(validated_data):
        password = validated_data.pop("password")

        validated_data.pop("confirm_password")

        user = User.objects.create_user(
            password=password,
            **validated_data
        )

        return user
    