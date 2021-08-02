const express = require("express");

const app = express();

const dbconfig = require("./db")

const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersRoute")
const bookingsRoute = require("./routes/bookingsRoute")
app.use(express.json())

app.use('/api/rooms', roomsRoute)
app.use("/api/users", usersRoute)
app.use("/api/bookings", bookingsRoute)




__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (req, res) => {
        const index = path.join(__dirname, "client", "build", "index.html");
        res.sendFile(index);
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("node server started using nodemon"))