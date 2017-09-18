import {Connection,Model} from 'mongoose';
import Choice from '../models/choice';

export default class ChoiceService {


  /**
   *
   * @param {Connection} connection
   */
  constructor(connection) {
    if (!connection instanceof Connection){
      throw new Error('param connection must be of type mongoose.Connection');
    }
    this.connection = connection;
    this.model = this.connection.model('Choice',Choice);
  }
  async save(choice){
    let newChoice = new this.model(choice);
    await newChoice.save();
    return newChoice;
  }
  async get(id){
    return await this.model.findById(id);
  }
  async update(choice){
    // let updateChoice = new this.model(choice);
    // // await updateChoice.update
  }
  async delete(id){
    await this.model.findByIdAndRemove(id);
  }
  async all(){
    return await this.model.find();
  }
}
