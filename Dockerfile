FROM node:16-alpine

WORKDIR /app

COPY . /app/

RUN npm install typescript -g

RUN npm i
#RUN npm run build

EXPOSE 3333
ENTRYPOINT ["npm", "run", "dev:server"]