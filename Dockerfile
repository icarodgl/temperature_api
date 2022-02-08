FROM node:12

WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run build
RUN cp -r /front/www/* /usr/src/app/public

CMD [ "npm", "run","start:prod" ]
EXPOSE 3000