from django.db import models

class Students(models.Model):
    Full_name=models.CharField(max_length=100)
    Date_of_birth=models.DateField()
    options=(
        ('male','male'),
        ("female",'female')
    )
    Gender=models.CharField(max_length=200,choices=options)
    photo=models.ImageField()
    Nationality=models.CharField(max_length=100)
    Contact=models.CharField(max_length=100)
    Guardian_name=models.CharField(max_length=100)
    Relationship_with_student=models.CharField(max_length=100)
    Sport=models.CharField(max_length=100)
    Teams=models.CharField(max_length=100)



class Coach(models.Model):
    name = models.CharField(max_length=100)
    contact_information = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    experience = models.PositiveIntegerField()



class Sport(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Team(models.Model):
    name = models.CharField(max_length=100)
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE)
    players = models.ManyToManyField(Students)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class TrainingSession(models.Model):
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=200)
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)


class Event(models.Model):
    Name = models.CharField(max_length=100)
    date = models.DateField()
    start_time = models.TimeField()
    location = models.CharField(max_length=200)
   

   