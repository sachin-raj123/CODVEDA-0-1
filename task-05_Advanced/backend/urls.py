from django.contrib import admin
from django.urls import path, re_path,include
from .views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),  # user auth API
    re_path(r'^.*$', FrontendAppView.as_view(), name='home'),  # React ke liye catch-all
    

]
