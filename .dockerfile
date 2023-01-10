# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Start the app
CMD [ "npm", "start" ]
