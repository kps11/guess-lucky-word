import Enzyme ,{ shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr ,checkProps} from '../test/testUtils';
import Congrats from './Congrats';
Enzyme.configure({ adapter: new EnzymeAdapter ()});


const defaultprops = { sucess :false}
const setUp = (props= {}) => {
    const setupProps = {...defaultprops, ...props}
    return shallow(<Congrats {...setupProps}/>)
} 

describe("test congarats component", () =>{


    test('renders without error',() =>{
        const wrapper = setUp({sucess:false});
        const component = findByTestAttr(wrapper, 'component-congrats')
        expect(component.length).toBe(1)
    });

    test("renders no text when sucess prop is false",() => {
        const wrapper = setUp({sucess : false});
        const component = findByTestAttr(wrapper, 'component-congrats')
        expect(component.text()).toBe("")
    });

    test("renders non empty text when sucess prop is true",() => {
        const wrapper = setUp({sucess : true});
        const message = findByTestAttr(wrapper, 'congrats-message')
        expect(message.text().length).not.toBe(0)
    });

    test("does not throw warning with expected props",() =>{
        const expectedProps = { sucess : false}
        checkProps(Congrats,expectedProps)
    })


})