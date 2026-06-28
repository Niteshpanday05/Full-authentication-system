from rest_framework import serializers
from apps.accounts.tokens import EmailVerificationToken


class VerifyEmailSerializer(serializers.Serializer):
    token = serializers.CharField()

    def validate_token(self, value):
        user_id = EmailVerificationToken.decode(value)

        if not user_id:
            raise serializers.ValidationError("Invalid or expired token.")

        self.context["user_id"] = user_id
        return value