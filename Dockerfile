FROM node:14

WORKDIR /usr/src/server

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3030

CMD ["yarn", "start"]
