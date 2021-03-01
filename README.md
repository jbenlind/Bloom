
## What is it?

Bloom is app built to make getting married less stressful. It's main purpose is to allow guests the option of RSVPing online, and having all of the information they need at their fingertips at all times.

## Developing

To start local development for this application, you'll need to:

1. `git clone` this repo
2. `cd` into the local repo
3. Run `pipenv install` in the root of the project
4. Create your own `.env` file in the root of the project based on the `.env.example` there
5. Create a user that matches the user you identified in your `.env` file in PostgreSQL
6. Create a database that matches the database you identified in your `.env` file in PostgreSQL
7. Go into the pipenv shell with `pipenv shell`
8. Run `flask db upgrade` to apply the migrations to your local database
9. Run `flask seed all` to seed your local database with our seeder content
10. Open another terminal and `cd` into the `react-app` directory and `npm install` there
11. Create your own `.env` file in the `react-app` directory based on the `.env.example` there
12. Start your Flask backend in the terminal that's in the root of the local project with `flask run`
13. Run `npm start` in your `react-app` directory to start the React app. This should open in your default browser.
14. Be sure to make your own branch for your changes before pushing up to GitHub.

## Technologies Used

* PostgreSQL
* Python
* Flask
* SQLAlchemy
* Alembic
* WTForms
* React
* JavaScript
* AWS S3
* Redux
* Heroku

## Live Site

[Here's](https://bloom-jesse-lindloff.herokuapp.com/) a link to the live app!

## Wiki

[Here's](https://github.com/jbenlind/Bloom/wiki) a link to our documentation!

## Features

Guests can:

* RSVP online
* View the venue
* Get directions easily with the google maps api
* Add the event to their calendar
* Opt in for email notifications if information changes

Owners can:

* Change and update the site quickly quickly
* Send out emails to everyone that opts in for it to keep them updated
# Bloom
