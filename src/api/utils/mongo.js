import mongoose,{Model} from 'mongoose';
import * as _ from 'lodash';
const OPTIONS = {
  server : {
    poolSize : 10,
    reconnectTries : 5
  },
  promiseLibrary : global.Promise
};
export const initMongoose = async(host = 'localhost',db = 'test',options = OPTIONS)=>{
  let uri = `mongodb://${host}/${db}`;
  return await mongoose.createConnection((uri,options));
};
