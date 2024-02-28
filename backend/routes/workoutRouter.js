const express = require("express")
const requireAuth = require('../middleware/requireAuth')
const {getWorkouts,createWorkout,deleteSingleWorkout,updateSingleWorkout} = require("../controllers/workoutController")
const router = express.Router()
//require auth for all workouts
router.use(requireAuth)
router.route("/").get(getWorkouts)
                 .post(createWorkout)
router.route("/:id").delete(deleteSingleWorkout)
                    .patch(updateSingleWorkout)


module.exports = router;