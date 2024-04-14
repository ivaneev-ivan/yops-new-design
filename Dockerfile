FROM node:alpine
WORKDIR /usr/app/
RUN npm install --global pm2
COPY . .
RUN npm install --emit=dev
RUN npm run build
CMD [ "npm", "--", "start" ]