# =======================
# Install npm deps
# =======================
FROM node:10.14.0-alpine AS NODE_MODULES

WORKDIR /usr/src/plark-website
COPY package.json yarn.lock ./

RUN yarn install && \
    # Remove extra resources
    rm -rf package.json yarn.lock




# =======================
# Pull and push locales
# =======================
FROM node:10.14.0-alpine AS LOCALES

ARG LOCO_READ_KEY
ARG LOCO_WRITE_KEY

WORKDIR /usr/src/plark-website
COPY --from=NODE_MODULES /usr/src/plark-website/node_modules node_modules/
COPY package.json gulpfile.js pot-extractor.js ./
COPY config/locales.json config/locales.json

RUN apk update && apk add --no-cache gettext && \
    # Install, build, remove dev deps
    yarn locales:import && \
    yarn locales:export && \
    # Remove extra resources
    rm -rf \
    node_modules \
    src \
    config \
    build \
    package.json \
    gulpfile.js \
    pot-extractor.js




# =======================
# Build app image
# =======================
FROM node:10.14.0-alpine

ENV NODE_ENV=production \
    HOST=localhost \
    PORT=80 \
    SECURE=true \
    GTM_KEY="GTM-K8BVBNG" \
    MAILCHIMP_API_KEY=false \
    MAILCHIMP_LIST_ID=false \
    LOG_PATH="/var/log/docker/plark-website"

WORKDIR /usr/src/plark-website

COPY --from=NODE_MODULES /usr/src/plark-website/node_modules node_modules/
COPY resources resources/
COPY --from=LOCALES /usr/src/plark-website/resources/locales resources/locales/
COPY docker docker/
COPY webpack webpack/
COPY config config/
COPY src src/
COPY package.json gulpfile.js pot-extractor.js tsconfig.json webpack.*.js ./

RUN apk update && \
    # Import submodules
    git submodule init && \
    git submodule update && \
    # Install packages
    apk add --no-cache gettext dumb-init && \
    yarn copy && \
    yarn build && \
    # Remove extra resources
    rm -rf \
    .cache-loader \
    resources \
    src \
    gulpfile.js \
    pot-extractor.js \
    tsconfig.json \
    webpack.*.js

RUN envsubst < /usr/src/plark-website/docker/.env.template.yml > /usr/src/plark-website/.env.yml

EXPOSE 80

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["/bin/sh", "-c", "envsubst < /usr/src/plark-website/docker/.env.template.yml > /usr/src/plark-website/.env.yml && yarn start"]
