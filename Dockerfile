FROM node:lts

# Create app directory
WORKDIR /app

COPY . /app

EXPOSE 3000
EXPOSE 3306

RUN npm install

RUN npm run build

CMD npm run watch-node