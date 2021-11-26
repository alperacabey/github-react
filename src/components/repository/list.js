
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Range, Table } from '../common'
import { loadingStack, repositoryList, searchRepositories, totalCount } from '../../store/organizationSlice'

const columns = {
    name: "Repository",
    open_issues_count: "Open issues",
    stargazers_count: "Stars",
}

let timeout = null

const List = () => {

    const dispatch = useDispatch()
    const loading = useSelector(loadingStack)
    const repositories = useSelector(repositoryList)
    const count = useSelector(totalCount)
    const [name, setName] = useState('')
    const [range, setRange] = useState({ min: 0, max: 0 })
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [sort, setSort] = useState('')
    const [order, setOrder] = useState('asc')

    const sorting = (key) => {
        if (key === sort) setOrder(order === 'asc' ? 'desc' : 'asc')
        else {
            setSort(key)
            setOrder('asc')
        }
    }

    useEffect(() => {
        if ((name || range.max || range.min || sort) && order) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                dispatch(searchRepositories({ name, ...range, page, sort, order }))
            }, 500)

        }
    }, [name, range, page, sort, order, dispatch])

    useEffect(() => {
        setPageCount(Math.ceil(count / 10))
    }, [count])


    return (
        <>
            <div className="flex flex-wrap">
                <TextField
                    id="autoComplete"
                    value={name}
                    onChange={(val) => { setName(val) }}
                    className="w-80 mr-10"
                    placeholder="Type to filter"
                    label="Filter repositories by name"
                />
                <Range
                    id="range"
                    value={range}
                    onChange={(val) => { setRange(val) }}
                    label="Filter by number of stars"
                />
            </div>
            <Table
                list={repositories}
                columns={columns}
                loading={loading['searchRepositories']}
                totalRecords={repositories.length}
                pageCount={pageCount}
                handlePageClick={(selected) => setPage(selected + 1)}
                sort={sort}
                order={order}
                sorting={sorting}
            />
        </>
    );
}

export default List;
