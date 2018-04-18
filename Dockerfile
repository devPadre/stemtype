FROM node:8.9.4

RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install app dependencies
COPY package.json /usr/src/
COPY package-lock.json /usr/src/
COPY yarn.lock /usr/src/

RUN yarn

# Bundle app source
COPY . /usr/src

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]