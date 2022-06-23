import { useState } from "react";

const Formulario = () => {
  const [option, setOption] = useState("0");
  const [uploadFile, setUploadFile] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");

  const handleFileReader = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      setUploadFile({
        data: reader.result.split(",").pop(),
        fileName: event.target.files[0].name,
      });
    };
  };
  
  const uploadHandler = async () => {
    let url = `http://172.17.17.21:3002/api/post/archive`,
      options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ type: option, file: uploadFile }),
        mode: "cors",
      },
      _response,
      _status;
    try {
      _response = await fetch(url, options);
      _status = _response.status;

      _response = await _response.json();
    } catch (e) {
      _response = e;
    }
    setStatus(_status);
    setResponse(_response);
    console.log(response);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="w-100 mt-3">
        <h2 className="pt-3 pb-3">Carga de archivos</h2>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="options" className="col-form-label">
              Opciones
            </label>
          </div>
          <div className="col-auto">
            <select
              className="form-select"
              id="options"
              value={option}
              onChange={(e) => {
                setOption(e.target.value);
              }}
            >
              <option value="0">Claro</option>
              <option value="1">Personal</option>
              <option value="2">Telefónica/Movistar</option>
              <option value="3">U.D.A.P.I.F.</option>
            </select>
          </div>
          <div className="col-auto">
            <input
              type="file"
              className="form-control"
              id="archivos"
              accept=".zip,.rar,.7zip"
              onChange={handleFileReader}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-success" onClick={uploadHandler}>
              Agregar
            </button>
          </div>
        </div>
        {response !== "" ? (
          <div class="alert alert-primary w-25 text-center mt-5" role="alert">
            {response.message}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Formulario;
