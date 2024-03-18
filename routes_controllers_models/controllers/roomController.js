const Room = require('../models/Room');
const { sendSuccess, sendError } = require('../utility/appResponse'); // Import appResponse module

exports.createRoom = async (req, res) => {
    try {
        const { name, roomType, price } = req.body;
        const room = new Room({ name, roomType, price });
        await room.save();
        sendSuccess(res, room); // Send success response using appResponse
    } catch (error) {
        sendError(res, 500, error.message); // Send error response using appResponse
    }
};

exports.getAllRooms = async (req, res) => {
    try {
        const { search, roomType, minPrice, maxPrice } = req.query;
        let filter = {};
        if (search) filter.name = { $regex: search, $options: 'i' };
        if (roomType) filter.roomType = roomType;
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = minPrice;
            if (maxPrice) filter.price.$lte = maxPrice;
        }
        const rooms = await Room.find(filter);
        sendSuccess(res, rooms); // Send success response using appResponse
    } catch (error) {
        sendError(res, 500, error.message); // Send error response using appResponse
    }
};

exports.editRoom = async (req, res) => {
    try {
        const { roomId } = req.params;
        const { name, roomType, price } = req.body;
        const room = await Room.findByIdAndUpdate(roomId, { name, roomType, price }, { new: true });
        sendSuccess(res, room); // Send success response using appResponse
    } catch (error) {
        sendError(res, 500, error.message); // Send error response using appResponse
    }
};

exports.deleteRoom = async (req, res) => {
    try {
        const { roomId } = req.params;
        await Room.findByIdAndDelete(roomId);
        sendSuccess(res, { message: 'Room deleted successfully' }); // Send success response using appResponse
    } catch (error) {
        sendError(res, 500, error.message); // Send error response using appResponse
    }
};

exports.getRoomById = async (req, res) => {
    try {
        const { roomId } = req.params;
        const room = await Room.findById(roomId);
        if (!room) return sendError(res, 404, 'Room not found'); // Send error response using appResponse
        sendSuccess(res, room); // Send success response using appResponse
    } catch (error) {
        sendError(res, 500, error.message); // Send error response using appResponse
    }
};
