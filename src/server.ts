import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log(`👍 Database connected successfully`);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

main();
