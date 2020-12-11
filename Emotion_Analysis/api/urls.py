from django.urls import path

from api.views import main, getBoard, load_emolex, test

urlpatterns = [
    path('', load_emolex),
    path('one/',getBoard.as_view()),
    path('test/',test.as_view()),
]
