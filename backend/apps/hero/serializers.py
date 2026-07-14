from rest_framework import serializers
from .models import HeroBanner



class HeroSerializer(serializers.ModelSerializer):

    class Meta:

        model = HeroBanner

        fields = [
            "id",
            "badge",
            "title",
            "subtitle",
            "image",
            "button_one_text",
            "button_one_link",
            "button_two_text",
            "button_two_link",
        ]