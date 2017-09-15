import {Schema} from 'mongoose';
import ChoiceSchema from './choice';
export default new Schema({
  question : {
    type : String,
    required : true
  },
  answer : {
    type : String,
    required : true
  },
  active : {
    type : Boolean,
    required : true,
    default : true,
    index : true
  },
  choices : {
    type : [ChoiceSchema],
    required : true
  }
},{timestamps : true});
