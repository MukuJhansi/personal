# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application into the working directory
COPY . .

# Expose the desired port (443 in your case)
EXPOSE 443

# Start the server
CMD ["npm", "start"]
