import React from 'react'
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.countAdd = this.countAdd.bind(this)
        this.countSub = this.countSub.bind(this)
        
        this.state={
            count:0
        }
    }

    countAdd(){
        this.state.count++;
        this.setState({count:this.state.count})
    }
    countSub(){
        this.state.count--;
        this.setState({count:this.state.count})
    }

    render(){
        return(
            <div style={{
                textAlign:'center'
            }}>
                <button onClick={this.countSub}>-</button>
                <span style={{
                    display:'inline-block',
                    width:'50px',
                    textAlign:'center',
                }}>
                    {this.state.count}
                </span>
                <button onClick={this.countAdd}>+</button>
            </div>
        ) 
    }
}
export default Counter;