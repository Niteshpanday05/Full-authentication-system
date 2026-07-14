from django.shortcuts import render

# Create your views here.
from rest_framework.generics import RetrieveAPIView
from .models import HeroBanner
from .serializers import HeroSerializer



class HeroAPIView(RetrieveAPIView):

    serializer_class = HeroSerializer


    def get_object(self):

        return HeroBanner.objects.filter(
            is_active=True
        ).first()