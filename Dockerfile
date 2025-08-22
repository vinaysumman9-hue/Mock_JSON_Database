#use the official node.js image
FROM node:18-alpine

# set the working directory
WORKDIR /app

# copy package.json contents
COPY package*.json ./

# install dependencies
RUN npm install

# copy all the source files
COPY . .

# expose the port service
EXPOSE 3000

# start the application
CMD ["node", "app.js"]