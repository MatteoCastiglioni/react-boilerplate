FROM node:lts-alpine as development

WORKDIR /home/app

RUN apk add git \
  && git config --global --add safe.directory "*"

COPY . .

FROM nginx:stable-alpine-slim as server

ARG NGINX_HOST
ENV NGINX_HOST=${NGINX_HOST}

WORKDIR /etc/nginx/certs

RUN apk add openssl \
  && openssl req -x509 -sha256 -days 356 -nodes -newkey rsa:2048 -subj /CN=localhost/C=it/L=milan -keyout ${NGINX_HOST}.key -out ${NGINX_HOST}.crt
