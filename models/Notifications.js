const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    activity: {
        //notify me when someone comments or likes my item
        type: Boolean,
        required: true,
        get: {
            name: String,
            likesCount: Number,
            comment: String,
        },
        date: { 
            type: Date, 
            default: Date.now 
        },
    },
    sharedContent: {
        //notify me when others add new items in shared list
        ofMixed: [Schema.Types.Mixed],
        type: { 
            type: String 
        },
    },
    soundOrVibration:{
        //silence notifications during the hours you specify 
        //sound and/or vibration options 
    },
})




//My notes: The model is responsible for managing the data of the application. It receives user input from the controller.