import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);

  return (
    <div>
        <div>
        <p> Valor de: {someData}</p>
        <button onClick={()=> (someData = 15)}>Mudar Valor</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar Estado</button>
        </div>
    </div>
  )
}

export default ManageData