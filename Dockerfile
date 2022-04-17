FROM node:16-alpine3.11 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.0-alpine as production-stage
ADD ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]