import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AutoComplete } from "../common"
import { organizationList, selectOrganization, searchOrganizations, loadingStack, resetOrganization } from "../../store/organizationSlice"

let timeout = null;

const Header = () => {
    const dispatch = useDispatch();
    const [searchText, setSeacrhText] = useState('octokit')
    const organizations = useSelector(organizationList)
    const loading = useSelector(loadingStack)

    useEffect(() => {
        if (searchText) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                dispatch(searchOrganizations(searchText))
            }, 500)

        }
    }, [searchText, dispatch])

    const onSelectItem = (val) => {
        setSeacrhText(val)
        dispatch(resetOrganization())
        setTimeout(() => { 
        dispatch(selectOrganization(val))
         }, 0)
    }

    return (
        <header className="bg-gray-dark p-2.5 shadow-header absolute w-full sticky top-0" >
            <AutoComplete
                data={organizations}
                iconColor="Turquoise"
                className="h-10 w-80 p-2.5"
                placeholder="Search organizations"
                value={searchText}
                onChange={(val) => setSeacrhText(val)}
                onSelect={(val) => onSelectItem(val)}
                loading={loading['searchOrganizations']}
            />
        </header>
    );
}

export default Header;
