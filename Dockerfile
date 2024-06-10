FROM node:lts-iron
 
WORKDIR /addison_janzen-winter_ui_garden/
 
COPY public/ /addison_janzen-winter_ui_garden/public
COPY src/ /addison_janzen-winter_ui_garden/src
COPY package.json /addison_janzen-winter_ui_garden/
COPY . /addison_janzen-winter_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]