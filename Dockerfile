FROM node
COPY . /ecommerceProject
WORKDIR /ecommerceProject
CMD npm start
#docker build -t ecommerce-docker .
#docker image ls   
#docker run --publish 3000:3000 ecommerce-proj-docker 