import logo from './logo.svg';
import './App.css';

const customers = [
  {
    id: 1,
    name: 'leo1',
    skills: ['html', 'java', '.net', 'JS']
  },
  {
    id: 2,
    name: 'leo2',
    skills: ['go', 'c++', 'qbasic', 'JS']
  },
  {
    id: 3,
    name: 'leo3',
    skills: ['c#', 'vb', 'JS', '.net']
  },
  {
    id: 4,
    name: 'leo4',
    skills: ['ruby', 'qbasic', 'fortran', 'react']
  }
]
const clicar = (e) =>{
  console.log("me clicou");
  console.log(e);
}
const Button = <button onClick={clicar}>Me clica</button>

var renderSkills = (customer, index) =>{
  return(
  <div style={{ paddingLeft: '30px'}}>
    <li key={index}>{customer.skills}</li>    
  </div>
  );
}

function App() {
  const renderCustomer = (customer, index) =>{
    return(
    <div>
      <li key={index}>{customer.name}</li>      
      {customers.map(renderSkills)}
    </div>

    
    );
  }
  
  return (
  <div>
    teste1
    <ul>
      {customers.map(renderCustomer)}    
    </ul>
    {Button}
  </div>
    );
}

export default App;
