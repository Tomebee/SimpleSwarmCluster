FROM node:12-alpine as build
WORKDIR /spa
COPY Spa/package.json ./
RUN npm install
COPY Spa/. ./
RUN npm run build

FROM nginx as publish
WORKDIR /usr/share/nginx/html
COPY --from=build /spa/build/. .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]