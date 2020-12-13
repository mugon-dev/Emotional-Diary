from django.urls import path

from api.views import main, analysisOne, load_emolex, saveBoard, analysisGroup, analysisMy

urlpatterns = [
    path('', main.as_view()),
    path('one/',analysisOne.as_view()),
    path('oneEmotion/', saveBoard.as_view()),
    path('groupEmotion/<int:pk>', analysisGroup.as_view()),
    path('myEmotion/<int:pk>', analysisMy.as_view()),
]
