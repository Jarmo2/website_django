from django.http import HttpResponse
from django.shortcuts import render
from .models import Project

# Create your views here.
def start_page(request):
    projects = Project.objects.all()
    return render(request, "personal_website/base.html", {'projects': projects})

def about_page(request):
    return render(request, "personal_website/about_extension.html")
