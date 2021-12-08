FROM node:16-alpine

# Application
ENV APP_SECRET=
ENV APP_API_URL=http://localhost:3333
ENV APP_WEB_URL=http://localhost:3000

# Mail
ENV MAIL_DRIVER=ethereal

# AWS Credentials
ENV AWS_ACCESS_KEY_ID=
ENV AWS_SECRET_ACCESS_KEY=

ENV STORAGE_DRIVER=disk

#Redis
ENV REDIS_HOST=localhost
ENV REDIS_PORT=6379
ENV REDIS_PASS=

WORKDIR /app

COPY . /app/

RUN npm install typescript -g

RUN npm i
#RUN npm run build

ENTRYPOINT ["npm", "run", "dev:server"]
