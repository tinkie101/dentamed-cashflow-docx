FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

ENV NODE_ENV production

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
