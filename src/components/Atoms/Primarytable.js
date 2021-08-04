import React from 'react'
import { useSelector } from 'react-redux';
import './Primarytable.css'

const Primarytable = () => {
  const user = useSelector(state=>state.user);

  const tableRows = user.users;
  console.log("the user tbale",tableRows);
    return (
        <div>
            
<table id="customers">
  <tr>
    <th>Name</th>
    <th>Date Of birth</th>
    <th>Mobile</th>
  </tr>
  {

    tableRows.map((row) =>{
      return (
        <tr key={row.name}>
          <td>{row['email']['value']}</td>
          <td>{row['dob']['value']}</td>
          <td>{row['mobile']['value']}</td>
        </tr>
      )

    }
    
    )
  }
  {/* <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr> */}

 
</table>
        </div>
    )
}

export default Primarytable
