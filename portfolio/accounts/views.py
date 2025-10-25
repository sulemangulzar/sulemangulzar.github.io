from django.db import models
from django.shortcuts import render as render_template

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.name
    

def home(request):
    return render_template(request, 'index.html')