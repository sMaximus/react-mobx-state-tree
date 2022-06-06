import { observer } from "mobx-react";
import * as React from "react";
import { countArr } from "../store/firstStore";


@observer
export default class FirstPage extends React.Component {
  render(): JSX.Element {
    
    return (
      <div >
        <div>输入数字: {countArr.counter}</div>
        <div>计算平方: {countArr.computedCounter}</div>
        <div >
          <button onClick={countArr.asyncAdd}>
            异步增加
          </button>
          <button onClick={countArr.Add}>
            增加
          </button>
        </div>
        <div >
        </div> 
      </div>
    );
  }
}


