import React from 'react'
import Counter from './Counter'
class CounterGroup extends React.Component{
    render(){
        return(
            <div>
                {new Array(6).fill(0).map((value,index) => <Counter key={index}/>)}
            </div>
        ) 
    }
}
export default CounterGroup;