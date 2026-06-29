from django.conf import settings
from django.core.mail import send_mail

from apps.accounts.tokens import EmailVerificationToken


class EmailService:

    @staticmethod
    def send_verification_email(user):
        token = EmailVerificationToken.create(user.id)

        verification_url = (
            f"{settings.FRONTEND_URL}/verify-email?token={token}"
        )

        send_mail(
            subject="Verify your email",
            message=f"""
Hi {user.first_name},

Welcome!

Please verify your email by clicking the link below:

{verification_url}

This link expires in 24 hours.
""",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            fail_silently=False,
        )