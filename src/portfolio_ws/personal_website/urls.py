from django.contrib import admin
from django.urls import include, path
from personal_website import views

urlpatterns = [
    path('/', views.start_page)
    ]