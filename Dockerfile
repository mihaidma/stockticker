FROM node:12.4-alpine

WORKDIR /opt/app-root/src
ADD . /opt/app-root/src

# RUN npm install --production
RUN npm install

EXPOSE 8800

CMD npm run start:raw
