# socket.io Presenter Demo

## Description
This repo contains the super simple proof-of-concept that led to the [LiveSlide](https://github.com/michael-hamilton/liveslide) MVP.

## Usage
Clone the repo, run `npm install` then `node index.js` to spin up the server on `localhost:3000`.
There are 2 endpoints in the app: `/` and `/presenter`.  You can load up `/presenter`, then load up the viewer on `/`.  Clicking the various "slides" in the presenter should cycle slides in the viewer.
