from rest_framework import serializers
from .models import Image,CommentImage,Likes
class ImageUploadSerializer (serializers.ModelSerializer) :
    class Meta :
        model = Image
        fields = "__all__"
class CommentSerializer (serializers.ModelSerializer):
    class Meta :
        model = CommentImage
        fields = "__all__"
class LikeSerializer (serializers.ModelSerializer):
    class Meta :
        model = Likes
        fields = "__all__"


