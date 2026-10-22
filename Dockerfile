# Node.js は .nvmrc と同じバージョンにしておく。
FROM node:24.22.1-bookworm-slim

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8080
CMD ["yarn", "serve", "--host", "0.0.0.0", "--port", "8080"]
