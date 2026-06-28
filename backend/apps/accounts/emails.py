from django.core.mail import send_mail
from django.conf import settings


class EmailService:

    @staticmethod
    def send_verification_email(email, token):

        verification_link = (
            f"http://localhost:3000/verify-email?token={token}"
        )

        subject = "Verify your email"

        message = f"""
        Welcome!

        Click the link below to verify your email:

        {verification_link}

        This link expires in 24 hours.
        """

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [email],
            fail_silently=False,
        )