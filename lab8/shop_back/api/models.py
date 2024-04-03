from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=120)
    
    def __str__(self):
        return self.name
    
    
class Product(models.Model):
    name = models.CharField(max_length=120)
    price = models.FloatField()
    description = models.TextField()
    stock = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    

