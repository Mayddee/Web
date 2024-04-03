from django.contrib import admin
from .models import Category, Product
from django.apps import apps

# Register your models here.
api_models = apps.get_app_config('api').get_models()

for model in api_models:
    try:
        admin.site.register(model)
    except admin.sites.AlreadyRegistered:
        pass
