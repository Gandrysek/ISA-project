FROM nginx:1.23.3

LABEL org.opencontainers.image.title="lab5-aui"
LABEL org.opencontainers.image.authors="Maks Huzino"

ENV VERSION="1.0.0-SNAPSHOT"

ENV API_URL http://localhost:8080/api

EXPOSE 80

ADD dist/simple-rpg-ng /usr/share/nginx/html/
#COPY dist/lab5-aui/browser /usr/share/nginx/html/

ADD docker/etc/nginx/templates/ /etc/nginx/templates/
