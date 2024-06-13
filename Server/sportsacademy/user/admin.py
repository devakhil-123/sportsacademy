from django.contrib import admin
from .models import Students,Sport,Coach,TrainingSession,Team,Event

admin.site.register(Students)
admin.site.register(Coach)
admin.site.register(Sport)
admin.site.register(TrainingSession)
admin.site.register(Team)
admin.site.register(Event)


