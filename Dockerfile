FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies

ARG REACT_APP_ACCESS_TOKEN
ENV REACT_APP_ACCESS_TOKEN $REACT_APP_ACCESS_TOKEN

COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]