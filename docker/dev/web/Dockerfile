# syntax=docker.io/docker/dockerfile:1
  
FROM node:22.15.1-alpine

RUN apk add --update \
  python3 \
  build-base \
  gcc

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=20 \
  CMD node ./services/healthcheck.js

CMD ["sh", "-c", "yarn install && yarn dev"]