FROM node:latest

# WORKDIR /app

VOLUME ["./:/app", "/app/node_modules"]

COPY ./package.json .

RUN npm install

CMD node server.js