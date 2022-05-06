
function testenv() {
    require('dotenv').config();
    console.log(process.env.AWS_ACCESS_KEY_ID)
   return  process.env.AWS_ACCESS_KEY_ID
}

testenv()
module.exports = {
testenv    
};
  