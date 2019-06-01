from django.shortcuts import render
import Store.services
from Store.services.magicApiCaller import MagicApiCaller


def index(request):
    message = request.GET.get('message')

    # TODO create cache, and check that before calling api again

    magicCaller = MagicApiCaller()
    sets = magicCaller.getSets()

    # TODO null check here

    return render(request, "_storeLayout.html", sets)

