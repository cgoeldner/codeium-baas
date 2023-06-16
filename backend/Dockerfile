# Use the official MongoDB image as the base
FROM mongo:latest

# Set the working directory inside the container
WORKDIR /data

# Copy the MongoDB data directory to the container
COPY ./data /data

# Expose the MongoDB default port
EXPOSE 27017

# Run MongoDB when the container starts
CMD ["mongod", "--dbpath", "/data/db"]
