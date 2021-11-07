from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


class RegisterView(APIView):
	permission_classes = (permissions.AllowAny, )

	@swagger_auto_schema(request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'first_name': openapi.Schema(type=openapi.TYPE_STRING, description='first_name'),
            'last_name': openapi.Schema(type=openapi.TYPE_STRING, description='last_name'),
            'username': openapi.Schema(type=openapi.TYPE_STRING, description='username'),
            'password': openapi.Schema(type=openapi.TYPE_STRING, description='password'),
            're_password': openapi.Schema(type=openapi.TYPE_STRING, description='re_password'),
        }))
	def post(self, request):
		try:
			data = request.data

			first_name = data['first_name']
			last_name = data['last_name']
			username = data['username']
			password = data['password']
			re_password = data['re_password']

			if password == re_password:
				if len(password) >= 8:
					if not User.objects.filter(username=username).exists():
						user = User.objects.create_user(
							first_name=first_name,
							last_name=last_name,
							username=username,
							password=password,
						)
						user.save()

						if User.objects.filter(username=username).exists():
							return Response(
								{'detail': 'Account created successfully'},
								status=status.HTTP_201_CREATED
							)
						else:
							return Response(
								{'error': 'Something went wrong when trying to create account'},
								status=status.HTTP_500_INTERNAL_SERVER_ERROR
							)

					else:
						return Response(
							{'error': 'Username already exists'},
							status=status.HTTP_400_BAD_REQUEST
						)

				else:
					return Response(
						{'error': 'Passwords must be at least 8 characters in length'},
						status=status.HTTP_400_BAD_REQUEST
					)

			else:
				return Response(
					{'error': 'Passwords do not match'},
					status=status.HTTP_400_BAD_REQUEST
				)

		except:
			return Response(
				{'error': 'Something went wrong when trying to register account'},
				status=status.HTTP_500_INTERNAL_SERVER_ERROR
			)

class LoadUserView(APIView):

	def get(self, request, format=None):
		try:
			user = request.user
			user = UserSerializer(user)

			return Response(
				{'user': user.data},
				status=status.HTTP_200_OK
			)

		except:
			return Response(
				{'error': 'Something went wrong when trying to load user'},
				status=status.HTTP_500_INTERNAL_SERVER_ERROR
			)
