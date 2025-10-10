from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, LoginSerializer
from .serializers import ResetPasswordSerializer
from django.utils.crypto import get_random_string

# Signup view
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)


# Login view
class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        user = authenticate(request, username=email, password=password)  # email-based login
        if user is None:
            return Response({"detail": "Invalid email or password"}, status=400)

        refresh = RefreshToken.for_user(user)

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "username": user.username  # <- yaha bhej rahe ho username
        }, status=status.HTTP_200_OK)
        
        
        
        
# resetpassword view        
class ResetPasswordView(generics.GenericAPIView):
    serializer_class = ResetPasswordSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'No user found with this email'}, status=status.HTTP_400_BAD_REQUEST)

        # Generate a temporary password or token
        temp_password = get_random_string(length=8)
        user.set_password(temp_password)
        user.save()

        # Send password reset email
        send_mail(
            subject='Password Reset Request',
            message=f'Your temporary password is: {temp_password}\nPlease login and change it immediately.',
            from_email=None,  # Uses DEFAULT_FROM_EMAIL
            recipient_list=[email],
        )

        return Response({'success': 'Password reset email sent!'}, status=status.HTTP_200_OK)
