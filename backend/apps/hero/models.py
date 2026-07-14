from django.db import models

# Create your models here.



class HeroBanner(models.Model):

    badge = models.CharField(
        max_length=100
    )

    title = models.CharField(
        max_length=200
    )

    subtitle = models.TextField()


    image = models.ImageField(
        upload_to="hero/"
    )


    button_one_text = models.CharField(
        max_length=50,
        default="Shop Now"
    )


    button_one_link = models.CharField(
        max_length=100,
        default="/products"
    )


    button_two_text = models.CharField(
        max_length=50,
        default="Explore"
    )


    button_two_link = models.CharField(
        max_length=100,
        default="/categories"
    )


    is_active = models.BooleanField(
        default=True
    )


    created_at = models.DateTimeField(
        auto_now_add=True
    )


    class Meta:
        ordering = [
            "-created_at"
        ]


    def __str__(self):
        return self.title