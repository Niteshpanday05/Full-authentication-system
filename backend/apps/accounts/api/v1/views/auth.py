from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from apps.accounts.models import User
from ..serializers.auth import LoginSerializer


from apps.accounts.api.v1.serializers.verify_email import VerifyEmailSerializer
from apps.accounts.tokens import EmailVerificationToken
from ..serializers.auth import RefreshTokenSerializer


class RegisterAPIView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):

        serializer = RegisterSerializer(
            data=request.data
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            {"message": "Check your email to verify account"},
            status=status.HTTP_201_CREATED
        )


class VerifyEmailAPIView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):

        serializer = VerifyEmailSerializer(
            data=request.data
        )

        serializer.is_valid(raise_exception=True)

        user_id = serializer.context["user_id"]

        try:
            user = User.objects.get(id=user_id)
            user.is_verified = True
            user.save()

        except User.DoesNotExist:
            return Response(
                {"error": "User not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        return Response(
            {"message": "Email verified successfully"},
            status=status.HTTP_200_OK
        )
        
        
        
class LoginAPIView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):

        serializer = LoginSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        data = serializer.validated_data

        return Response(
            {
                "message": "Login successful.",

                "access": data["access"],

                "refresh": data["refresh"],

                "user": {
                    "id": str(data["user"].id),
                    "email": data["user"].email,
                    "first_name": data["user"].first_name,
                    "last_name": data["user"].last_name,
                }
            },
            status=status.HTTP_200_OK
        )
        

class RefreshTokenAPIView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):

        serializer = RefreshTokenSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        return Response(
            {
                "message": "Token refreshed successfully.",

                "access": serializer.validated_data["access"],

                "refresh": serializer.validated_data.get("refresh"),
            },
            status=status.HTTP_200_OK,
        )