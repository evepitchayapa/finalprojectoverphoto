from rest_framework import serializers
from .models import Image,CommentImage
class ImageUploadSerializer (serializers.ModelSerializer) :
    class Meta :
        model = Image
        fields = ("image")
class CommentSerializer (serializers.ModelSerializer):
    class Meta :
        model = CommentImage
        fields = ("comment")
# class LikeSerializer (serializers.ModelSerializer):
#     class Meta :
#         model = UploadImage
#         fields = ("like")
