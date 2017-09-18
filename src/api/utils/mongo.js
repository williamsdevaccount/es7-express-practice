import mongoose,{Model} from 'mongoose';
import * as _ from 'lodash';
const OPTIONS = {
  server : {
    poolSize : 10,
    reconnectTries : 5
  }
};
export const initMongoose = (host = 'localhost',db = 'test',options = OPTIONS)=>{
  let uri = `mongodb://${host}/${db}`;
  mongoose.Promise = global.Promise;
  return mongoose.createConnection(uri,options);
};
