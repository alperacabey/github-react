import { useState } from "react"
import TextField from './textField'

const AutoComplete = ({
    id = 'autocomplete',
    data = [],
    placeholder = '',
    value = '',
    loading = false,
    className = '',
    onSelect = () => { },
    onChange = () => { },
}) => {
    const [isComponentVisible, setIsComponentVisible] = useState(true)
    const [cursor, setCursor] = useState(0)

    const onKeyPress = (e) => {
        if (e.charCode === 0 && e.keyCode === 13 && data.length > 0) {
            selectItem()
        } else if (e.keyCode === 38 && cursor > 0 && e.code === "ArrowUp") {
            setCursor(cursor - 1)
        } else if (e.keyCode === 40 && cursor < data.length - 1 && e.code === "ArrowDown") {
            setCursor(cursor + 1)
        }
    }

    const selectItem = (name) => {
        onSelect(name ? name : data[cursor].name)
        setIsComponentVisible(false)
        setCursor(0)
    }

    return (
        <div className="relative w-80" data-test="autocomplete-component">
            <TextField
                id={id}
                value={value}
                onChange={(val) => {
                    onChange(val)
                    setIsComponentVisible(true)
                }}
                onClick={() => setIsComponentVisible(!isComponentVisible)}
                placeholder={placeholder}
                onKeyPress={onKeyPress}
                showTooltip={value && data.length === 0}
                loading={loading}
                className={`border ${className}`}
                data-test="autocomplete-input" />
            {data.length > 0 && isComponentVisible && (
                <ul
                    className="bg-white p-0 list-none min-w-80 absolute top-auto left-0 m-o box-border max-h-56 z-10 overflow-y-auto w-80 mt-2"
                    data-test="autocomplete-list">
                    {data.map((item, i) => (
                        <li key={item.id}
                            className={`h-10 box-border hover:bg-blue-light flex px-2.5 decoration-auto ${cursor === i ? 'bg-blue-light' : ''}`}>
                            <button
                                data-test={`autocomplete-list-item-${i}`}
                                className="bg-none border-none p-0 w-full text-left active:color-gray-dark active:outline-none"
                                key={item.id}
                                onClick={() => selectItem(item.name)}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default AutoComplete