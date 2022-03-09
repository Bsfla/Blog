import app from "./app";


const config = require("./config/key");
const { PORT } = config;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
