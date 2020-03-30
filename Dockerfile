FROM mhart/alpine-node as builder

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]