const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/suitup', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to Suit Up API');
});

// Import job roles routes
const jobRolesRoutes = require('./routes/jobRoles');
app.use('/api/jobRoles', jobRolesRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
