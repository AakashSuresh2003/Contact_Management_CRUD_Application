const env = require("dotenv").config();
const express = require("express");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./dataBase/connectionDataBase");

connectDb();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(errorHandler);
app.use("/api/v1/contacts", contactRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server listening on PORT ${PORT}`);
});
