const express = require('express');
const router = express.Router();
const fs = require('fs')
const fileDb = './db.txt'
const fileDbExist = fs.existsSync(fileDb)

const handleWriteFile = (data) => {
  fs.writeFile(fileDb, data, () => {
    console.log('file has been writed')
  })
}

router.post('/', (req, res, next) => {

  let writeData = [req.body]

  if (fileDbExist) {
    fs.readFile(fileDb, (error, data) => {
      if (error) {
        console.log('Err.');
        return;
      }

      const prevData = JSON.parse(data.toString())
      handleWriteFile(JSON.stringify([...prevData, req.body]))
    })
  } else {
    handleWriteFile(JSON.stringify(writeData))
  }

  res.status(201).json({
    status: true,
    message: '',
    data: req.body
  });
});

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /contact'
  });
});


module.exports = router;
