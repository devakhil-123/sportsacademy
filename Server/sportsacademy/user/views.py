from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import StudentSerializer,SportSerializer
from .models import Students,Sport,Event


class studentmodelviewset(ModelViewSet):
    serializer_class=StudentSerializer
    queryset=Students.objects.all()


class sportmodelviewset(ModelViewSet):
    serializer_class=SportSerializer
    queryset=Sport.objects.all()

class eventmodelviewset(ModelViewSet):
    serializer_class=SportSerializer
    queryset=Event.objects.all()


