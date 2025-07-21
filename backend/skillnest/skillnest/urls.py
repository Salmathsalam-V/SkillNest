from django.contrib import admin
from django.urls import path, include
from accounts.views import LoginView, RegisterView,ProtectedView, TokenRefreshCookieView,LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from creator.views import PostView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  
    path('account/', include('accounts.urls')),
    path('creator/', include('creator.urls')),  
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshCookieView.as_view(), name='token_refresh'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/protected/', ProtectedView.as_view(), name='protected_view'),
    path('api/post/', PostView.as_view(),name='post'),
    path('api/logout/', LogoutView.as_view(), name='logout'),

]
