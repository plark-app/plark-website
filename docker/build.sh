#!/bin/bash

NODE_ENV=production
UN_ENV=production

export APPLICATION_VERSION=$(jq -r ".version" package.json)

yarn locales:import

docker build \
    --file ./Dockerfile \
    --tag plark/website:$APPLICATION_VERSION \
    --tag plark/website .
