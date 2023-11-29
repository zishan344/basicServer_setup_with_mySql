const express = require("express");
const cors = require("cors");
const { connection } = require("./connection");
const app = express();
const port = process.env.PORT || 5080;

app.use(cors());
app.use(express.json());
// crud : create, read , update, delete
app.post("/post", (req, res) => {
  const data = req.body;
  const query = "INSERT INTO basicServer SET ?";
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data added successfully",
        result,
      });
    }
  });
});
app.get("/get", (req, res) => {
  const query = "SELECT * FROM basicServer";
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        result,
      });
    }
  });
});
app.get("/get/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM basicServer WHERE id = ?";
  connection.query(query, id, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        result,
      });
    }
  });
});
app.put("/update", (req, res) => {
  const id = req.query.id;
  const data = req.body;
  console.log(data);
  const query = `UPDATE basicServer SET Address = ? WHERE id = ${id}`;
  connection.query(query, data.Address, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        err: err.message,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data updated successfully",
        result,
      });
    }
  });
});
app.delete("/delete", (req, res) => {
  const id = req.query.id;
  const query = `DELETE FROM basicServer WHERE id = ${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data deleted successfully",
        result,
      });
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Basic server API",
  });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
