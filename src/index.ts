import express from "express";
import dotenv from "dotenv";

const server = express();
dotenv.config();
const PORT = process.env.PORT;

const main = async () => {
  server.use(express.json());

  server.use("/", (req, res) => {
    res.send("Ola");
  });

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
