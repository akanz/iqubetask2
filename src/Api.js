import React, {useState, useEffect} from 'react'
import Info from './Info'

function Api() {
    const [count, setcount] = useState(0)
    const [cases, setcases] = useState([])

    function IncreaseCount() {
        setcount(prevstate => prevstate + 1)
    }
    useEffect(() => {
        fetch('https://covidnigeria.herokuapp.com/api')
        .then(response => response.json() )
        .then( data => setcases(data.data.states))
        .catch(console.log('Error while parsing data'))

    }, [])

    return (
        <div className='container '>
            <div className='d-flex justify-content-around w-75 my-5 mx-auto pt-5 flex-wrap'>
                <h1>Coronavirus cases in Nigeria till date</h1>
            {cases.map(data => <Info key={data.id} covidData={data} />
            )}
                
            
            </div>
            {/* <div className='d-flex m-3 mx-auto p-5 justify-content-around'>
                <button onClick={IncreaseCount}>
                    click me
                </button><div>{count}</div>
            </div> */}
            
        </div>
      
    )
}

export default Api
