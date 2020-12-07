from django.urls import path, include
from .views import main, RegistrationAPI, LoginAPI, UserAPI

urlpatterns = [
    path('', main),
    path("auth/register/", RegistrationAPI.as_view()),
    path("auth/login/", LoginAPI.as_view()),
    path("auth/user/", UserAPI.as_view()),
]
