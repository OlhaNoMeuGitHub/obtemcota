require('dotenv').config();
const scriptjs = require("../jsevs");
describe("vailida transforma dados", function () {
    it("Executa Algos em todos symbols ", async () => {
      jest.setTimeout(30000);
  
      require('dotenv').config();
        
  
    //   let result = process.env.myvar // "239482"
  
      let result =  scriptjs.testenv();
      expect(result).toBe("testado");
    });
  });
  