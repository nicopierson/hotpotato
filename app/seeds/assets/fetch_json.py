"""fetch_json.py

description: script that fetches all json data from spoontacular api based on
the parameters array and saves the data as a json file in the current directory.

API_KEY - add your own api key using an account from spoontacular.com
"""

import json
import requests


def save_file(json_data, file_name):
    with open(file_name, "w") as write_file:
        json.dump(json_data, write_file, indent=4)


file_name = './recipes.json'
API_KEY = 'spoontacular_api_key'
includeIngredients = True
addRecipeInformation = True
fillIngredients = True

parameters = [
    {
        'apiKey': API_KEY,
        'diet': 'vegetarian',
        'cuisine': '',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 30,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'italian',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'japanese',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'vietnamese',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'indian',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'thai',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'greek',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'french',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'caribbean',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'african',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'mexican',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'mediterranean',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'southern',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'german',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'cajun',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'american',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'korean',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'jewish',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'spanish',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
    {
        'apiKey': API_KEY,
        'diet': '',
        'cuisine': 'irish',
        'includeIngredients': includeIngredients,
        'addRecipeInformation': addRecipeInformation,
        'number': 5,
        'offset': 0,
        'fillIngredients': fillIngredients,
    },
]

# TODO Refactor parameters to take all cuisines as an array
# Vietnamese
# Indian
# Greek
# French
# Caribbean
# Italian
# Thai
# Japanese
# African
# Mexican
# Mediterranean
# Southern
# German
# Cajun
# American
# Korean
# Jewish
# Spanish
# Irish

json_data = {'results': []}

for parameter in parameters:
    response_url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey={apiKey}&cuisine={cuisine}&diet={diet}&includeIngredients={includeIngredients}&addRecipeInformation={addRecipeInformation}&number={number}&offset={offset}&fillIngredients={fillIngredients}'.format(
        **parameter)
    response = requests.get(response_url)

    data = json.loads(response.text)

    for idx in range(len(data['results'])):
        json_data['results'].append(data['results'][idx])


save_file(json_data, file_name)
