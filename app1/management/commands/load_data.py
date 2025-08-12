import pandas as pd
from django.core.management.base import BaseCommand
from app1.models import Product

class Command(BaseCommand):
    help = 'Load water footprint data from Excel file'

    def handle(self, *args, **kwargs):
        file_path = r'D:\hydroscope\hydro\Wfp.xlsx'  # Ensure this path is correct
        df = pd.read_excel(file_path)

        # Print columns for debugging (you can remove this once it works)
        print(df.columns)

        for index, row in df.iterrows():
            Product.objects.create(
                name=row['Product name'],  # Updated to match your column
                water_footprint=row['values(L/Kg)']  # Updated to match your column
            )

        self.stdout.write(self.style.SUCCESS('Data loaded successfully'))
