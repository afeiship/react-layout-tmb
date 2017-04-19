# react-layout-tmb
> React component for layout[top/middle/bottom].


## properties:
```javascript
  static propTypes = {
    className:PropTypes.string
  };
```

## usage:
```jsx
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
```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

