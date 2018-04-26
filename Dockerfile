FROM node:6.14-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=production

EXPOSE 3004

CMD ["npm", "start"]