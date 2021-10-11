import Item from './components/item/index.js'
import Card from './components/card/index.js'

const App = () =>{
    return(
        <div>
            <ul>
                <li >
                <Item texto="linha1"/>
                </li>
                <li >
                <Item texto="linha1"/>
                </li>
                <li >
                <Item texto="linha1"/>
                </li>
            </ul>
            <Card />
        </div>
    );
}

export default App;