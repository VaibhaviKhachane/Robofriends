import React from 'react';

const Scroll =  (props) =>{
    return (
        <div style = {{overflowY: 'scroll', border: '5px solid', height: '400px'}}>
            {props.children} {/* used children to apply scrolling effect to component inside <Scroll> */}
        </div>
    );
}
export default Scroll;