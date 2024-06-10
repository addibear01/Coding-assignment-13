FROM node:lts-iron
 
WORKDIR /janzen-winter_addison_ui_garden/
 
COPY public/ /janzen-winter_addison_ui_garden/public
COPY src/ /janzen-winter_addison_ui_garden/src
COPY package.json /janzen-winter_addison_ui_garden/
COPY . /janzen-winter_addison_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]