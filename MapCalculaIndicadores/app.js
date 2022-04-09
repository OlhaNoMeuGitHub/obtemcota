const scriptjs = require('./src/main/transformadados');

exports.lambdaHandler = async (event) => {
    try {
        console.log(typeof(event))
        console.log(Object.keys(event))
        let result = await scriptjs.ExecutaTodosAlgosEmTodosSymbols(event)
        // let resulString = JSON.stringify(result)

        return result;

    } catch (err) {
        console.log(err);
        return err;
    }

};
