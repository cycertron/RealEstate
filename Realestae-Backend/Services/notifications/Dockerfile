FROM node:20-slim
WORKDIR /app


# first install the packages in the root directory
COPY Realestae-Backend/Packages/package.json Realestae-Backend/Packages/package-lock.json /app/Packages/
WORKDIR /app/Packages
RUN npm install


COPY Realestae-Backend/Packages/ /app/Packages/


# then install the packages in the notifications service
WORKDIR /app
COPY Realestae-Backend/Services/notifications/package.json Realestae-Backend/Services/notifications/package-lock.json /app/
RUN npm install


COPY Realestae-Backend/Services/notifications/ /app/


EXPOSE 6000

CMD ["npm", "run", "dev"]