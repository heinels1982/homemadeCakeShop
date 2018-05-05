FROM node:6.9.1
RUN mkdir -p  ~/docker/homemadecakeshop/app
WORKDIR ~docker/homemadecakeshop
COPY sportsstore.min.js ~docker/homemadecakeshop/app/
COPY index.html ~docker/homemadecakeshop/app/
COPY authMiddleware.js ~docker/homemadecakeshop/
COPY data.js ~docker/homemadecakeshop/
COPY deploy/server.js ~docker/homemadecakeshop/
COPY deploy/package.json ~docker/homemadecakeshop/
RUN npm install
EXPOSE 3000
EXPOSE 3500
CMD ["npm", "start"]
