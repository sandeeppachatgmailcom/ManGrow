import mongoose, { Model,  Schema, } from "mongoose";
import { serialNumbers } from "../../../4.entities/serialNumber";

const schemaSerialNumbers:Schema<serialNumbers> = new mongoose.Schema({
  serialID: { type: String },
  collectionName: { type: String },
  prefix: { type: String },
  nextNumber: { type: Number },
  delted: { type: Boolean },
  active: { type: Boolean },
});

const SerialNumbers:Model<serialNumbers> =  mongoose.model('serialNumber',schemaSerialNumbers)
export default SerialNumbers