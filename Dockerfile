FROM mhart/alpine-node

COPY index.js package.json package-lock.json ./

RUN npm install

CMD ["node", "/index.js"]