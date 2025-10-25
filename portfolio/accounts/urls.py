from django.urls import path
from . import views

urlpatterns = [
    # path("api/send-message/", views.send_message, name="send_message"),
    path("", views.home, name="home"),
]
