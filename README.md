# [Gourmet Story](https://gourmet-story.herokuapp.com/)

<img src="static/img/logo.PNG">

You love to explore foods and want to have your own cookbook? You've come to the right place! [Gourmet Story](https://gourmet-story.herokuapp.com/) is a place to find tasty recipes that will satisfy your desire for exploring various types of foods and give you the chance to create your profile where you can add your recipes for others. You can even print and share recipes directly from the site!

---

## Table of Contents
1. [**UX**](#ux)
    - [**User Stories**](#user-stories)
    - [**Design**](#design)
        - [**Framework**](#framework)
        - [**Color Scheme**](#color-scheme)
        - [**Icons**](#icons)
        - [**Typography**](#typography)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)
    - [**Front-End Technologies**](#front-end-technologies)
    - [**Back-End Technologies**](#back-end-technologies)

4. [**Testing**](#testing)
    - [**Validators**](#validators)
    - [**Compatibility**](#compatibility)
    - [**Known Issues**](#known-issues)

5. [**Deployment**](#deployment)
    - [**Local Deployment**](#local-deployment)
    - [**Remote Deployment**](#remote-deployment)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
    - [**Acknowledgements**](#acknowledgements)

---

## UX

This project is part of my [Code Institute](https://codeinstitute.net/) Full Stack Software Development studies, specifically the **Data Centric Development** module. The objective for this milestone project is to "*Create a web application that allows users to store and easily access cooking recipes*", using the **CRUD** operations of **C**reate, **R**ead, **U**pdate, and **D**elete for their recipes.

I have decided to build a desserts-only project, since I personally bake quite regularly, and several of my own recipes are compiled in different places (kitchen cabinet, saved online, printed and shoved in a drawer, etc.). This was the perfect opportunity to finally have a single application to contain all of my own recipes in one source. A lot of people often ask me for specific recipes, so now I can quickly provide a single source for all of my recipes that can easily be shared or printed. It also allows others to store their own recipes securely.

### User Stories

"**_As a user, I would like to_** _____________________________"



-  *view the site* from **any device** *(mobile, tablet, desktop)*.
-  *view all recipes* as a **Guest**.
-  *filter recipes* by **dessert type**.
-  *sort/order recipes* by **author, favorites, last updated, recipe name, total time, and views**.
-  **limit** the number of *recipes* to display, or see *all recipes*.
-  *create* my **own profile**.
-  *add* my **own recipes**.
-  *edit* my **own recipes**.
-  *delete* my **own recipes**.
-  be able to **log out**.
-  be able to **change my password**.
-  be able to **delete my account**.
-  *save recipes* in **my favorites**.
-  *remove recipes* from **my favorites**.
-  *see instructions* on how to **add a recipe**.
-  **print** a *particular recipe*.
-  **share** a *particular recipe*.
-  *see* **recommended recipes** after *viewing a recipe*.
-  *see* the **total views** of *a recipe*.
-  *see* how many people **like** my *recipes*.
-  *see* a cooking/baking **conversion table**.

### Design

I like bright and cheerful colors and designs for my website.

#### Framework

- [Materialize 1.0.0](https://materializecss.com/)
    - I really like the modern and clean layout of Materialize as a framework, with its simple-to-understand documentation.
- [jQuery 3.4.0](https://code.jquery.com/jquery/)
    - In an effort to keep the JavaScript minimal, I have decided to use jQuery as foundation to my scripts framework.
- [Flask 1.0.2](http://flask.pocoo.org/)
    - Flask is a microframework that I've used to render the back-end Python with the front-end Materialize.

#### Color Scheme

In keeping with the overall *sweet* theme, I have opted for a bright and colorful color scheme. These standard [Materialize Colors](https://materializecss.com/color.html) work quite well for my project.

- ![#9C27B0](https://placehold.it/15/9C27B0/9C27B0) `#9C27B0` (**purple** - *primary color*)
- ![#F06292](https://placehold.it/15/F06292/F06292) `#F06292` (**pink lighten-2** - *secondary color*)
- ![#2196F3](https://placehold.it/15/2196F3/2196F3) `#2196F3` (**blue** - *tertiary color*)
- ![#4CAF50](https://placehold.it/15/4CAF50/4CAF50) `#4CAF50` (**green** - *quaternary color*)

#### Icons

- [Materialize Icons](https://materializecss.com/icons.html)
    
- [Font Awesome 5.8.1](https://fontawesome.com/)
   

#### Typography



### Wireframes

For my wireframes, I have used [Balsamiq Wireframes](https://balsamiq.com/) as it is quite easy to use.

All of my wireframes for this project can be found [here](https://github.com/mesub-directory.

##### back to [top](#table-of-contents)

---

## Features

I've added a few extra features to my project that weren't part of the requirements, because I felt they made the project 'complete' for better user interaction.

### Existing Features

**Register Account**
- Anybody can register for free and create their own unique account. I have built-in authentication and authorization to check certain criteria is met before an account is validated. All passwords are hashed for security purposes!

**Log In to Account**
- For existing users, I have more authentication and authorization incorporated to check that the hashed passwords and username match the database.

**Change Password**
- Users can update their passwords from their profile page, after first validating their existing password.

**Log Out of Account**
- Users can easily log out of their account with the click of a button.

**Delete Account**
- Users can delete their entire account, but a warning is provided to first validate their password, and advise that all of their own recipes will also be deleted, and their favorites removed.

**View All Recipes**


**Search for Recipes**


**Add a Recipe**

**View a Recipe**

**Update a Recipe**


**Delete a Recipe**

**Save a Recipe to Favorites**
- Users can save their own recipes, or recipes submitted by other users, directly into their profile for quicker access next time.

**Remove a Recipe from Favorites**
- If a user no longer likes a recipe, or simply wants to remove it from their favorites, a single click can remove a recipe.

**Admin Superuser**

### Features Left to Implement


##### back to [top](#table-of-contents)

---

## Technologies Used


- [GitHub](https://github.com/) - Used as remote storage of my code online.

### Front-End Technologies

- [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used as the base for markup text.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Used as the base for cascading styles.
- [jQuery 3.4.0](https://code.jquery.com/jquery/) - Used as the primary JavaScript functionality.
- [Materialize 1.0.0](https://materializecss.com/) - Used as the overall design framework.


### Back-End Technologies

- **Flask**
    - [Flask 1.0.2](http://flask.pocoo.org/) - Used as a microframework.
    - [Jinja 2.10](http://jinja.pocoo.org/docs/2.10/) - Used for templating with Flask.
    - [Werkzeug 0.16](https://werkzeug.palletsprojects.com/en/0.16.x/) - Used for password hashing, authentication, and authorization.
- **Heroku**
    - [Heroku](https://www.heroku.com) - Used for app hosting.
- **Python**    
    - [Python 3.6.7](https://www.python.org/) - Used as the back-end programming language.
    - [MongoDB Atlas](https://www.mongodb.com/) - Used to store my database in the 'cloud'.
    - [PyMongo 3.8.0](https://api.mongodb.com/python/current/) - Used as the Python API for MongoDB.
    - [Python dotenv](https://github.com/theskumar/python-dotenv) - Used to get/set values in `.env` file.

##### back to [top](#table-of-contents)

---

## Testing

**Creating an Account**



**Add | Edit | Delete a Recipe**



**Search**



**Profile**

As a **standard user**, there are four profile buttons.

- *View your own submitted recipes*:
   
- *View recipes you've saved*:
    
- *Change your password*:
   
- *Delete account*:


**Printing a Recipe**



**Share a Recipe**




### Validators

**HTML**
- [W3C HTML Validator](https://validator.w3.org) - Unfortunately the W3C Validator for HTML does not understand the Jinja templating syntax, so it therefore shows a lot of errors with regards to `{{ variables }}`, `{% for %} {% endfor %}`, etc. Aside from the Jinja warnings and errors, all of the remaining code is perfectly validating. Also due to the Jinja templating, certain elements cannot be 'beautified' across multiple lines, and must remain on a single line. An example of this is the `<select>` element, which is rather long with specific Materialize classes, and Jinja templating.

**CSS**
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 


**JavaScript**
- [JShint](https://jshint.com/)
    
**Python**
- [PEP8 Online](http://pep8online.com/)
    

### Compatibility


### Known Issues


##### back to [top](#table-of-contents)

---

## Deployment

### Local Deployment

Please note - in order to run this project locally on your own system, you will need the following installed:
- [Python3](https://www.python.org/downloads) to run the application.
- [PIP](https://pip.pypa.io/en/stable/installing) to install all app requirements.
- Any IDE such as [Microsoft Visual Studio Code](https://code.visualstudio.com).
- [GIT](https://www.atlassian.com/git/tutorials/install-git) for cloning and version control.
- [MongoDB](https://www.mongodb.com) to develop your own database either locally or remotely on MongoDB Atlas.

Next, there's a series of steps to take in order to proceed with local deployment:

- Clone this GitHub repository by either clicking the green *Clone or download* button and downloading the project as a zip-file (remember to unzip it first), or by entering the following into the Git CLI terminal:
    - `git clone https://github.com/TravelTimN/ci-milestone04-dcd.git`.
- Navigate to the correct file location after unpacking the files.
    - `cd <path to folder>`
- Create a `.env` file with your credentials. An example can be found [here](https://github.com/TravelTimN/ci-milestone04-dcd/blob/master/.env_sample). Be sure to include your *MONGO_URI* and *SECRET_KEY* values.
- Create a `.flaskenv` file and add the following entries:
    - `FLASK_APP=run.py`
    - `FLASK_ENV=development`
- Install all requirements from the [requirements.txt](https://github.com/TravelTimN/ci-milestone04-dcd/blob/master/requirements.txt) file using this command:
    - `sudo -H pip3 -r requirements.txt`
- Sign up for a free account on [MongoDB](https://www.mongodb.com) and create a new Database called **2BN-Desserts**. The *Collections* in that database should be as follows:


**CATEGORIES**
```
_id: <ObjectId>
recipe_category: <array>
```

**MEASUREMENTS**
```
_id: <ObjectId>
measurement_unit: <array>
```

**RECIPES**
```
_id: <ObjectId>
recipe_name: <string>
recipe_description: <string>
recipe_category: <string>
ingredient_amount: <array>
ingredient_measurement: <array>
ingredient_name: <array>
preparations: <array>
total_hours: <string>
total_minutes: <string>
total_time: <int32>
img_src: <string>
author: <ObjectId>
date: <string>
date_updated: <string>
last_edit: <int32>
views: <int32>
user_favourites: <int32>
```

**USERS**
```
_id: <ObjectId>
username: <string>
username_lower: <string>
user_password: <string>
user_recipes: <array>
user_favourites: <array>
```

- You should now be able to launch your app using the following command in your terminal:
    - `flask run`
- The app should now be running on *localhost* on an address similar to `http://127.0.0.1:5000`. Simply copy/paste this into the browser of your choice!

### Remote Deployment

This site is currently deployed on [Heroku](https://www.heroku.com/) using the **master** branch on GitHub. To implement this project on Heroku, the following steps were taken:

1. Create a **requirements.txt** file so Heroku can install the required dependencies to run the app.
    - `sudo pip3 freeze --local > requirements.txt`
    - My file can be found [here](https://github.com/SabihaAfroze/gourmet_story-mp-3/blob/master/requirements.txt.
2. Create a **Procfile** to tell Heroku what type of application is being deployed, and how to run it.
    - `echo web: python run.py > Procfile`
    - My file can be found [here](https://github.com/SabihaAfroze/gourmet_story-mp-3/blob/master/Procfile).
3. Sign up for a free Heroku account, create your project app, and click the **Deploy** tab, at which point you can *Connect GitHub* as the Deployment Method, and select *Enable Automatic Deployment*.
4. In the Heroku **Settings** tab, click on the *Reveal Config Vars* button to configure environmental variables as follows:
    - **IP** : `0.0.0.0`
    - **PORT** : `8080`
    - **MONGO_URI** : `<link to your Mongo DB>`
    - **SECRET_KEY** : `<your own secret key>`
    - **MY_ADDRESS** : `<your own email address>`
    - **SEND_TO** : `<recipient email address>`
    - **PASSWORD** : `<you own email password>`
5. The app should be successfully deployed to Heroku at this point.


##### back to [top](#table-of-contents)

---

## Credits

### Content



### Media

Sources of the images used on this site:

- **favicon** : [Clipart-Library](http://clipart-library.com/kawaii-cookie-cliparts.html)


### Code



### Acknowledgements



##### back to [top](#table-of-contents)
