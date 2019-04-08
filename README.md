# ⛩️ Node Express Docker API Gateway

A simple lightweight API gateway that will run in a docker container, authenticate using a JWT strategy and then proxy all `req.url` strings to the specified proxy URL. Great for micro-service architecture and abstracting your security layer away from your primary app if required.

## Installation

You'll need docker if you don't already ahve it installed. Containerize all the things!

Adjust the ENV vars in `.env.development` to your liking and adjust config.js to include setting your hostUrl then:

```sh
# clone it
git clone git@github.com:ezy/express-api-gateway.git
cd express-api-gateway


# Build and start your server
docker-compose up --build

```
API will be available at `localhost:<PORT>` for http requests.

## API Endpoints

- `/oauth/token` : uses req.body `{ "userId": "ezy", "password": "Secure" }` to return a valid JWT token
- `/*`: (JWT secure) wildcard proxy sends url.req to specified URL

### Postman client
Import the postman file located at `./scalpelway.postman_collection.json` to test the endpoints.

## License

MIT
