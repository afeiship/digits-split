import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    size:PropTypes.oneOf([
      'small',
      'normal',
      'large'
    ]),
    color:PropTypes.string,
    outline:PropTypes.bool,
    round:PropTypes.bool,
    full:PropTypes.bool,
  };

  static defaultProps = {
    size:'normal',
    color:'primary',
    outline:false,
    full:false,
  };
  /*===properties end===*/

  render(){
    const {className,children,color,size,round,full,outline,...props} = this.props;
    return (
      <button {...props}
      data-round={round}
      data-full={full}
      data-size={size}
      data-outline={outline}
      data-color={color} className={classNames('react-button',className)}>
        {children}
      </button>
    );
  }
}
