import express from "express";
const app = express();//create application object
app.get('/',(req,res)=>{        
  res.send("Server is ready");});

  //routs to serbve jokes
app.get("/jokes",(req,res)=>{
  const jokes = [
   {
    id:1,
    title:"Why did the chicken cross the road?",
    joke:"Why did the scarecrow win an award? Because he was outstanding in his field!"
  },
    {
        id:2,
        title:"Why did the tomato turn red?",
        joke:"Because it saw the salad dressing!"
   },
   {
    id:3,
    title:"Why did the bicycle fall over?",
    joke:"Because it was two-tired!"    
   }
  ];
    res.send(jokes);
});
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });