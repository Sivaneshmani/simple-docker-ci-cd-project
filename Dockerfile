# Use official Node.js LTS image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy only package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the remaining app code
COPY . .

# Set environment variable for port (optional)
ENV PORT=5000

# Expose the app port
EXPOSE 5000

# Run the application
CMD ["node", "app.js"]
