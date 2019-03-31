# stage: 1, build the production artifact
# base image
FROM node:9.6.1 as builder
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache dependencies
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g

# copy all the stuff and build the production `build` folder
COPY . /usr/src/app
ARG REACT_APP_API_HOST
ARG REACT_APP_API_PORT
ENV REACT_APP_API_HOST=$REACT_APP_API_HOST
ENV REACT_APP_API_PORT=$REACT_APP_API_PORT
RUN npm run build

# stage: 2 — the production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
