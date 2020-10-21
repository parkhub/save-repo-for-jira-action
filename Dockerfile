FROM mhart/alpine-node:10

COPY index.js package.json package-lock.json ./

RUN npm install

CMD ["node", "/index.js"]