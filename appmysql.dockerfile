FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=webhoster


COPY ./database/m2_webhoster.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

