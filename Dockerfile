FROM node:16

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["sh", "-c", "npm run build ; node .output/server/index.mjs"]
