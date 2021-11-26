import { useSelector } from 'react-redux'
import { selectedOrganization } from '../../store/organizationSlice'
import List from '../repository/list'
import Plots from '../repository/plots'

const Container = () => {
    const organization = useSelector(selectedOrganization);

    return (
        <div className="bg-gray h-full p-10" >
            {
                organization ?
                    <>
                        <h3 className="mb-5 font-semibold">{organization}</h3>

                        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4">
                            <div className="row-span-1 laptop:pr-5">
                                <List />
                            </div>
                            <div className="row-span-1 laptop:pr-5">
                                <Plots />
                            </div>
                        </div>
                    </>
                    :
                    <div className="flex justify-center items-center h-full">
                        <h3 className="text-gray-light">Search for an organization</h3>
                    </div>
            }
        </div>
    );
}

export default Container;
