import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  render() {
    const {className, children,...props} = this.props;
    return (
      <div {...props} className={classNames('react-layout-item', className)}>{children}</div>
    );
  }
}
