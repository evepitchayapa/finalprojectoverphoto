from django.db import models
import datetime
from  django.utils import timezone

class Image (models.Model):
    image = models.FileField(blank=False, null=False)
    caption = models.CharField(max_length=200, default='SOME STRING' )
class CommentImage (models.Model):
    img_id = models.IntegerField(default=0)
    comment = models.TextField()

    
# class Likes (models.Model):
#     img = models.ForeignKey(Image,on_delete = models.CASCADE)
#     like = models.IntegerField() 



