const RoomType = require('../models/RoomType');
const { sendSuccess, sendError } = require('../utility/appResponse'); // Import appResponse module

exports.createRoomType = async (req, res) => {
    try {
        const { name } = req.body;
        const roomType = new RoomType({ name });
        await roomType.save();
        sendSuccess(res, roomType); // Send success response using appResponse
    } catch (error) {
        sendError(res, 500, error.message); // Send error response using appResponse
    }
};

exports.getAllRoomTypes = async (req, res) => {
    try {
        const roomTypes = await RoomType.find();
        sendSuccess(res, roomTypes); // Send success response using appResponse
    } catch (error) {
        sendError(res, 500, error.message); // Send error response using appResponse
    }
};
