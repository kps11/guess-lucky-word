import { mount } from "enzyme";
import { findByTestAttr ,storeFactory} from "../test/testUtils";
import App from './App';
import { Provider } from "react-redux";
import {getSecretWord as mockGetSecretWord } from "./actions"

//active global mock to make sure getSecretWord doesn't make network call

jest.mock('./actions')

const setUp = () =>{
  const store = storeFactory();
  return mount(<Provider store={store} ><App/></Provider>)
}
test('render without error', () => {
  const wrapper =  setUp();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1)
});


describe(' get secrete word' ,() =>{

  beforeEach (() =>{
    mockGetSecretWord.mockClear();
  })
  test (" get secret word on app mount" ,() =>{
      const wrapper = setUp();
      expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  });

  test(" getSecretWord does not run on app update ",() =>{
    const wrapper = setUp();
    mockGetSecretWord.mockClear();
    //app update 
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  })
})
