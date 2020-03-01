const router = require('express').Router();
const Message = require('../helper/message')
router.post('/upload', async(req, res) => {
   var spawn = require("child_process").spawn;
   var process = spawn('python',["./python/Model.py", req.files[0].filename], {});

   process.stdout.on('data', (data) => {
      let text = data.toString()
      text = text.replace(/[\[\]]/g,"")
      let tempArr = text.split(",")
      let value = tempArr.map(val => {
         return parseFloat(val)
      })
      res.status(200).send(Message.ResponseText("data", {
         Density : value[0],
         Mi : value[1]
      }))
   });
   process.stderr.on('data', (data) => {
      console.error('stderr:' ,data.toString());
    });
   process.on('error', (error) => {
      res.status(500).send(Message.ResponseText(error))
   })
})



module.exports = router;