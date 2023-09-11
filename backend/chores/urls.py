from django.urls import path
from .views import ChoreView

urlpatterns = [
    path('chore', ChoreView.as_view()),
]