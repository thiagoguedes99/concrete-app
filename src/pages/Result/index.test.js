const index = require("./index")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Edmond", "Jean-Philippe"], ["Jean-Philippe", "Edmond", "Jean-Philippe"], ["Michael", "Pierre Edouard", "Anas"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
