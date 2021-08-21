<p align='center'>
  <img src='#' >
</p>

# Hotpotato
Hotpotato is a recipe portfolio App that assists users to discover and comment new recipes. It is a fullstack React App made with a Redux state manager and a backend using Python, Flask, SQL-Alchemy, and PostgresSQL. 

* View the <a href='https://hotpotato-app.herokuapp.com/'>Hotpotato</a> App Live
* It is modeled after the <a href='https://www.behance.net/'>Behance</a> App
* Contains recipes for Vegetarians, Vegans, and Gluten-Free diets.

* Reference to the Hotpotato <a href='https://www.github.com/nicopierson/hotpotato/wiki'>Wiki Docs</a>

| Table of Contents |
| ----------------- |
| 1. [Features](#features) |
| 2. [Installation](#installation) |
| 3. [Technical Implementation Details](#technical-implementation-details) |
| 4. [Future Features](#future-features) |
| 5. [Contact](#contact) |
| 6. [Special Thanks](#special-thanks) |

## Technologies
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
* <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL" /></a>
* <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"></a>
* <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
* <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"></a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
* <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" /></a>
* <a href="https://flask.palletsprojects.com/"><img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" /></a>
* <a href="https://www.heroku.com/home"><img src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white" /></a>

## Features

### Feed Page
Hotpotato feed displays all recipes and chefs
Discover and search for new recipes
![Splash Page]()
* Example - ./readme_assets/sign_up.jpg

### Sign In and Sign Up
![Sign Up]()
![Sign In]()

### View Recipe
Single recipe of name, photos, ingredients, directions, and comments
![Recipe Page]()

### Edit Recipe Ingredients
Edit a recipe direction(s) in the database
![Edit Recipe Direction]()

### Edit Recipe Directions
Edit a recipe direction(s) in the database
![Edit Recipe Direction]()

### Comment
Users can add comments for a recipe
![Review]()

### Edit and Delete Comment
Edited Comment is highlighted and can be deleted
![Review Edit Delete]()

### Add Recipe
Add a new recipe to the database
![Add Recipe]()

## Installation
To build/run project locally, please follow these steps:

1. Clone this repository

```shell
git clone https://github.com/nicopierson/hotpotato.git
```

2. Install Pipfile dependencies and create the virtual environment
```shell
pipenv install
```

2. Install npm dependencies for the `/react-app`

```shell
cd react-app
npm install
```

3. In the `/` root directory, create a `.env` based on the `.env.example` with proper settings
4. Setup your PostgreSQL user, password and database and ensure it matches your `.env` file
5. Start the flask backend in the `/` root directory
```shell
flask run
```

6. Start the frontend in the `/react-app` directory

```javascript
npm start
```

## Technical Implementation Details

### First Implementation
First Description

Code snippet is shown here:

```javascript
const [state, setState] = useState(false);

useEffect(() => {

}, [state]);
```

Second Description

```javascript
return (
    <div>
      {show &&
         <Recipe 
            setState={setState}
          />
      }
      {!show &&
         <EditRecipe 
            setState={setState}
         />
      }
    </div>
  );
```

### Second Implementation
Second Description

Code snippet is shown here:

```javascript
const [state, setState] = useState(false);

useEffect(() => {

}, [state]);
```

## Future Features

1. __Search__ - search recipes or chefs

2. __Second__ - second feature description

3. __Third__ - third feature description

## Contact

### Casey Tuer
* caseytuer@gmail.com
* <a href="https://www.linkedin.com/in/caseytuer/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=flat&logo=linkedin&logoColor=white" /></a>
* [AngelList]()
* <a href="https://www.linkedin.com/in/caseytuer/"><img src="https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white" /></a>

### Leslie Owiti
* leslieowiti@yahoo.com
* <a href="https://www.linkedin.com/in/leslie-owiti-0b447952/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=flat&logo=linkedin&logoColor=white" /></a>
* [AngelList]()
* <a href="https://github.com/leslieowititech"><img src="https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white" /></a>

### Nico Pierson
* nicogpt@gmail.com
* <a href="https://www.linkedin.com/in/nico-pierson/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=flat&logo=linkedin&logoColor=white" /></a>
* [AngelList](https://angel.co/u/nico-gerard-pierson)
* <a href="https://github.com/nicopierson"><img src="https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white" /></a>


### Wes Trinh
* westrinh00@gmail.com
* <a href="#"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=flat&logo=linkedin&logoColor=white" /></a>
* [AngelList]()
* <a href="https://github.com/WesTrinhKL"><img src="https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white" /></a>

## Special Thanks
* Any Special Thanks
* Mentors who have given me their time and effort: [Zach](https://github.com/zdwatts), [Ed](https://github.com/edherm), and [Javier](https://github.com/javiermortiz) 
