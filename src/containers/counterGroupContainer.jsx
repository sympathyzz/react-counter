import { connect } from 'react-redux'
import { add, reduce, clear } from '../action/index'
import CounterGroup from '../components/CounterGroup'

const mapStateToProps = (state) => {
    return {
        total: state.counterGroup.total,
        number: state.counterGroup.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(add()),
        reduce: () => dispatch(reduce()),
        clear: () => dispatch(clear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)  