FROM nginx:alpine

# Copy the entire project to nginx html directory
COPY public/ /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
