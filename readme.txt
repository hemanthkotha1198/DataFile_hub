// server.js
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const multer = require('multer');

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // // Connect to MongoDB Atlas
// // mongoose.connect('mongodb+srv://pk:pk@cluster0.8lulz4b.mongodb.net/test?retryWrites=true&w=majority');

// // const storage = multer.memoryStorage();
// // const upload = multer({ storage: storage });

// // const File = mongoose.model('File', {
// //   name: String,
// //   content: Buffer,
// // });

// // app.use(express.json());

// // app.post('/upload', upload.single('file'), async (req, res) => {
// //   try {
// //     const { originalname, buffer } = req.file;

// //     const newFile = new File({
// //       name: originalname,
// //       content: buffer,
// //     });

// //     await newFile.save();

// //     res.send('File uploaded successfully!');
// //   } catch (error) {
// //     console.error('Error uploading file:', error.message);
// //     res.status(500).send('Error uploading file.');
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://pk:pk@cluster0.8lulz4b.mongodb.net/test?retryWrites=true&w=majority');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const File = mongoose.model('File', {
//   name: String,
//   content: Buffer,
// });

// app.use(express.json());

// // Serve the HTML file
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const { originalname, buffer } = req.file;

//     const newFile = new File({
//       name: originalname,
//       content: buffer,
//     });

//     await newFile.save();

//     res.send('File uploaded successfully!');
//   } catch (error) {
//     console.error('Error uploading file:', error.message);
//     res.status(500).send('Error uploading file.');
//   }
// });


// // / New route to serve the uploaded files
// app.get('/files/:id', async (req, res) => {
//   try {
//     const fileId = req.params.id;
//     const file = await File.findById(fileId);

//     if (!file) {
//       return res.status(404).send('File not found');
//     }

//     res.setHeader('Content-Type', 'application/octet-stream');
//     res.setHeader('Content-Disposition', `attachment; filename=${file.name}`);
//     res.send(file.content);
//   } catch (error) {
//     console.error('Error fetching file:', error.message);
//     res.status(500).send('Error fetching file.');
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://pk:pk@cluster0.8lulz4b.mongodb.net/test?retryWrites=true&w=majority');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const File = mongoose.model('File', {
//   name: String,
//   content: Buffer,
// });

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const { originalname, buffer } = req.file;

//     const newFile = new File({
//       name: originalname,
//       content: buffer,
//     });

//     await newFile.save();

//     res.send('File uploaded successfully!');
//   } catch (error) {
//     console.error('Error uploading file:', error.message);
//     res.status(500).send('Error uploading file.');
//   }
// });

// app.get('/files', async (req, res) => {
//   try {
//     const files = await File.find();
//     res.json(files);
//   } catch (error) {
//     console.error('Error fetching file list:', error.message);
//     res.status(500).send('Error fetching file list.');
//   }
// });

// // Updated route to serve the uploaded files
// app.get('/files/:id', async (req, res) => {
//   try {
//     const fileId = req.params.id;
//     const file = await File.findById(fileId);

//     if (!file) {
//       return res.status(404).send('File not found');
//     }

//     // Instead of triggering a download, display the file content in the browser
//     res.setHeader('Content-Type', 'text/plain');
//     res.send(file.content.toString());
//   } catch (error) {
//     console.error('Error fetching file:', error.message);
//     res.status(500).send('Error fetching file.');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://pk:pk@cluster0.8lulz4b.mongodb.net/test?retryWrites=true&w=majority');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const File = mongoose.model('File', {
//   name: String,
//   content: Buffer,
// });

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const { originalname, buffer } = req.file;

//     const newFile = new File({
//       name: originalname,
//       content: buffer,
//     });

//     await newFile.save();

//     res.send('File uploaded successfully!');
//   } catch (error) {
//     console.error('Error uploading file:', error.message);
//     res.status(500).send('Error uploading file.');
//   }
// });

// app.get('/files', async (req, res) => {
//   try {
//     const files = await File.find();
//     res.json(files);
//   } catch (error) {
//     console.error('Error fetching file list:', error.message);
//     res.status(500).send('Error fetching file list.');
//   }
// });

// // Updated route to serve the uploaded files
// app.get('/files/:id', async (req, res) => {
//   try {
//     const fileId = req.params.id;
//     const file = await File.findById(fileId);

//     if (!file) {
//       return res.status(404).send('File not found');
//     }

//     // Set Content-Disposition to force download
//     res.setHeader('Content-Disposition', `attachment; filename=${file.name}`);
//     res.setHeader('Content-Type', 'text/plain');
//     res.send(file.content.toString());
//   } catch (error) {
//     console.error('Error fetching file:', error.message);
//     res.status(500).send('Error fetching file.');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// // index.html
// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>File Upload App</title>
//   <style>
//   </style>
// </head>
// <body>
//     <h1>File Upload App</h1>
    
//     <form id="uploadForm" enctype="multipart/form-data">
//       <input type="file" name="file" id="fileInput" />
//       <button type="button" onclick="uploadFile()">Upload</button>
//     </form>
  
//     <div id="response"></div>
  
//     <h2>Uploaded Files</h2>
//     <ul id="fileList"></ul>
  
//     <script>
//       async function uploadFile() {
//         const fileInput = document.getElementById('fileInput');
//         const file = fileInput.files[0];
  
//         if (!file) {
//           alert('Please choose a file to upload.');
//           return;
//         }
  
//         const formData = new FormData();
//         formData.append('file', file);
  
//         try {
//           const response = await fetch('/upload', {
//             method: 'POST',
//             body: formData,
//           });
  
//           const result = await response.text();
//           document.getElementById('response').innerText = result;
  
//           // Refresh the file list
//           displayFileList();
//         } catch (error) {
//           console.error('Error uploading file:', error.message);
//           document.getElementById('response').innerText = 'Error uploading file.';
//         }
//       }
  
//       async function displayFileList() {
//         try {
//           const response = await fetch('/files');
//           const files = await response.json();
  
//           const fileList = document.getElementById('fileList');
//           fileList.innerHTML = '';
  
//           files.forEach(file => {
//             const listItem = document.createElement('li');
//             const downloadLink = document.createElement('a');
//             downloadLink.href = `/files/${file._id}`;
//             downloadLink.innerText = file.name;
  
//             listItem.appendChild(downloadLink);
//             fileList.appendChild(listItem);
//           });
//         } catch (error) {
//           console.error('Error fetching file list:', error.message);
//         }
//       }
  
//       // Initial display of file list
//       displayFileList();
//     </script>
//   </body></html> --></head>