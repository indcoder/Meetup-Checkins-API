var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Attendance schema
var AttendanceSchema = new Schema({
	member: String,
	completed: { type:Boolean, default: false },
	created_by: { type: Date, default: Date.now }
});

// True since it is a parallel middleware
AttendanceSchema.pre('save', function(next, done) {
	if(!this.todo){
		next(new Error("Attendance should not be null"));
	}
  	next();
});

var AttendanceModel = mongoose.model('Attedance', AttendanceSchema);

module.exports = TodoModel;