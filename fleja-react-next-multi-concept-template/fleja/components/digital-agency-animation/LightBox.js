import React, {Component} from 'react';

export class LightBox extends Component{
  render(){
      return (
          <div className="row">
            <div>
              <img src={require("../../images/about.jpg)} />
            </div>
          </div>

      );
  }

}

export default LightBox;
