from django.shortcuts import render
from Store.services.magicApiCaller import MagicApiCaller
from Store.Cache.magicCache import MagicCache
import re
import json


def index(request):
    message = request.GET.get('message')

    # TODO create cache, and check that before calling api again

    if MagicCache.sets is None:
        print("no cache")
        magicCaller = MagicApiCaller()

        sets = magicCaller.getSets()['sets']
        newCache = []
        for set in sets:
            if set is not None and not set['onlineOnly']:
                safeName = re.sub('[^A-Za-z0-9\.]+',  ' ', set['name']).lstrip()

                newItem = {"name": safeName, "code": set['code'], "releaseDate": set['releaseDate']}
                newCache.append(newItem)

        MagicCache.sets = newCache

    # TODO null check here
    return render(request, "_storeLayout.html", {"sets": MagicCache.sets})

