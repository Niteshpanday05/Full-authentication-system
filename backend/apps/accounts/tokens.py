from django.core import signing


class EmailVerificationToken:

    @staticmethod
    def create(user_id):
        return signing.dumps(
            {"user_id": str(user_id)},
            salt="email-verify"
        )

    @staticmethod
    def decode(token):
        try:
            data = signing.loads(
                token,
                salt="email-verify",
                max_age=60 * 60 * 24  # 24 hours
            )
            return data["user_id"]

        except signing.BadSignature:
            return None

        except signing.SignatureExpired:
            return None