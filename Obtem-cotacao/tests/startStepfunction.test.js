
const script = require('../source/src/startStepFunction');
require('dotenv').config()


describe('vailida envio handler', function () {

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    })
    it('Valida ambiente', async () => {
            
            console.log(process.env.MAPBUCKET)
            expect(process.env.MAPBUCKET).toBe("mapbucket");
            expect(process.env.bucketCotacoes).toBe("cotacoesmapreduce");
            expect(process.env.Ambiente).toBe("development");
            expect(process.env.ENDPOINTHOST).toBe("http://127.0.0.1");
            let result = await  script.startStepFunction("");
            console.log(result)
    })
});

