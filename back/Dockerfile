FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY sources/package.json .
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 3000

CMD [ "npm", "start" ]
