FROM node:16-alpine3.12

WORKDIR /properboot

COPY . /properboot

COPY package.json /properboot

RUN npm install

EXPOSE 8080

CMD ["node", "dist/src/server.js"]