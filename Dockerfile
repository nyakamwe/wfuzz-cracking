FROM node:16

WORKDIR app

COPY package*.json ./

RUN npm install

# bundle source code
COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
