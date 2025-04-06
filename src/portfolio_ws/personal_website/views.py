from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def start_page(request):
    return render(request, "personal_website/index.html")
