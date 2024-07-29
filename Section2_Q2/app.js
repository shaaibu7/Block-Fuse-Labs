const express = require('express');
const app = express();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User')

dotenv.config();
app.use(express.json());


const PORT = process.env.PORT || 3000;


// User registration
app.post('/register', async (req, res) => {
    try {
        const { firstname, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ firstname, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Incorrect Details' });
    }
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
