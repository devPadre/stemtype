FROM node:9

ADD yarn.lock /yarn.lock
ADD pakcage.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app

ADD . /app
EXPOSE 3000 
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]

#install yarn
RUN npm install -g -s --no-progress yarn && \
    sudo yarn && \
    yarn run build && \
    yarn run prune


CMD [ "yarn", "start"]

  
