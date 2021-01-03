FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

ENV NODE_ENV production

RUN npm ci --only=production

COPY . .

CMD [ "node", "app.js" ]
