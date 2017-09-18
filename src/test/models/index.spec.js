import {initMongoose} from "../../api/utils/mongo";
import Models from '../../api/models/index';


describe('Models Index Test',()=>{
  let connection = null;
  beforeAll(async()=>{
    connection = await initMongoose();
  });
  afterAll(()=>{
    connection = null;
  });
  it('should init models properly',()=>{
    try{
      const models = Models(connection);
      expect(models).not.toBeNull();
    }
    catch(e){
      console.log(e);
      expect(e).toBeNull();
    }
  });

});
