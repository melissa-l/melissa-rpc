import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import TimePickerIs from 'rc-time-picker';

const format = 'HH:mm';
const format2 = 'h:mm a';
const now = moment().hour(0).minute(0);

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

export default class Detail extends React.Component{
  onChange = value => {
    // console.log(value && value.format(format));
  }

  render () {
    return (
      <div>
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
      </div>
    )
  }
}
