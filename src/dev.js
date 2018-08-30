import './dev.scss';

import ReactButton from './main';

/*===example start===*/
class App extends React.Component{
  render(){
    return (
      <div className="hello-react-button" >
        <ReactButton theme='primary' size='small'>
          primary button
        </ReactButton>

        <ReactButton theme='secondary' size='normal'>
          normal button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton full={true} theme='wechat' round={false}>
          normal/wechat button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton theme='primary' size='large'>
          primary button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton full round theme='secondary' size='large'>
          primary/full button---full
        </ReactButton>

        <div className="blank-20"></div>
        <ReactButton theme='primary' size='small' outline={true}>
          primary button
        </ReactButton>

        <ReactButton theme='secondary' size='normal' outline={true}>
          normal button
        </ReactButton>

    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
