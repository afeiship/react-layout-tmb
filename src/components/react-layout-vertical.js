import './style.scss';

import React,{Children, PropTypes, PureComponent, cloneElement} from 'react';

import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    justify:PropTypes.string
  };

  render(){
    const {children,className,justify,...props} = this.props;
    const length = children.length;
    return (
      <div {...props} data-justify={justify} className={classNames('react-layout-tmb',this.props.className)}>
      {children}
      </div>
    );
  }
}
