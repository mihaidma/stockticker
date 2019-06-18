FROM node:12.4-alpine

# USER root
# RUN apk update && apk upgrade && \
#     apk add --no-cache git

WORKDIR /opt/app-root/src
ADD . /opt/app-root/src
# RUN chown -R 1001:1001 /opt/app-root/src
# USER 1001

RUN npm install

EXPOSE 8800

CMD npm run start:raw
