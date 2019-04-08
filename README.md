# ⛩️ Node Express Docker API Gateway

A simple lightweight API gateway that will run in a docker container, authenticate using a JWT strategy and then conditionally auto-generate routes from config or proxy all `req.url` strings to the specified proxy URL. Great for micro-service architecture and abstracting your security layer away from your primary app if required.

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

Specify your endpoints in `config.js` under the `routes` object using the correct request method object (get,post,put,delete). Routes will be generated at runtime from this list using the following configuration:

- host: { string } over-rides `hostUrl` to specify proxy target host,
- path: { string } the target path for the req and res,
- auth: { boolean } set to true to require JWT authentication for the endpoint

### Authentication

A basic JWT token endpoint is available unconfigured at:

- `/oauth/token` POST: uses req.body `{ "userId": "ezy", "password": "Secure" }` to return a valid JWT token

### Wildcard proxy

Set `proxyAll: true` in config to proxy all requests to `config.hostUrl`. The Authentication Bearer header JWT is turned on by default for `proxyAll`.

- `/*`: (JWT secure) wildcard proxy sends url.req to specified `config.hostUrl`.

### Postman client

Import the postman file located at `./scalpelway.postman_collection.json` to test the endpoints.

## License

MIT
