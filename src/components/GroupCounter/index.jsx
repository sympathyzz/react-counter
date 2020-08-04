import React from "react"
import Counter from "../Counter"

class GroupCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfCounters: 0,
            total: 0
        }
        console.log(this.props)
    }

    increase = () => {
        this.props.add()
    }

    reduce = () => {
        this.props.reduce()
    }

    UpdateNumberOfCounters = (e) => {
        this.setState({ numberOfCounters: e.target.value, total: 0 })
        this.props.clear()
    }

    render() {
        return (
            <div style={{
                textAlign:'center'
            }}>               
                <p>Number of Counters: <input type="number" onChange={this.UpdateNumberOfCounters} /></p>
                <div>
                    {new Array(Number(this.state.numberOfCounters)).fill(0).map((item, index) => {
                        return <Counter key={index} increase={this.increase} reduce={this.reduce}
                            numberOfCounters={this.state.numberOfCounters} />
                    })}
                    <p>Total: {this.props.total}</p>
                </div>
            </div>
        )
    }

}
export default GroupCounter