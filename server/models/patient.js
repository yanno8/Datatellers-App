var mongoose = require('mongoose');
var Schema = mongoose.Schema;

patientSchema = new Schema({
    
    firstName: {
        type: String
     },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    uniqueCode: {
        type: String
    },
    city:  {
        type: String
    },
    address: {
        type: String
    },
    beforeAppointment: {
        type: String
    },
    afterAppointment: {
        type: String
    },
    AppointmentDate: {
        type: String
    },
    AppointmentTime: {
        type: String
    },
    AppointmentStatus: {
        type: String
    },
    RequestDate: {
        type: String
    },
    createdAt: {
        type: Date,
            default: Date.now
    },
}),

Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;