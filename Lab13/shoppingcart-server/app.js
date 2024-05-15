const express = require('express');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(express.json());
app.use('/books', bookRouter);

// 404 error handling
app.use((error, req, res, next) => {
    if (error instanceof Error && error.message.startsWith('No Books')) {
        res.status(404).json({ success: false, message: error.message });
    } else {
        next(error); // Pass the error to the next middleware
    }
});

// Custom error handling
app.use((error, req, res, next) => {
    res.status(500).json({ success: false, message: error.message });
});

app.listen(3000, () => console.log('Listening on port 3000'));
