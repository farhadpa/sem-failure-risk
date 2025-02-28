FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY src/package*.json ./

RUN npm install

# Bundle app source
COPY ./src .

EXPOSE 4000
CMD [ "node", "app.js" ]