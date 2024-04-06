"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.default.Schema({
    humanid: { type: String },
    firstName: { type: String, required: [true, 'enter a valid name'], minlength: 3 },
    lastName: { type: String },
    email: { type: String, required: true, minlength: 4 },
    dateOfBirth: { type: Date },
    fatherName: { type: String },
    motherName: { type: String },
    mob: { type: String },
    role: { type: String, default: 'user' },
    approvedBy: { type: String },
    approvedDate: { type: Date },
    deleted: { type: Boolean },
    profileImage: { type: String },
    status: { type: String, default: 'dead' },
    verified: { type: Boolean },
    web: { type: String },
    lastRevokeDate: { type: Date },
    address: [{
            houseName: { type: String },
            houseNUmber: { type: String },
            streetName: { type: String },
            city: { type: String },
            pincode: { type: String },
        }],
    jobHistory: [{
            jobId: { type: String },
            organaisation: { type: String },
            startYear: { type: String },
            endYear: { type: String },
            role: { type: String },
        }],
    academics: [{
            course: { type: String },
            starDate: { type: Date },
            endDate: { type: Date },
            mark: { type: Number },
            institute: { type: String }
        }]
});
var userModel = mongoose_1.default.model('user', userSchema);
exports.default = userModel;
