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
    theme:PropTypes.string,
    outline:PropTypes.bool,
    round:PropTypes.bool,
    full:PropTypes.bool,
  };

  static defaultProps = {
    size:'normal',
    theme:'primary',
    full:false,
  };
  /*===properties end===*/

  render(){
    const { className, theme, size, round, full, outline, ...props } = this.props;
    return (
      <button 
        data-round={round}
        data-full={full}
        data-size={size}
        data-outline={outline}
        data-theme={theme} className={classNames('react-button',className)} {...props}/>
    );
  }
}
