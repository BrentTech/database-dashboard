![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Database Dashboard

### Author: Brent Woodward

### Links and Resources
[![Build Status](https://www.travis-ci.com/applena/20-project-api.svg?branch=master)](https://www.travis-ci.com/applena/20-project-api)
* [API repo](https://github.com/BrentTech/API-Server-DB)
* [API deployment](https://api-dashboard-server.herokuapp.com/)
* [Q server repo](https://github.com/BrentTech/dashboard-q-server)
* [Q server deployment](https://q-dashboard-server.herokuapp.com/)
* [Database Dashboard repo](https://github.com/BrentTech/database-dashboard)
* [Database Dashboard](https://codesandbox.io/s/5x9j6opn6x) (Code Sandbox)

### Setup
#### `.env` requirements
* `PORT` -  managed by hosting service
* `REACT_APP_Q_SERVER` - URL to Q server deployment

#### Running the app
##### HTTP Routes
* Endpoint: `/api/v1/players`
  * Returns a JSON list of all the players
* Endpoint: `/api/v1/teams`
  * Returns a JSON object with all the teams.
* Endpoint: `/api/v1/players/id`
  * Returns a JSON object with the player with the specified id.
* Endpoint: `/api/v1/teams/id`
  * Returns a JSON object with the team wiht the specifed id.
  
# Tests

## Create a Player or Team
http POST :3000/api/v1/players | accepts parameters name, position, throws, bats, and team
http POST :3000/api/v1/teams | accepts parameter name

## Display a Team or Player
http :3000/api/v1/teams
http :3000/api/v1/players
http :3000/api/v1/teams/{id}
http :3000/api/v1/players/{id}

## Update a Player or Team
http PUT :3000/api/v1/players/{id} | accepts parameters name, position, throws, bats, and team
http PUT :3000/api/v1/teams/{id} | accept parameters name

## Delete a Player or Team
http DELETE :3000/api/v1/players/{id}
http DELETE :3000/api/v1/teams/{id}

## How do I call them and what data do they expect?
* To call the routes, go to the heroku site or your terminal and add the route to the end of the deployed API server URL

## What format does data come back?
* Data is returned in the form of a JSON object.
