FROM node:20.10.0-alpine

WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json to the container
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port
EXPOSE 5000

# Command to run your application
CMD ["pnpm", "run", "dev"]
