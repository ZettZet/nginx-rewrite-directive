### STAGE 1: Build ###
FROM registry.access.redhat.com/ubi8/nodejs-14:1-51 as build-deps

WORKDIR /app
USER 0
COPY package-lock.json ./
COPY package.json ./
RUN npm ci
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM registry.access.redhat.com/ubi8/nginx-118:1-46 as final

USER 0
WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-deps app/dist/my-app /usr/share/nginx/html

RUN chown -R 1001:0 /etc/nginx && \
    chown -R 1001:0 /usr/share/nginx/html

USER 1001
ENTRYPOINT ["nginx",  "-g", "daemon off;"]