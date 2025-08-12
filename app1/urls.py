from django.urls import path
from . import views

app_name = 'app1'
urlpatterns = [
    path('', views.water_footprint, name='water_footprint'),  # Root path for the water footprint
]
