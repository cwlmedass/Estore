import React, { Component } from 'react';
import Products from './Components/Products';

class App extends Component {

          state={
              price:"$ 100",
              product:[
                {img:"./images/seagull.png",
                description:"FEICE New Men's Automatic Watch UnisexClassic Bauhaus Mechanical Watch Curved Mirror Waterproof.",
                price: "$ 100" },

                {img:"./images/seagull.png",
                description:"FEICE New Men's Automatic Watch UnisexClassic Bauhaus Mechanical Watch Curved Mirror Waterproof.",
                price: "$ 100" },

                {img:"./images/seagull.png",
                description:"FEICE New Men's Automatic Watch UnisexClassic Bauhaus Mechanical Watch Curved Mirror Waterproof.",
                price: "$ 100" }

              ],
          };
      
    render() {
        return (
            <div>
                <Products product={this.state} />
            </div>
        )
    }
}

export default App