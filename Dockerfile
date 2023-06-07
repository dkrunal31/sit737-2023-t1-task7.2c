#denotes base image
FROM node:14

#setting working directory
WORKDIR /usr/src/app

COPY package*.json ./

#to install the package listed in package.json file
RUN npm install

COPY index.js index.js

#exposing port outside
EXPOSE 3000
CMD ["node", "index.js"]