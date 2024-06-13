from rest_framework import serializers
from .models import Students,Sport,Coach,Team,TrainingSession,Event
from django.contrib.auth.models import User



class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Students
        fields="__all__"

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sport
        fields="__all__"
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model=Team
        fields="__all__"
class TrainingsessionSerializer(serializers.ModelSerializer):
    class Meta:
        model=TrainingSession
        fields="__all__"
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event
        fields="__all__"
class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model=Coach
        fields="__all__"
        
