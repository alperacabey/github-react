import ReactPaginate from 'react-paginate';

const Table = ({
    list = [],
    columns = {},
    loading = false,
    sort,
    order,
    handlePageClick,
    pageCount,
    sorting
}) => {

    return (
        <div data-test="table-component">
            <table className="my-5 table-auto flex-col w-full">
                <thead className="border-b-2">
                    <tr>
                        {
                            Object.keys(columns).map((key, index) => {
                                return <th scope="col"
                                    data-test="table-header"
                                    key={key}
                                    className={`px-2.5 py-2 ${index === 0 ? 'text-left' : 'text-center'}`}
                                    onClick={() => sorting(key)}>
                                    <span className="font-semibold">{columns[key]}</span>
                                    {key === sort && <i className={`ml-2 sm arrow ${order === 'asc' ? 'up' : 'down'}`}></i>}
                                </th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        list.length > 0 && list.map((item, x) => {
                            return <tr key={`tr-${x}`} className="border border-solid border-primary">
                                {
                                    Object.keys(columns).map((key, y) => {
                                        return <td data-test="table-item" key={`td-${y}`} className={`px-2.5 py-2 whitespace-nowrap bg-white ${y === 0 ? 'text-left' : 'text-center'}`}>
                                            <span >{item[key]}</span>
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className="w-full h-10 flex justify-center">
                {
                    loading ?

                        <span className="loader"></span> :
                        list.length === 0 ?
                            <span className="text-center">No results</span> : <></>
                }
            </div>
            {
                pageCount > 0 && <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    onPageChange={(e) => { handlePageClick(e.selected) }}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            }

        </div >
    )
}

export default Table