import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Cell,
    ResponsiveContainer
} from 'recharts'

const Plot = ({ plotType, data, loading }) => {
    return (
        <>
            {loading && <div className="absolute flex justify-center items-center z-10 w-full h-full"><span className="loader"></span></div>}
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <ScatterChart
                    margin={{
                        top: 30,
                        right: 40,
                        bottom: 40,
                        left: 30,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="closed_issues" name="closed issues" label={{ value: 'Closed issues', position: 'insideBottomLeft', offset: -15 }} />
                    <YAxis type="number" dataKey="open_issues" name="open issues" label={{ value: 'Open issues', angle: -90, position: 'insideBottomLeft' }} />
                    <ZAxis type="string" dataKey="repository" name="repo" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter data={data} fill="#8884d8">
                        {data.map((item, index) => (
                            <Cell key={`cell-${index}`} fill={item.color} />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </>
    )
}

export default Plot