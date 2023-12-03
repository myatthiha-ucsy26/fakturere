from django.db import models

class Product(models.Model):
    article = models.IntegerField()
    product = models.CharField(max_length=255)
    inprice = models.IntegerField()
    price = models.IntegerField()
    unit = models.CharField(max_length=50)
    stock = models.IntegerField()
    description = models.TextField()

    def __str__(self):
        return self.product
