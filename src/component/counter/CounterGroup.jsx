import React from 'react'
import Counter from './Counter'
class CounterGroup extends React.Component{
    constructor(props){
		super(props);
		this.state = {
            inpValu:1,
            total:0
		}
	}
	
	handleChange(e){
		this.setState({
            inpValu:e.target.value,
            total:0,  
        })
        this.refs.counters.clear();
    }

    handleIncrease=()=>{
		this.setState((prevState)=>{
			return{
                total: prevState.total+1
            }
        }) 
    }

    handleDecrease=()=>{
		this.setState((prevState)=>{
			return{
                total: prevState.total-1
            }
        })  
    }
    
    render(){
        return(
            <div>
                <p>number of counters:<input type="text" onChange={this.handleChange.bind(this)} defaultValue={this.state.inpValu}/></p>
                <div>{new Array(Number(this.state.inpValu)).fill(0).map((value,index) =>
                 <Counter ref="counters" key={index}  increase={this.handleIncrease} decrease={this.handleDecrease}/>)}</div>
                 <p>total:{this.state.total} </p>
            </div>
        ) 
    }
    
}

export default CounterGroup;