import React from 'react';
import ReactDOM from 'react-dom';

const component = <div className="jumbotron jumbotron-fluid text-sm-center" style={{backgroundImage: 'url(img/nature.jpg)', color: 'white'}}>
      <div className="container">
        <h1>Build React.js User Interfaces</h1>
        <p>with Bootstrap and SASS</p>
        <p><a className="btn btn-primary" href="http://www.google.com" target="_blank">Google things</a></p>
      </div>
    </div>;

ReactDOM.render(component, document.getElementById('react'));
