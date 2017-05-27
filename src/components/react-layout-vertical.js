import './style.scss';

import React,{Children, PureComponent, cloneElement} from 'react';

import {JUSTIFY} from './const';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    justify: PropTypes.oneOf(JUSTIFY)
  };

  render(){
    const {className,justify,...props} = this.props;
    return (
      <div {...props} className={classNames('react-layout-vertical',`row-justify-${justify}`,this.props.className)} />
    );
  }
}
