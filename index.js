// import express from "express";
// import Fs from 'fs'  
// import Path from 'path'  
// import Axios from 'axios'


// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// // app.get('/download', (req, res) => {
// //     axios
// //   .get(`https://tumaparcel.up.railway.app/receipts/20220702-3PNNHM4.pdf`, {
// //     responseType: 'stream'
// //   })
// //   .then(response => {
// //     const blob = new Blob([response.data], { type: 'application/pdf' })
// //     const link = document.createElement('a');
// //     link.href = window.URL.createObjectURL(blob);
// //     link.download = "file.pdf";
// //     link.click();
// //     // const url = window.URL.createObjectURL(blob)
// //     // window.open(url) 
// //   })
// //   .catch(error => console.log("ERROR ", error))
// // })


// app.get('/download', (req, res) => {

//     async function downloadPdf () {  
//         const url = 'https://tumaparcel.up.railway.app/receipts/20220702-3PNNHM4.pdf'
//         const path = Path.resolve('/', 'download', 'file.pdf')
//         const writer = Fs.createWriteStream(path)
      
//         const response = await Axios({
//           url,
//           method: 'GET',
//           responseType: 'stream'
//         })
      
//         response.data.pipe(writer)
      
//         return new Promise((resolve, reject) => {
//           writer.on('finish', resolve)
//           writer.on('error', reject)
//         })
//       }

//       downloadPdf()  
// })




// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })