from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    message = request.GET.get('message')

    if message:
        data = {"message": message}
    else:
        data = {"message": "Welcome to the store"}

    return render(request, "welcome.html", data)

