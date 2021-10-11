import { useState } from "react";
import Button from "./Button1";


const Card = () => {
    const Adicionar=() =>
    {
        setValor(valor+1);
    }
    function Remover()
    {
        setValor(valor-1);
    }
    const [valor, setValor] = useState(0);
    return(
        <div className="card">
        <div className="card-header">
          Meu card 1
        </div>
        <div className="card-body">
        
        <Button 
            className="btn btn-success"
            onClick={Adicionar}
        >
            Adicionar valor
        </Button>

        <Button 
            className="btn btn-danger"
            onClick={Remover}
        >
            Remover valor
        </Button>
        <p>{valor}</p>
        </div>
      </div>
    );
}

export default Card;