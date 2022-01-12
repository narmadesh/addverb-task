import React, {useEffect,useState} from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/region/Asia').then(res => setData(res.data)).catch(err => console.log(err))
  }, []);

  function refreshData() {
    axios.get('https://restcountries.com/v3.1/region/Asia').then(res => setData(res.data)).catch(err => console.log(err))
  }
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='shadow p-4 bg-white'>
          <div className='row'>
            <div className='col-sm-9'>
              <h1>Countries in Asia</h1>
            </div>
            <div className='col-sm-3 text-right'>
              <button className='btn btn-primary' onClick={refreshData}>Refresh</button>
            </div>
          </div>
          
          <div className='table-responsive'>
            <table className='table table-striped'>
              <thead className='bg-dark text-white'>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Capital</th>
                  <th>Region</th>
                  <th>Subregion</th>
                  <th>Population</th>
                  <th>Borders</th>
                  <th>Languages</th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
                {
                  data&&data.map((f,index)=>{
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{f.name.common}</td>
                        <td>{f.capital}</td>
                        <td>{f.region}</td>
                        <td>{f.subregion}</td>
                        <td>{f.population}</td>
                        <td>{f.borders}</td>
                        <td>{
                        Object.values(f.languages)
                        }</td>
                        <td><img src={f.flags.png} width={100}/></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
