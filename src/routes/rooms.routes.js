const express = require('express');
const router = express.Router();

const { 
      getRooms,
      saveRoom,
      editRoom,
      deleteRoom
} = require('../controllers/rooms.controllers');

router.get('/', getRooms);
router.post('/save-room', saveRoom)
router.put('/edit-room/:id',  editRoom);
router.delete('/delete-room/:id', deleteRoom);

module.exports = router;