FROM ubuntu:20.0.4

EXPOSE 3333

RUN MKDIR -p /app
WORKDIR /app
COPY . /app/
RUN npm install --production
RUN npm run build

CMD ["npm", "start"]
