# Use an official lightweight web server image
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the website files to the container's web server directory
COPY . .

# Expose port 80 for the web server
EXPOSE 80

# The default CMD for nginx will serve the static files
