import React from "react";
import ReactDOM from 'react-dom'
import Test from './Test';


//Created first function component and passed props to it
//Minimal React Setup with Babel && Webpack

const title = "React with Webpack and Babel"

class App extends React.Component {

    render() {
        return (
            <div>

                <h1>Hello</h1>
                <p> This is so fun</p>
                <p>I like this</p>
            </div>

        )
    }
}
export default App;



ReactDOM.render(<Test title={title} />, document.getElementById("root"));
module.hot.accept();