const hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig.js")


describe('hobbits model' , function() {
    describe('insert()' , function(){
        it('should add the hobbit to the database', async function() {

            await Hobbits.insert({ name: 'sam'})
            await Hobbits.insert({ name: 'Gaffer'})


            const hobbits = await db("hobbits");
            expect(hobbits).toHaveLength(1)
            
        })
    })
})