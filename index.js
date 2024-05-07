const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const profile = {
    education: {
        
        degree: 'Bachelor of Science in Information Technology',
        year: '2022-2024',
        university: 'University of Southern Philippines Foundation'
        
},
    skills:[
        'Proficient in typing skills and speed.',
        'Basic understanding of front-end web development.'
    ],
    experience:[
        'Airbnb - Customer Service (2024): Responding to customer concerns online.'
    ],
    awards: [
        'Deans Lister (2023)'
    ],
    personalInfo: {
        name: "Josh Bennedick A. Andales",
        address: "3787 J. Labra St., Guadalupe, Cebu City",
        phonenumber: "09761945795",
        email: "joshandales03@gmail.com",
        birthdate: "September 15, 2003",
        sex: "Male"
    }
};

app.use(cors());

app.get('/', (req, res) => {
    res.json(profile);
});

app.listen(port, () => {
    console.log(`Server running om http://localhost:${port}`);
});