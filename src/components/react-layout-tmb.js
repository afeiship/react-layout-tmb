import './style.scss';
import React,{Children,cloneElement,PureComponent,PropTypes} from 'react';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
  };

  getProps(inProps,inIndex){
    return !inProps.height  ? {
        'className':classNames('flex-row',inProps.className)
      }: {
      style:Object.assign({
        height:inProps.height
      },inProps.style)
    };
  }

  render(){
    const {children,className,...props} = this.props;
    const length = children.length;
    return (
      <div {...props} className={classNames('react-layout-tmb',this.props.className)}>
        {
          Children.map(children,(elem,index)=>{
            return cloneElement(elem, this.getProps(elem.props,index));
          })
        }
      </div>
    );
  }
}