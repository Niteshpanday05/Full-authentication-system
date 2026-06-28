from django.urls import path

from .views.auth import (
    RegisterAPIView,
    VerifyEmailAPIView,
    LoginAPIView,
    RefreshTokenAPIView,
    LogoutAPIView,
)

urlpatterns = [
    path("register/", RegisterAPIView.as_view(), name="register"),
    path("verify-email/", VerifyEmailAPIView.as_view(), name="verify-email"),
    path("login/", LoginAPIView.as_view(), name="login"),
    path("refresh/", RefreshTokenAPIView.as_view(), name="refresh"),
    path(
        "logout/",
        LogoutAPIView.as_view(),
    ),
]
