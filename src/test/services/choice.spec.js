import {initMongoose} from "../../api/utils/mongo";
import Service from '../../api/sevices/choice';

describe('Choice Service Test',()=>{
  let connection = null;
  let service = null;
  let id = '59beea9262dfc5ef29097da1';
  beforeAll(()=>{
    console.log('before all called');
    connection = initMongoose();
    service = new Service(connection);
  });
  afterAll(()=>{
    console.log('after all called');
    connection.close();
    console.log('mongoose connection closed');
    connection = null;
    service = null;
  });
  describe('#save',()=>{
    it('should save valid choice properly',(done)=>{
        let choice = {index : 1,text : 'test choice'};
        service.save(choice)
          .then((newChoice)=>{
          expect(newChoice).toBeTruthy();
          done();
          })
          .catch((err)=>{
          expect(err).toBeNull();
          done();
          });
    });
  });
  describe('#all',()=>{
    it('should get all properly',(done)=>{
      service.all()
        .then((choices)=>{
        console.log(choices);
        expect(choices).toBeTruthy();
        done();
        })
        .catch((err)=>{
        expect(err).toBeNull();
        done();
        });
    });
  });
  describe('#get',()=>{
    it('should pass if valid id is passed',()=>{
      return service.get(id).then((choice)=>{
        console.log(choice);
        expect(choice).toBeTruthy();
      })
        .catch((err)=>{
        expect(err).toBeNull();
        });
    });
  });
});
