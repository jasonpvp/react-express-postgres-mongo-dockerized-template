
# Use the official Node.js 14 image as a base
FROM node:20.17.0 as base
RUN apt update
RUN apt install gnupg curl vim -y

# Set the working directory to /app
WORKDIR /app
RUN rm -rf ./*

# Copy the package*.json files into the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code into the working directory
COPY . .

# Expose the port the application will run on
EXPOSE 3000

# Run the application when the container is started
#CMD ["node", "app.js"]

# production build
FROM base as production
ENV NODE_PATH=./build
RUN npm run build
