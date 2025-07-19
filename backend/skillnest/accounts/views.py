from django.shortcuts import render
from rest_framework.views import APIView
from accounts.serializers import LoginSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny,IsAuthenticated

class RegisterView(APIView):
    permission_classes=[AllowAny]
    def post(self,request):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def get(self,requets):
        return Response({'message':'Register view'})

class ProtectedView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self,request):
        return Response({'message':'You are authenticated'})
    
class LoginView(APIView):
    permission_classes=[AllowAny]
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            response = Response({
                'user': data['user'],
                'message': 'Login successful'
            }, status=status.HTTP_200_OK)

            # Set cookies (HTTPOnly for security)
            response.set_cookie(
                key='access_token',
                value=data['access'],
                httponly=True,
                samesite='Lax'
            )
            response.set_cookie(
                key='refresh_token',
                value=data['refresh'],
                httponly=True,
                samesite='Lax'
            )
            return response

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

