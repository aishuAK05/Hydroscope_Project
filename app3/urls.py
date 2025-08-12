from django.urls import path
from . import views

app_name = 'visualization'  # Define the namespace

urlpatterns = [
    path('', views.visualization, name='visualization_page'),  # Correct function name
]
