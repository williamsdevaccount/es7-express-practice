import {Schema} from 'mongoose';


export default new Schema({
  index : {
    type : Number,
    required : true
  },
  text : {
    type : String,
    required : true
  },
  active : {
    type : Boolean,
    required : true,
    default : true
  }
},{timestamps : true});
