const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const roomTypeRoutes = require('./routes_controllers_models/routes/roomTypeRoutes');
const roomRoutes = require('./routes_controllers_models/routes/roomRoutes');
const userRoutes = require('./routes_controllers_models/routes/userRoutes');
const authMiddleware = require('./routes_controllers_models/middleware/authMiddleware');
const validateMiddleware = require('./routes_controllers_models/middleware/validateMiddleware');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/room-types', roomTypeRoutes);
app.use('/api/v1/rooms', roomRoutes);
app.use('/api/v1/users', userRoutes);
app.use(validateMiddleware);
app.use(authMiddleware);
0