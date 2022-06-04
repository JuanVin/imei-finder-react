const List = (param) => {
    let list = []
    param.props.forEach(data => {
        for (const key in data) {
            list.push(
                <li class="list-group-item text-center">
                    <b>{data[key]}</b>
                </li>
            )
        }
    })
    return (
        <ul class="list-group list-group-flush">
            {list}
        </ul>
    )
}
export default List