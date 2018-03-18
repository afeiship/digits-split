import './dev.scss';

import ReactButton from './main';

/*===example start===*/
class App extends React.Component{
  render(){
    return (
      <div className="hello-react-button" >
        <ReactButton type='primary' size='small'>
          primary button
        </ReactButton>

        <ReactButton type='secondary' size='normal'>
          normal button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton full={true} type='test'>
          normal/wechat button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton type='primary' size='large'>
          primary button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton full round type='secondary' size='large'>
          primary/full button---full
        </ReactButton>

        <div className="blank-20"></div>
        <ReactButton type='primary' size='small' outline={true}>
          primary button
        </ReactButton>

        <ReactButton type='secondary' size='normal' outline={true}>
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
