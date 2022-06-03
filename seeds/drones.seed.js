// Iteration #1

const ConnetDB = require('../db/index');
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model.js');

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
];

async function seedDatabase() {
  try {
    // console.log('test seedDB function');
    // ! Delete everything from the database

    await Drone.deleteMany();

    // ! Create the new data
    const createdDrones = await Drone.create(drones);
    console.log(`Created ${createdDrones.length} drones`);
    // ! Disconnect
    await mongoose.disconnect();
    // We can use process.exit() as well to quit the process.
  } catch (e) {
    console.error(e);
  }
}

seedDatabase();
