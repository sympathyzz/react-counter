import React from "react"
import Counter from "../Counter"

class GroupCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfCounters: 0,
            total: 0
        }
    }

    increase = () => {
        this.props.add()
    }

    reduce = () => {
        this.props.reduce()
    }

    updateNumberOfCounters = (e) => {
        this.setState({ numberOfCounters: e.target.value, total: 0 })
        this.props.clear()
    }

    render() {
        return (
            <div>
                <p>Number of Counters: <input type="number" onChange={this.updateNumberOfCounters} /></p>
                <div>
                    {new Array(Number(this.state.numberOfCounters)).fill(0).map((item, index) => {
                        return <Counter key={index} increase={this.increase} reduce={this.reduce}
                            numberOfCounters={this.state.numberOfCounters} />
                    })}
                </div>
                <p>Total: {this.props.total}</p>
            </div>
        )
    }

}
export default GroupCounter