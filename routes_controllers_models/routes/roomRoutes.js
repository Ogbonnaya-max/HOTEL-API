const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.patch('/:roomId', roomController.editRoom);
router.delete('/:roomId', roomController.deleteRoom);
router.get('/:roomId', roomController.getRoomById);

module.exports = router;
