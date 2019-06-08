import requests


class MagicApiCaller:
    baseUrl = "https://api.magicthegathering.io/v1/"

    def __init__(self):
        self.g = "gangster"


    def getSets(self):
        getSetsUrl = self.baseUrl + "sets"
        response = requests.get(getSetsUrl)

        return response.json()



