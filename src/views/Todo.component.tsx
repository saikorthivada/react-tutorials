import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todosSelector } from '../store/todos/todos.reducer';

function TodoComponent() {

    const dispatch = useDispatch();
    const { data, error, loading } = useSelector(todosSelector);

    const loadingUI = useMemo(() => {
        return (
            <p>Loading ....</p>
        )
    }, []);

    const errorUI = useMemo(() => {
        return (
            <p>{error}</p>
        )
    }, [error]);

    const dataUI = useMemo(() => {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && (data as any[])?.map((obj, index) => {
                            return (
                                <tr key={obj.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{obj.id}</td>
                                    <td>{obj.title}</td>
                                    <td>{obj.completed ? 'Inactive' : 'Active'}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }, [data]);
    return (
        <div>
            <button onClick={() => dispatch({ type: 'FETCH_USERS' })}>Get remote API data</button>

            <div>
                {
                    loading ? loadingUI :
                        error ? errorUI :
                            data ? dataUI : null
                }
            </div>
        </div>
    )
}

export default TodoComponent