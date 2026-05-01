FROM node:20-slim
WORKDIR /app


# first install the packages in the root directory
COPY Realestae-Backend/Packages/package.json Realestae-Backend/Packages/package-lock.json /app/Packages/
COPY Realestae-Backend/Packages/.env /app/.env
WORKDIR /app/Packages
RUN npm install


COPY Realestae-Backend/Packages/ /app/Packages/


# then install the packages in the Auth service
WORKDIR /app
COPY Realestae-Backend/Services/Auth/package.json Realestae-Backend/Services/Auth/package-lock.json /app/
RUN npm install


COPY Realestae-Backend/Services/Auth/ /app/


EXPOSE 3000
CMD ["npm", "run", "dev"]