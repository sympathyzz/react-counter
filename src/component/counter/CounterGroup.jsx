import React from 'react'
import Counter from './Counter'
class CounterGroup extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			inpValu:1
		}
	}
	
	handelChange(e){
        console.log(typeof e.target.value)
		this.setState({
			inpValu:e.target.value
        })
        
	}
    render(){
        return(
            <div>
            <input type="text" onChange={this.handelChange.bind(this)} defaultValue={this.state.inpValu}/>
                <div >
                    {new Array(Number(this.state.inpValu)).fill(0).map((value,index) => <Counter key={index}/>)}
                </div>
            </div>
        ) 
    }
}
export default CounterGroup;