const RoomType = require("../models/RoomTypes")

const createRoomTypes = async () => {
      try {
            const count = await RoomType.estimatedDocumentCount();

            if (count > 0) return;

            const values = await Promise.all([
                  new RoomType({ name: "single" }).save(),
                  new RoomType({ name: "couple" }).save(),
                  new RoomType({ name: "deluxe" }).save()
            ]);

            console.log(values);
      } catch (error) {
            console.log(error)
      }
};

module.exports = { createRoomTypes }