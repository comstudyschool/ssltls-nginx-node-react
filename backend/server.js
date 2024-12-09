const express = require('express');
const app = express();
const cors= require('cors');

app.use(cors());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
