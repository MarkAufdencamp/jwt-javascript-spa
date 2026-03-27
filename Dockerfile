# Use the official Apache image as the base image
FROM httpd:2.4

# Copy the project files into the Apache web root
# The default web root for the official httpd image is /usr/local/apache2/htdocs/
COPY . /usr/local/apache2/htdocs/

# The httpd image already exposes port 80, but we'll include it here for clarity
EXPOSE 80
