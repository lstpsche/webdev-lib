#!/usr/bin/env bash

# Fill env variables
echo "== Preparing development environment =="

if ! [ -f ".env" ]; then
  echo "Creating .env file"
  cp .dockerdev/templates/.env .
fi
