const RoomType = require("../models/RoomTypes")
const Role = require("../models/Role")

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

const createRoles = async () => {
      try {
            const count = await Role.estimatedDocumentCount();

            if (count > 0) return;

            const values = await Promise.all([
                  new Role({ name: "admin" }).save(),
                  new Role({ name: "user" }).save()
            ]);

            console.log(values);
      } catch (error) {
            console.log(error)
      }
};

module.exports = { createRoomTypes, createRoles }