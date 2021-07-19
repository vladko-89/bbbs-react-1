FROM node:16-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL:-http://localhost:8000/api/v1}
RUN echo $REACT_APP_API_URL
COPY . /app
RUN npm run build
FROM nginx:1.21-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80 443
CMD nginx -g 'daemon off;'
