from django.urls import path, include
from . import views


urlpatterns = [   
    path('', views.home, name='home'),
    path('cadastro/', views.signin, name='signin'),
    path('accounts/', include('django.contrib.auth.urls'), name='login'),
    #path('accounts/', include('allauth.urls')),

]


