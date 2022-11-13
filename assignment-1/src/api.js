import React from 'react'

function Api() {
    const getData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            return res.json();
        }).then((data=>{
            console.log(data);
            setState(data)
        }));

    }
    let [state,setState] =  React.useState([]);
  return (
    <div>
        <button onClick={getData}>GetData</button>
        <div>
            {
                state.length > 0 ? <div>
                    <h1>{state[0].id}</h1>
                    <h2>{state[1].body}</h2>
                    <h3>{state[2].title}</h3>
                    <h3>{state[3].userId}</h3>
                    

                </div> : <h2>Click the button to get the data</h2>
            }

        </div>
    </div>
  )
}; 

export default Api;