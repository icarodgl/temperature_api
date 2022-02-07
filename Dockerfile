FROM node:12

WORKDIR /front
RUN apt-get install git
RUN git clone https://github.com/icarodgl/icarodgl.github.io.git www

# RUN git clone https://github.com/Angu-chuleta/Adotei-front.git
# WORKDIR /front/Adotei-front
# RUN npm i
# RUN npm run build


WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run build
RUN cp -r /front/www/* /usr/src/app/public
# RUN cp -r /front/Adotei-front/build/* /usr/src/app/public

CMD [ "npm", "run","start:prod" ]
EXPOSE 3000