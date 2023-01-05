import React from 'react'

function List(props: any) {
  console.log(props);

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
            {props.data.map((obj: any) => {
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
      <button onClick={() => props.getData()}>Get Remote data</button>

      <div>
        {
          props.loading ?
            <p>Loading....</p> :
            props.data ?
              getList() :
              props.error ?
                <p>{props.error}</p> :
                null
        }
      </div>
    </div>
  )
}

export default List