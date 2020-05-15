FROM node:12.13-alpine

RUN npm install -g @vue/cli

RUN mkdir /front
COPY package*.json /front/

WORKDIR /front

EXPOSE 8080

RUN npm install

RUN adduser -D apprunner
USER apprunner