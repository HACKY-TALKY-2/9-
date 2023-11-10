const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const gatheringRouter = require("./routes/gathering");
const userRouter = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

dotenv.config();
let corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/gathering", gatheringRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
