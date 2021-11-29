
import React, { useState, useEffect } from 'react'
import ReactTooltip from "react-tooltip"

const Range = ({
    id = 'range',
    value = { min: 0, max: 0 },
    label = '',
    onChange = () => { },
    className = ''
}) => {

    const [showTooltip, setShowTooltip] = useState(false)

    const handleOnChange = (min, max) => {
        if (min && max && Number(min) >= Number(max)) setShowTooltip(true)
        else {
            setShowTooltip(false)
            onChange({ min, max })
        }
    }

    useEffect(() => {
        ReactTooltip.rebuild()
    })

    return (
        <div className={className}>
            {label ? <p className="mb-1 font-semibold">{label}</p> : <></>}
            <div
                id={`${id}`}
                data-tip data-for={`${id}Tip`}
                data-test="range-component"
            >
                <input
                    id={`${id}Min`}
                    autoComplete="off"
                    defaultValue={value.min}
                    onChange={(e) => handleOnChange(e.target.value, value.max)}
                    placeholder="Min"
                    type="number"
                    min="0"
                    max="999999"
                    className={`border p-2.5 text-md w-20 h-10 mr-5 ${className} ${showTooltip ? 'border-danger active:border-danger' : 'border-primary '}`}
                    data-test="min-input"
                >
                </input>
                <input
                    id={`${id}Max`}
                    autoComplete="off"
                    defaultValue={value.max}
                    onChange={(e) => handleOnChange(value.min, e.target.value)}
                    placeholder="Max"
                    type="number"
                    min="0"
                    max="999999"
                    className={`border p-2.5 text-md w-20 h-10 ${className} ${showTooltip ? 'border-danger' : 'border-primary '}`}
                    data-test="max-input"
                >
                </input>
            </div>

            {showTooltip &&
                <ReactTooltip
                    id={`${id}Tip`}
                    place="bottom"
                    effect="solid"
                    backgroundColor="#555456"
                    arrowColor="transparent"
                    className="bg-gray border-2xl shadow-header"
                    type="error"
                    data-test="range-tooltip">
                    Conflicting min and max values
                </ReactTooltip>}
        </div>
    )
}

export default Range
