require("dotenv").config()

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { prisma } = require("./utils/database");

const app = express();

/* IMPORT ROUTERS */

const booksRouter = require("./resources/books/router");
const petsRouter = require("./resources/pets/router");

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */
console.log({ Book: prisma.book })

app.use("/books", booksRouter)
app.use("/pets", petsRouter)

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})