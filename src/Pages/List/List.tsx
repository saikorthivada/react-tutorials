import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listReducerDataState, listReducerErrorState, listReducerLoadingState } from '../../redux/List/List.selector';
import { getAPICall } from '../../Services/List.service';

function List() {

  const dispatch = useDispatch();

  // const {data,loading, error} = useSelector(getListReducerState);

  const loading = useSelector(listReducerLoadingState);
  const data = useSelector(listReducerDataState);
  const error = useSelector(listReducerErrorState);


  const getList = () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((obj: any) => {
              return (
                <tr key={obj.id}>
                  <td>{obj.id}</td>
                  <td>{obj.title}</td>
                  <td>{obj.completed ? 'Active' : 'Inactive'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <button onClick={() => dispatch(getAPICall() as any)}>Get Remote data</button>

      <div>
        {
          loading ?
            <p>Loading....</p> :
            data ?
              getList() :
              error ?
                <p>{error}</p> :
                null
        }
      </div>
    </div>
  )
}

export default List