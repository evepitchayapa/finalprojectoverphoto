from django.db import models
import datetime
from  django.utils import timezone

class Image (models.Model):
    image = models.FileField(blank=False, null=False)
    
    # like = models.IntegerField()
class CommentImage (models.Model):
    img = models.ForeignKey(Image,on_delete = models.CASCADE)
    comment = models.TextField()


