import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import TimePickerIs from 'rc-time-picker';
import './index.scss';

const format = 'HH:mm';
const format2 = 'h:mm a'; 
const now = moment().hour(0).minute(0);

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

export default class Detail extends React.Component{
  componentDidMount() {
        var oSel=document.getElementById('sel');
        //alert(oSel.value);    //当前选中的option的value 

        var aOption=oSel.getElementsByTagName('option');
        for(var i=0;i<aOption.length;i++){
            if(aOption[i].selected==true){
                console.log(aOption[i].innerHTML);    
            }
        }  
  }
  onChange = value => {
    // console.log(value && value.format(format));
  }

  render () {
    return (
      <div className="detail">
          <div>这是详情页</div>
          <TimePicker defaultValue={moment('12:08', format)} format={format} />
          <TimePickerIs
            showSecond={false}
            defaultValue={now}
            className="xxx"
            onChange={this.onChange()}
            format={format2}
            use12Hours
          />
          <div className="box">
            <div className="box1"></div>
            <div className="box2"></div>
          </div>
          <div className="table">tableee</div>
          <select id="sel">
              <option value="sh">上海</option>
              <option value="bj">北京</option>
          </select>
      </div>
    )
  }
}
