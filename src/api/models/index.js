import Choice from './choice';
import Question from './question';
import {Connection} from 'mongoose';


/**
 *
 * @param {Connection} connection
 */
export default (connection)=>{
  if (!connection instanceof Connection){
    throw new Error('connection must be of type mongoose.');
  }
  const choice = connection.model('Choice',Choice);
  const question = connection.model('Question',Question);
  return {
    Choice : choice,
    Question : question
  }
};
