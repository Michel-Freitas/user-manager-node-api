import express, { Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { prisma } from "./setup";
import { ErrorMiddleware } from "./infra/middleware/ErrorMiddleware";

const server = express();
dotenv.config();
const PORT = process.env.PORT;

const main = async () => {
  server.use(express.json());

  server.use("/api/v1", routes);
  server.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  server.use(ErrorMiddleware.handleError());
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
