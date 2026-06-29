from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.tokens import EmailVerificationToken
from .serializers import RegisterSerializer


class RegisterAPIView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request):
        print("🔥 Register API called")
        print(request.data)

        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Create user
        user = serializer.save()

        # Generate verification token
        token = EmailVerificationToken.encode(user.id)

        # Verification URL
        verification_url = (
            f"{settings.FRONTEND_URL}/verify-email?token={token}"
        )

        # Send verification email
        send_mail(
            subject="Verify your email",
            message=f"""
Hi {user.email},

Thank you for registering.

Click the link below to verify your email:

{verification_url}

If you did not create this account, you can ignore this email.
""",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            fail_silently=False,
        )

        return Response(
            {
                "message": (
                    "Registration successful. "
                    "Please check your email to verify your account."
                )
            },
            status=status.HTTP_201_CREATED,
        )