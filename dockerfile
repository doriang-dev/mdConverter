FROM node:slim
WORKDIR /var/www/MdConverter
COPY . /var/www/MdConverter
RUN npm i
EXPOSE 5000
CMD ["serve", "-s", "build"]