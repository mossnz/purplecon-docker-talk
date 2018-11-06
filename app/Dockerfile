FROM node:8 as base

WORKDIR /app
RUN npm install -g npm@6.4.1
COPY package*.json ./

FROM base as dependencies
RUN npm ci --production --loglevel http

FROM base as production
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
EXPOSE 1337
CMD ["node", "index.js"]