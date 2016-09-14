FROM node:6.2.2

MAINTAINER Mohammad Al Mouallem

ENV NODE_ENV=production 
ENV PORT=3000

COPY      . /var/www
WORKDIR   /var/www

RUN       npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]