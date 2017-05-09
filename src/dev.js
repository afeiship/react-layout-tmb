import './dev.scss';

import {
  ReactLayoutItem,
  ReactLayoutVertical,
} from './main';

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-tmb">
        <h1>justify-flex-start</h1>
        <ReactLayoutVertical className="test-tmb"justify='flex-start'>
          <ReactLayoutItem style={{height:'50px'}}>top</ReactLayoutItem>
          <ReactLayoutItem style={{border:'1px solid #f00'}}>top</ReactLayoutItem>
          <ReactLayoutItem style={{height:'30px'}}>bottom</ReactLayoutItem>
        </ReactLayoutVertical>


        <h1>justify-flex-end</h1>
        <ReactLayoutVertical className="test-tmb" justify='flex-end'>
          <ReactLayoutItem className="top" style={{height:'50px'}}>top</ReactLayoutItem>
          <ReactLayoutItem className="bottom"  style={{height:'20px'}}>bottom</ReactLayoutItem>
        </ReactLayoutVertical>


        <h1>justify-space-between</h1>
        <ReactLayoutVertical className="test-tmb" justify='space-between'>
          <ReactLayoutItem className="top">top</ReactLayoutItem>
          <ReactLayoutItem className="bottom" >bottom</ReactLayoutItem>
        </ReactLayoutVertical>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
