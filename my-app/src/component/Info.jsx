import List from "./List"
const Info = (param) => {
    let info = []
    console.log(param.props)
    param.props.forEach(file => {
        info.push(
            <>
                <h2 className="mb-5">Archivo: <span className="text-secondary">{file.file_name}</span></h2>
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
                        <h3 className="text-center">Númeross de telefono</h3>
                        <List props={file.CellPhones}></List>
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <hr className="mt-5 mb-5"></hr>
            {param.props.length > 0 ?
                <>
                    {
                        info
                    }
                </>
                :
                <h1 className="text-center text-secondary">No se hallaron expedientes</h1>
            }


        </>
    )
}
export default Info