
const User = require('../models/User');

const createUser = async () => {
    try {
        const newUser = new User({
            username: 'adminUser',
            email: 'admin@example.com',
            password: 'adminPassword',
            role: 'admin' // Set the role to 'admin'
        });

        await newUser.save();
        console.log('Admin user created successfully');
    } catch (error) {
        console.error('Error creating admin user:', error);
    }
};

createUser();