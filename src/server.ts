// We can use express as shown as below

import mongoose from "mongoose";

import app from "./app";

const port: number = 5000;

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    console.log("Database Connected");

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(`Database connection faield`, err);
  }
}

bootstrap();
