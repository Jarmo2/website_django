from django.contrib import admin
from django.urls import path
from personal_website import views

app_name = "personal_website"
urlpatterns = [
    path('', views.start_page, name="home"),
    path('about/', views.about_page, name='about'),
    ]