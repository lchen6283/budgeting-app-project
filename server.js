const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3003;

//Listen
app.listen(PORT, () => console.log("Listening on port:", PORT));
