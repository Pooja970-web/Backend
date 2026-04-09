const express = require("express"); // ✅ required
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;

  await noteModel.create({
    title: data.title,
    description: data.description
  });

  res.status(201).json({
    message: "Note created successfully"
  });
});

  app.get('/notes',async(req,res)=>{
    const notes=await noteModel.find(
      {
         title: "test_title00"
      }
    );
    res.status(200).json({
      message:"Notes fetched successfully",
      notes:notes
    })
});

module.exports = app;