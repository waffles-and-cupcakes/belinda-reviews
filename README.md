# AirBnC Room Listing Reviews

> AirBnC is a lovely room listing app for travellers to find places to stay!
> Check out our customers' room listing reviews by cloning this repo :)

![](https://i.imgur.com/hof72nu.png)

This project was build using ReactJS, MaterializeCSS, Webpack, NodeJS, ExpressJS, and Postgres. It was deployed using Docker and EC2.

## Related Projects

Check out the proxy server I made that combines all of the components:
  - AirBnC Full App: https://github.com/waffles-and-cupcakes/belinda-proxy

See the other components here:
  - AirBnC Listing Description: https://github.com/waffles-and-cupcakes/shiyao-listingDescription
  - AirBnC Photo Gallery: https://github.com/waffles-and-cupcakes/steve-photo-gallery

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Before starting, please read the Requirements and Development sections below to ensure that your environment is correctly configured.

First, we need to seed the database. Do so by executing the following command in your psql shell, from the root directory:
```sh
\i db/generateMockData.sql
```
Then, build and run the application:
```sh
npm run build
npm start
```
And now you're finished! ~Easy peasy lemon squeezy~ You can visit 

`http://localhost:3004/rooms/:room_id` 

in your browser to see the reviews of any room. Note that `:room_id` is the room number, which ranges from 1 to 100.

> **Note:** The commented out lines in  `server/queries.js` and `client/components/app.jsx` were for dockerizing and EC2 deployment. Feel free to edit these lines for your own purpose!

## Requirements

*Note: A `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).*

You should have this Node version or higher installed:
> Node 6.13.0 and up

Postgres is also required for seeding and running the database:
> Postgres 10.3

## Development

### Installing Dependencies

Run these commands within the root directory:

```sh
npm install -g webpack
npm install
```


