import React,{component} from 'react';

class Container extends React.Component {
   render() {
      return (
            <div className="container-fluid">{this.props.children}
            </div>
      );
   }
}
export default Container;