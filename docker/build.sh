#!/bin/bash

NODE_ENV=production
UN_ENV=production

##### Constants
APPLICATION_VERSION=$(jq -r ".version" package.json)
WITH_PUSH=0

for arg in "$@"
do
  case $arg in
    --push*)
      WITH_PUSH=1
      shift
      ;;

    --version=*)
      APPLICATION_VERSION="${arg#*=}"
      shift
      ;;
  esac
done

build_docker()
{
    yarn locales:import

    docker build \
        --file ./Dockerfile \
        --tag plark/plark-website:$APPLICATION_VERSION \
        --tag plark/plark-website:latest .

    # end of build_docker
}

push_docker()
{
    docker push plark/plark-website:$APPLICATION_VERSION
    docker push plark/plark-website:latest
    # end of push_docker
}

echo " ========= Start building ========= "
build_docker

if [[ $WITH_PUSH = "1" ]]
then
    echo " ========= Start pushing ========= "
    push_docker
fi
