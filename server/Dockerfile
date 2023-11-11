FROM node:20 
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
COPY . /app
EXPOSE 3998
CMD ["node", "dist/server.js"]
