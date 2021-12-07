FROM node:16-alpine

WORKDIR /app

COPY . /app/

RUN npm install typescript -g

RUN npm install --production
RUN npm run build

EXPOSE 3333
CMD ["npm", "start"]