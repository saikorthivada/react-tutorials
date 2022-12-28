import { connect } from "react-redux"
import { AGE_ACTIONS } from "../redux/Age/age.reducer";
import { COUNTER_ACTIONS } from "../redux/Counter/counter.reducer"
import Counter from "../views/Counter"

const mapStateToProps = (state: any) => {

    // When ever the state of a reducer updates then this mapstatetoprops will be triggered
    // and returns a new state to the component
    console.log(state);
    return {
        counter: state.counterReducer.counter,
        age: state.ageReducer.age
    }
}

const mapDispatchToProps = (dispatch: any) => {
    // We will dispatch all the value or methods from component to Reducer
    return {
        increment: () => dispatch({type: COUNTER_ACTIONS.INCREMENT}),
        decrement: () => dispatch({type: COUNTER_ACTIONS.DECREMENT}),
        reset: () => dispatch({type: COUNTER_ACTIONS.RESET}),
        updateAge: (age: number) => dispatch({type: AGE_ACTIONS.UPDATE_AGE, payload: age})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);