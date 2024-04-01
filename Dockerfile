FROM node:alpine
WORKDIR /usr/app/
RUN npm install --global pm2
COPY . .
RUN npm install
RUN npm run build
CMD [ "pm2-runtime", "npm", "--", "start" ]