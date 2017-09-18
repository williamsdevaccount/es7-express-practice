import {initMongoose} from "../../api/utils/mongo";


describe('mongo util test',()=>{
  describe('#initMongoose',()=>{
    it('should get connection',async ()=>{
      try {
        let con = await initMongoose();
        expect(con).toBeTruthy();
      }
      catch(e){
        expect(e).toBeNull();
      }
    });
    it('should throw an error if bad connection string is passed',async ()=>{
      try{
        let con =  await initMongoose('notreal.com','kfjdkfj');
        expect(con).toBeNull();
      }
      catch(e){
        expect(e).toBeTruthy();
      }
    });
  });
});
