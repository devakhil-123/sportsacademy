from rest_framework import serializers
from .models import Students,Sport
from django.contrib.auth.models import User



class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Students
        fields="__all__"

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sport
        fields="__all__"
        
