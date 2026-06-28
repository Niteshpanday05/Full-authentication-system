from django.urls import path
from .views.auth import (
    RegisterAPIView,
    VerifyEmailAPIView,
    LoginAPIView,
)

urlpatterns = [

    path(
        "register/",
        RegisterAPIView.as_view(),
    ),

    path(
        "verify-email/",
        VerifyEmailAPIView.as_view(),
    ),

    path(
        "login/",
        LoginAPIView.as_view(),
    ),

]