const express = require('express')
const router = express.Router()
const bookingModel = require('../models/Booking')
const roomModel = require('../models/room')
const moment = require('moment')

router.post('/bookroom',async (req,res) => {
    const {room,userid,fromDate,toDate,totalAmount,totalDays} = req.body
    
    try {
        const newBooking = new bookingModel({
            room: room.name,
            roomid: room._id,
            userid,
            fromDate: fromDate,
            toDate: toDate,
            totalAmount,
            totalDays,
            transactionId: '1234'    
        })    
        const booking = await newBooking.save()
        const roomtemp = await roomModel.findOne({_id: room._id})
        roomtemp.currentBookings.push({bookingid: booking._id, fromDate: fromDate,toDate: toDate,userid: userid,status: booking.status})
        
        await roomtemp.save()
        
        res.send('Room booked successfully')
    } catch (error) {
        return res.status(400).json({error})
    }
})

router.post('/getbookingsbyuserid',async(req,res) => {
    const userid = req.body.userid
    try {
        const bookings = await bookingModel.find({userid:userid})
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({error})
    }
})


module.exports = router