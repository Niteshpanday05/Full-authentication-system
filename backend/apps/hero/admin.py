from django.contrib import admin
from .models import HeroBanner



@admin.register(HeroBanner)
class HeroAdmin(admin.ModelAdmin):

    list_display = [
        "title",
        "is_active",
        "created_at"
    ]