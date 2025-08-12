from django.db import models
from django.contrib import admin

# Define the Product model
class Product(models.Model):
    name = models.CharField(max_length=100)
    water_footprint = models.FloatField()

    def __str__(self):
        return self.name

# Register the Product model in the Django Admin
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'water_footprint')  # Add the fields you want to display




# Create your models here.
