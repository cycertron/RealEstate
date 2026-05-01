FROM node:20-slim
WORKDIR /app


# first install the packages in the root directory
COPY Realestae-Backend/Packages/package.json Realestae-Backend/Packages/package-lock.json /app/Packages/
WORKDIR /app/Packages
RUN npm install


COPY Realestae-Backend/Packages/ /app/Packages/


# then install the packages in the Hotel service
WORKDIR /app
COPY Realestae-Backend/Services/Hotel/package.json Realestae-Backend/Services/Hotel/package-lock.json /app/
RUN npm install


COPY Realestae-Backend/Services/Hotel/ /app/


EXPOSE 3001
CMD ["npm", "run", "dev"]