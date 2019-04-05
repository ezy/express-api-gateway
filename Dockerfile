FROM alpine:3.9

ENV NODE_VERSION 10.15.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY package.json ./

RUN apk add --update nodejs-npm
RUN npm i -g nodemon
RUN npm i

COPY . .

ENV PORT 8081
EXPOSE 8081

CMD [ "npm", "start" ]