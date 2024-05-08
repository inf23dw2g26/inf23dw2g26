FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

ENV NODE_PORT=3000
ENV GOOGLE_CLIENT_ID=146954126349-jlp6bek411g29mj7dl27p70mssiihf9v.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV GOOGLE_CALLBACK_URI=http://localhost:3000/google/callback
ENV SESSION_SECRET=gatos
ENV PROTOCOL=http
ENV ENV=Development
ENV HOSTNAME=localhost

EXPOSE 3000

CMD ["npm", "start"]