const env = require("dotenv").config();
const express = require("express");
const contacts = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(errorHandler)
app.use("/api/v1/contacts", contacts);

app.listen(PORT, (req, res) => {
  console.log(`Server listening on PORT ${PORT}`);
});
