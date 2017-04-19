import './dev.scss';
import ReactLayoutTmb from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-tmb">
        <ReactLayoutTmb className="test-tmb">
          <div className="top" height="50px">top</div>
          <div style={{border:'1px solid #f00'}} className="top">middle</div>
          <div className="top" height="50px">top</div>
        </ReactLayoutTmb>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
