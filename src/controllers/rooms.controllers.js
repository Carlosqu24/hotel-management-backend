const roomsController = {};

const Room = require('../models/Room');

roomsController.getRooms = async (req, res) => {
      const rooms = await Room.find().sort({ date: 'desc' }).lean()

      res.json(rooms);
};

roomsController.saveRoom = async (req, res) => {
      const { 
            name, 
            description, 
            type, 
            imageURL 
      } = req.body;

      const newRoom = new Room({ name, description, type, imageURL });
      const savedRoom = await newRoom.save();

      res.json(savedRoom);
};

roomsController.editRoom = async (req, res) => {
      const { 
            name, 
            description, 
            type, 
            imageURL 
      } = req.body;

      const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { name, description, type, imageURL });

      res.json(updatedRoom)
};

roomsController.deleteRoom = async (req, res) => {
      const deletedRoom = await Room.findByIdAndDelete(req.params.id);

      res.json(deletedRoom)
};

module.exports = roomsController;