import { Router } from "express";
import addEvent from "../api/v1/events/addEvent.js";
import allEvents from "../api/v1/events/allEvents.js";
import editEvent from "../api/v1/events/editEvent.js";
import singleEvent from "../api/v1/events/singleEvent.js";

const router = Router()
router.get('/events', allEvents)
router.get('/event/:id', singleEvent)
router.get('/edit-event/:id', editEvent)
router.post('/add-event', addEvent)

export default router