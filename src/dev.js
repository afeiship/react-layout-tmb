import './dev.scss';

import {
  ReactLayoutItem,
  ReactLayoutTmb,
} from './main';

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-tmb">
        <h1>justify-flex-start</h1>
        <ReactLayoutTmb className="test-tmb"justify='flex-start'>
          <ReactLayoutItem style={{height:'50px'}}>top</ReactLayoutItem>
          <ReactLayoutItem style={{border:'1px solid #f00'}}>top</ReactLayoutItem>
          <ReactLayoutItem style={{height:'30px'}}>bottom</ReactLayoutItem>
        </ReactLayoutTmb>


        <h1>justify-flex-end</h1>
        <ReactLayoutTmb className="test-tmb" justify='flex-end'>
          <ReactLayoutItem className="top" style={{height:'50px'}}>top</ReactLayoutItem>
          <ReactLayoutItem className="bottom"  style={{height:'20px'}}>bottom</ReactLayoutItem>
        </ReactLayoutTmb>


        <h1>justify-space-between</h1>
        <ReactLayoutTmb className="test-tmb" justify='space-between'>
          <ReactLayoutItem className="top">top</ReactLayoutItem>
          <ReactLayoutItem className="bottom" >bottom</ReactLayoutItem>
        </ReactLayoutTmb>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
