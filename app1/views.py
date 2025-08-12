from django.shortcuts import render
from django.utils import translation  # Import translation module
from django.utils.translation import gettext as _  # Import the translation function
from .models import Product

def water_footprint(request):
    # Check for language change
    if request.method == 'POST':
        selected_language = request.POST.get('language')
        if selected_language:
            translation.activate(selected_language)  # Activate the selected language
            request.session[translation.LANGUAGE_SESSION_KEY] = selected_language  # Update the session

    query = request.GET.get('product_name', '')
    product = Product.objects.filter(name__iexact=query).first()
    
    # Add translated strings
    title = _("Water Footprint Calculator")  # Title for the page
    no_product_message = _("No product found. Please try another name.")  # Message for no product found
    
    context = {
        'product': product,
        'query': query,  # Pass the query to show in case of no product
        'title': title,  # Add the title to context
        'no_product_message': no_product_message,  # Add the no product message to context
    }
    
    return render(request, 'footprint.html', context)
