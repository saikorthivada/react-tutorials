import { connect } from "react-redux";
import List from "../Pages/List/List";
import { getAPICall } from "../Services/List.service";



const mapStateToProps = (state: any) => {
    return {
        loading: state.listReducer.loading,
        data: state.listReducer.data,
        error: state.listReducer.error
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getData: () => dispatch(getAPICall())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);