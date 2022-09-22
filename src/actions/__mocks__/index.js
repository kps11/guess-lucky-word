module.exports = {
    ...jest.requireActual(".."),
    __esModule:true,
    // TODO : update returnn value for redux
    getSecretWord: jest.fn().mockReturnValue({type: "mock"})
}