import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = 4000; //process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
