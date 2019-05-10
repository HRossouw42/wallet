FROM node:lts

# Create app directory
WORKDIR /app

COPY . /app

EXPOSE 3000

RUN npm install

RUN npm run build

CMD npm run watch-node