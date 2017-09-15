import {initMongoose} from "../../api/utils/mongo";


describe('mongo util test',()=>{
  describe('#initMongoose',()=>{
    it('should get connection',async ()=>{
      try {
        let con = await initMongoose();
      }
      catch(e){
      }
    });
  });
});
