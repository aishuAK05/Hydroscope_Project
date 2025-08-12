"""
URL configuration for hydro project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import include, path
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns

def redirect_to_footprint(request):
    return HttpResponseRedirect('water-footprint/')

def home_page(request):
    return render(request, 'home.html')

# Create a list of URL patterns for the project
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', redirect_to_footprint),  # Redirect root to /water-footprint/
    path('home/', home_page, name='home'),  # Route for home page
    path('visualization/', include('app3.urls')),  # Linking app3's URLs
]

# Include i18n patterns for language support
urlpatterns += i18n_patterns(
    path('water-footprint/', include('app1.urls')),  # Include app1 URLs
    path('i18n/', include('django.conf.urls.i18n')),  # Include the i18n URL patterns for language switching
)
