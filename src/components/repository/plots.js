import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DropDown, Plot } from '../common'
import github from '../../services/github'
import { repositoryList } from '../../store/organizationSlice'


const plotOptions = [
    {
        id: 'select',
        name: 'Please choose'
    }, 
    {
        id: 'scatterDot',
        name: 'Scatter dot plot'
    }, {
        id: 'timeline',
        name: 'Timeline plot'
    }, {
        id: 'visualize',
        name: 'Visualize plot'
    }]


const Plots = () => {

    const dispatch = useDispatch()
    const [plotType, setPlotType] = useState(plotOptions[0])
    const repositories = useSelector(repositoryList)
    const [plotList, setPlotList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchIssues() {
            if (repositories.length > 0 && plotType.id === 'scatterDot') {
                try {
                    setLoading(true)
                    const promiseList = []
                    repositories.forEach(repo => {
                        ['open', 'closed'].forEach(state => {
                            promiseList.push(github.getIssues({ repo: repo.full_name, state }))
                        })
                    })

                    let response = await Promise.all(promiseList)
                    const plots = repositories.map((repository, index) => {
                        const open_issues = response[index * 2].data.total_count
                        const closed_issues = response[index * 2 + 1].data.total_count
                        const percentage = (open_issues * 100) / (open_issues + closed_issues)
                        let color = null

                        if (open_issues < 100) color = '#111111'
                        else if (percentage < 10) color = '#00CC2D'
                        else if (percentage < 25) color = '#FFD600'
                        else color = '#FF0000'

                        return { repository: repository.name, open_issues: open_issues.toString(), closed_issues: closed_issues.toString(), color }
                    })
                    setPlotList(plots)
                    setLoading(false)
                } catch (e) {
                }
            }
        }

        fetchIssues()
    }, [repositories, plotType, dispatch])

    return (
        <>
            <div>
                <DropDown
                    value={plotType}
                    options={plotOptions}
                    onChange={(val) => setPlotType(val)}
                />
            </div>
            <div className="h-80 relative">
                {
                    plotType.id === 'scatterDot' ?
                        <Plot
                            plotType={plotType}
                            data={plotList}
                            loading={loading} /> :
                        <></>
                }
            </div>
        </>

    )
}
export default Plots