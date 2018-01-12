FROM node:carbon

# Create app directory
WORKDIR /usr/src/app
RUN chown 1000:1000 -R .
USER 1000

EXPOSE 3000

CMD [ "./initialize.sh" ]
