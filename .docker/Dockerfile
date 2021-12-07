FROM ubuntu:20.0.4

RUN MKDIR -p /app

WORKDIR /app

COPY . /app/

RUN npm install --production
RUN npm run build

EXPOSE 3333
CMD ["npm", "start"]
