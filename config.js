var config = {
	port: process.env.PORT || 2000,
	db: process.env.MONGOLAB_URI || "mongodb://localhost/meetupapi",
	test_port: 2001,
	test_db: "mongodb://localhost/meetup_test"
}
module.exports = config;