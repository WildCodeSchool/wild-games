FROM node:current-alpine3.12

EXPOSE 80

WORKDIR /app

ADD . /app

RUN npm ci

CMD [ "npm", "start" ]