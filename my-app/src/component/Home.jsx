import { useState } from "react";
import Info from "./Info";
import Formulario from "./Formulario";
const Home = () => {
  const [fetchData, setFetchData] = useState(null);
  const [dato, setDato] = useState(null);
  const [opciones, setOpciones] = useState(0);
  function getOption() {
    switch (opciones) {
      case "0":
        getFetchData(`http://172.17.17.21:3002/api/finder/filename/${dato}`);
        break;
      case "1":
        getFetchData(`http://172.17.17.21:3002/api/finder/imei/${dato}`);
        break;
      case "2":
        getFetchData(`http://172.17.17.21:3002/api/finder/simcard/${dato}`);
        break;
      case "3":
        getFetchData(`http://172.17.17.21:3002/api/finder/cell/${dato}`);
        break;
      default:
        break;
    }
  }

  async function getFetchData(url) {
    let data = await fetch(url);
    console.log(data.status);
    data = await data.json();
    setFetchData(data);
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <h1 className="mt-5 mb-3">Buscador</h1>
          <div className="input-group mb-3 w-100">
            <select
              className="form-select w-25"
              value={opciones}
              onChange={(e) => {
                setOpciones(e.target.value);
              }}
              id="options"
            >
              <option value="0">Archivo</option>
              <option value="1">IMEI</option>
              <option value="2">SIMCARD</option>
              <option value="3">TELEFONO</option>
            </select>
            <input
              type="text"
              value={dato}
              onChange={(e) => setDato(e.target.value)}
              className="form-control w-50"
              id="dato"
            ></input>
            <button className="btn btn-success" onClick={getOption}>
              Ingresar
            </button>
          </div>
        </div>
        <div className="col p-3">
          <p className="mt-5">Imei: 15 dígitos numéricos</p>
          <p className="mt-1">SIMCARD: 13 ó 19 dígitos numéricos</p>
          <p className="mt-1">Teléfono: 10 dígitos numéricos</p>
        </div>
      </div>
      {fetchData === null ? (
        ""
      ) : (
        <>
          <Info props={fetchData}></Info>
        </>
      )}
    </>
  );
};
export default Home;
