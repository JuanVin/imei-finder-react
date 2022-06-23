import List from "./List";
const Info = (param) => {
  let info = [];
  async function handleDownloadFile(fileName) {
    let options = {
      method: "get",
      responseType: "blob",
      headers: {},
    };
    let response = await fetch(
      `http://172.17.17.21:3002/api/finder/getFile/${fileName}`,
      options
    );
    response = await response.blob();
    let url = window.URL.createObjectURL(response);
    let a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  }
  function handleOrigin(origin) {
    switch (origin) {
      case "t":
        return "Telefónica";
      case "c":
        return "Claro";
      case "u":
        return "U.D.A.P.I.F.";
      default:
        break;
    }
  }
  param.props.forEach((file) => {
    info.push(
      <>
        <div
          key={"info" + Math.random() * Math.random()}
          style={{ borderLeft: "5px solid turquoise" }}
          className="p-3 mt-3 rounded bg-white shadow-sm p-3 mb-5"
        >
          <h3 className="mb-5" style={{ borderBottom: "1px solid  grey" }}>
            Archivo:{" "}
            <button
              type="button"
              className="btn btn-link btn-lg"
              onClick={() => handleDownloadFile(file.file_name)}
            >
              {file.file_name}
            </button>{" "}
            Origen:{" "}
            <span style={{ color: "green" }}>{handleOrigin(file.origin)}</span>
          </h3>
          <div className="row">
            <div className="col">
              <h3 className="text-center">Números de Simcard</h3>
              <List props={file.Simcards}></List>
            </div>
            <div className="col">
              <h3 className="text-center">Números de IMEI.</h3>
              <List props={file.Imeis}></List>
            </div>
            <div className="col">
              <h3 className="text-center">Números de teléfono</h3>
              <List props={file.CellPhones}></List>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <hr className="mt-5 mb-5"></hr>
      {param.props.length > 0 ? (
        <>{info}</>
      ) : (
        <h1 className="text-center text-secondary">
          No se hallaron expedientes
        </h1>
      )}
    </>
  );
};
export default Info;
