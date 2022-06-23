
const List = (param) => {
    let list = []
    param.props.forEach((data, index) => {
        for (const key in data) {
            list.push(
                <li key={"li" + (Math.random() * Math.random())} className="list-group-item text-center">
                    <b>{data[key]}</b>
                </li>
            )
        }
    })
    return (
        <ul key={"ul" + (Math.random() * Math.random())} className="list-group list-group-flush">
            {
            list.length > 0 
            ?
            list
            :
            <h4 className="text-center" style={{color: "grey"}}>Sin registros</h4>
            }
        </ul>
    )
}
export default List