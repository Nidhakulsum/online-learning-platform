const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Online Learning Platform</h1>

        <h2>Available Courses</h2>

        <ul>
            <li>Docker Basics</li>
            <li>Git & GitHub</li>
            <li>Jenkins CI/CD</li>
        </ul>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
