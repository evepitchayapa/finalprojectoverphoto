from rest_framework import serializers
from .models import Image,CommentImage
class ImageUploadSerializer (serializers.ModelSerializer) :
    class Meta :
        model = Image
        fields = "__all__"
class CommentSerializer (serializers.ModelSerializer):
    class Meta :
        model = CommentImage
        fields = ("comment")


