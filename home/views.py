from django.shortcuts import render
from django.utils.translation import gettext as _  # Import translation function

def home_view(request):
    context = {
        'welcome_message': _("Welcome to the Water Footprint Calculator")  # Example of passing a translated string
    }
    return render(request, 'home.html', context)
