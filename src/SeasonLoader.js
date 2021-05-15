import react from 'react';


const SeasonLoader= props=> {
    return (
<div class="ui active dimmer">
    <div class="ui text loader">{props.message}</div>
  </div>
    );
};
export default SeasonLoader;