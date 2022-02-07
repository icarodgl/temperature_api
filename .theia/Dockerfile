FROM node:latest

RUN mkdir -p /usr/app/src
WORKDIR /usr/app

RUN npm install
COPY src/ /usr/app/src

EXPOSE 3000

CMD ["npm","run", "start"]