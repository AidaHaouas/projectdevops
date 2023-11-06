FROM node:10-alpine

WORKDIR /home/devops/Bureau

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]