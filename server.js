const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://pk:pk@cluster0.8lulz4b.mongodb.net/test?retryWrites=true&w=majority');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const File = mongoose.model('File', {
  name: String,
  content: Buffer,
});

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { originalname, buffer } = req.file;

    const newFile = new File({
      name: originalname,
      content: buffer,
    });

    await newFile.save();

    res.send('File uploaded successfully!');
  } catch (error) {
    console.error('Error uploading file:', error.message);
    res.status(500).send('Error uploading file.');
  }
});

app.get('/files', async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    console.error('Error fetching file list:', error.message);
    res.status(500).send('Error fetching file list.');
  }
});

// Updated route to serve the uploaded files
app.get('/files/:id', async (req, res) => {
  try {
    const fileId = req.params.id;
    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).send('File not found');
    }

    // Set Content-Type to text/plain
    res.setHeader('Content-Type', 'text/plain');
    
    // Set Content-Disposition to force download with .txt extension
    res.setHeader('Content-Disposition', `attachment; filename=${file.name.replace(/\.(html|css)$/, '.txt')}`);
    
    res.send(file.content.toString());
  } catch (error) {
    console.error('Error fetching file:', error.message);
    res.status(500).send('Error fetching file.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
