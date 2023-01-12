'use client';


async function update(id : any, isDone: any) {
    await fetch ("http://127.0.0.1:3001/api/todo/update", {
        method : 'POST',
        mode: 'no-cors', 
        body: JSON.stringify({id, isDone})
    })
}

export default function Todo(todo : any) {
  return (
    <>
        <input type="checkbox" onChange={(e) => update(todo.id, e.target.checked)}/>     
         <span>{todo.name}</span> 
        <button>Delete</button>  
    </>
  )  
}

