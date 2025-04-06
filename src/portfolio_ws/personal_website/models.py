from django.db import models


class Project(models.Model):
    CATEGORY_CHOICES = [
        ('hockey', 'Hockey'),
        ('science', 'Science'),
        ('biking', 'Biking'),
        ('django', 'Django'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField()
    categories = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    technologies = models.CharField(max_length=200)
    project_url = models.URLField()

    def __str__(self):
        return self.title

class CareerMilestone(models.Model):
    title = models.CharField(max_length=200)
    date = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title

class Advice(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon_class = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"

class Interest(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon_class = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=100)
    level = models.IntegerField(help_text="Skill level as a percentage")

    def __str__(self):
        return f"{self.name} ({self.level}%)"

