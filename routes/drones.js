const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const findListOfDrone = await Drone.find();
    res.status(200).json(findListOfDrone);
  } catch (error) {
    next(error);
  }
});

router.post('/drones', async (req, res) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const drone = req.body;
  const addOneDrone = await Drone.create(drone);

  if (!drone.name) {
    res.status(400).json({
      message: 'Drone name not provided',
    });
    return;
  }

  res.status(201).json({
    message: 'received',
  });
});

router.post('/drones/:id', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const droneId = req.params.id;
    // the "{new: true}" option allows us to get the updated version of the document instead of the previous one
    const updatedDroneId = await Drone.findByIdAndUpdate(droneId, req.body, {
      new: true,
    });
    res.status(200).json(updatedDroneId);
  } catch (err) {
    next(err);
  }
});

router.delete('/drones/:id', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const deletedThing = await Drone.findByIdAndDelete(req.params.id);
    console.log(deletedThing);
    res.json({ message: `I deleted ${deletedThing.id}` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
