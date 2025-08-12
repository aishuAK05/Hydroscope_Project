from django.shortcuts import render
from django.utils.translation import gettext as _  # Import gettext for translations

def visualization(request):
    # You can add any context or processing you need for your visualization page here
    context = {
        'title': _("Data Visualization"),  # Marking the title for translation
        'description': _("Explore various data visualizations related to water footprints and resource usage."),  # Marking description for translation
    }
    return render(request, 'visualization.html', context)  # Ensure this template exists
