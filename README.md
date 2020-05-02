## Zoomwolves

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=squeakycheese75_zoomwolves&metric=alert_status)](https://sonarcloud.io/dashboard?id=squeakycheese75_zoomwolves)

An online version of the classic social deduction game Werewolves. Built to support playing the game via a conferencing tool like zoom or jitsi.

# Hosting

- [Game hosting](http://zoomwolves-bucket.s3-website.eu-west-2.amazonaws.com/ "Zoomwolves Game")
- [API hosting](http://3.9.162.97:3000/ "Zoomwolves api")

## Add a .env file

To connect if you're running locally

```
REACT_APP_API_URL = 'http://localhost:5000'
```

If you're going to build and run with docker-compose then you can't use localhost.

```
REACT_APP_API_URL = 'http://3.9.162.97:3000'
```

## Build

```
npm install
```

## Test

```
npm test
```

## Run

```
npm start
```
