import { useState } from "react"
import Info from "./Info"
const Home = () => {
    const [fetchData, setFetchData] = useState(null)
    function getOption() {
        let option = document.getElementById("options").value
        let data = document.getElementById("dato").value
        switch (option) {
            case "0":
                getFetchData(`http://localhost:3002/api/finder/filename/${data}`)
                break;
            case "1":
                getFetchData(`http://localhost:3002/api/finder/imei/${data}`)
                break;
            case "2":
                getFetchData(`http://localhost:3002/api/finder/simcard/${data}`)
                break;
            case "3":
                getFetchData(`http://localhost:3002/api/finder/cell/${data}`)
                break;
            default:
                break;
        }
    }
    async function getFetchData(url) {
        let data = await fetch(url)
        data = await data.json()
        setFetchData(data)
    }
    if (fetchData !== null) {
        console.log(fetchData)
    }
    return (
        <>
            <div className="row">
                <div className="col">
                    <h1 className="mt-5 mb-3">Buscador</h1>
                    <div class="input-group mb-3 w-100">
                        <select className="form-select w-25" id="options">
                            <option value="0">Archivo</option>
                            <option value="1">IMEI</option>
                            <option value="2">SIMCARD</option>
                            <option value="3">TELEFONO</option>
                        </select>
                        <input type="number" class="form-control w-50" id="dato"></input>
                        <button className="btn btn-success" onClick={getOption}>Ingresar</button>
                    </div>
                </div>
                <div className="col p-3">
                    <p className="mt-5">      
                        Imei: 15 dígitos numéricos
                    </p>
                    <p className="mt-1">      
                        SIMCARD: 13 ó 19 dígitos numéricos
                    </p>
                    <p className="mt-1">      
                        Teléfono: 10 dígitos numéricos
                    </p>
                </div>
            </div>

            {fetchData === null
                ?
                ""
                :
                <>
                    <Info props={fetchData}></Info>
                </>
            }
        </>
    )
}
export default Home