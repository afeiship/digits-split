import './dev.scss';

import ReactButton from './main';

/*===example start===*/
class App extends React.Component{
  render(){
    return (
      <div className="hello-react-button" >
        <ReactButton color='primary' size='small'>
          primary button
        </ReactButton>

        <ReactButton color='secondary' size='normal'>
          normal button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton full={true} color='wxgreen'>
          normal/wegreen button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton color='primary' size='large'>
          primary button
        </ReactButton>
        <div className="blank-20"></div>
        <ReactButton full={true} round={true} color='primary' size='large'>
          primary/full button
        </ReactButton>

        <div className="blank-20"></div>
        <ReactButton color='primary' size='small' outline={true}>
          primary button
        </ReactButton>

        <ReactButton color='secondary' size='normal' outline={true}>
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
