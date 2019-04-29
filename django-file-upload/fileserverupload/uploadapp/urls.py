from django.urls import path
from .views import *

urlpatterns = [
    path ('upload/',ImageUploadView.as_view()),
    path ('addcomment/',CommentCreateView.as_view()),
    path ('img/',ImageShowView.as_view()),
    path ('comment/',commentShowView.as_view()),
]


