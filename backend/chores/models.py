from django.db import models

class Chore(models.Model):
    task = models.CharField(max_length=255)
    description = models.CharField(max_length=10000)
    completedBy = models.CharField(max_length=255)
    price = models.FloatField()
    issuer = models.CharField(max_length=255)
    isPaid = models.BooleanField(default=False, editable=False)