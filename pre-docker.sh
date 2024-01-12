#!/bin/bash

# Define the paths to .env.example and .env for both client and server
CLIENT_ENV_EXAMPLE="./client/.env.example"
CLIENT_ENV="./client/.env"

SERVER_ENV_EXAMPLE="./server/.env.example"
SERVER_ENV="./server/.env"

# Function to copy and rename the .env.example to .env
copy_and_rename_env() {
    local env_example=$1
    local env=$2

    if [ -e "$env_example" ]; then
        echo "Copying $env_example to $env"
        cp "$env_example" "$env"
    else
        echo "Error: $env_example does not exist!"
    fi
}

# Copy and rename .env.example to .env for the client
copy_and_rename_env "$CLIENT_ENV_EXAMPLE" "$CLIENT_ENV"

# Copy and rename .env.example to .env for the server
copy_and_rename_env "$SERVER_ENV_EXAMPLE" "$SERVER_ENV"

echo "Pre-Docker setup completed."
