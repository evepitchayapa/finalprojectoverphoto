from uploadapp.models import Image,CommentImage,Likes
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from . serializers import ImageUploadSerializer,CommentSerializer,LikeSerializer
from rest_framework.parsers import FileUploadParser
from rest_framework import generics

class ImageUploadView (APIView):
    parser_class = (FileUploadParser,)
    def post(self, request, *args, **kwargs):
        image_serializer = ImageUploadSerializer(data = request.data)

        if image_serializer.is_valid ():
            image_serializer.save()
            return Response(image_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentCreateView (APIView):
    def post(self, request, *args, **kwargs):
        comment_serializer = CommentSerializer(data = request.data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            return Response(comment_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(comment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LikeCreateView (APIView):
    def post(self, request, *args, **kwargs):
        like_serializer = LikeSerializer(data = request.data)
        if like_serializer.is_valid():
            like_serializer.save()
            return Response(like_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(like_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageShowView (generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageUploadSerializer

class commentShowView (generics.ListAPIView):
    queryset = CommentImage.objects.all()
    serializer_class = CommentSerializer
class LikeShowView (generics.ListAPIView):
    queryset = Likes.objects.all()
    serializer_class = LikeSerializer
