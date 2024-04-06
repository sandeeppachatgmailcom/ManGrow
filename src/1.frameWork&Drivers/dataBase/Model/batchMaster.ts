import mongoose,{Model,Schema, mongo} from "mongoose";
import { batchMaster } from "../../../4.entities/batchMaster";

const SchemaBatch:Schema<batchMaster>  =new mongoose.Schema ({
    batchId:{type:String},
    batchName:{type:String},
    cordinatorId:{type:String},
    TrainerId:{type:String},
    startDate:{type:Date},
    endDate:{type:Date}
})

const batchMaster :Model<batchMaster> = mongoose.model('batch',SchemaBatch)
export default batchMaster
