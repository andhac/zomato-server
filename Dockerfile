FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL=mongodb+srv://HarshVerma:harshverm12@zomato-master.wfmmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=33401962935-17b3tdifphnkfcq2j2qqc8usug8vubb3.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV AWS_S3_ACCESS_KEY=AKIAQMEXQVWGJQXFW27R
ENV AWS_S3_SECRET_KEY=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
ENV NODE_ENV=production
ENV PORT=4000

RUN npm run build

CMD ["npm", "run", "start"]