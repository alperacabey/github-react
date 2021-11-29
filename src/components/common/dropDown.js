import React, { useState } from "react"

const DropDown = ({
    value,
    options = [],
    onChange = () => { } }) => {

    const [isOpen, setIsOpen] = useState(false)

    const onToggle = () => setIsOpen(!isOpen)

    const onOptionClicked = val => {
        onChange(val)
        setIsOpen(false)
    };

    return (
        <>
            <div className="relative w-10 mx-0 my-4">
                <button type="button"
                    className="button w-64 h-10 bg-white border border-primary flex justify-between items-center px-2.5"
                    onClick={() => onToggle()}
                    data-test="dropdown-component">
                    {value ? <span>{value.name}</span> : <span>Select an option</span>}
                    <i className={`arrow ${isOpen ? 'up' : 'down'}`}></i>
                </button>
                {isOpen && (
                    <ul
                        className="border border-primary bg-white p-0 list-none absolute top-auto left-0 m-o box-border max-h-56 z-10 overflow-y-auto w-64 mt-2"
                        data-test="dropdown-list">
                        {options.map((item, i) => (
                            <li key={`li-${item.id}`}
                                className="h-10 box-border hover:bg-blue-light flex px-2.5 decoration-auto">
                                <button
                                    className="bg-none border-none p-0 w-full text-left active:color-gray-dark active:outline-none"
                                    key={`button-${item.id}`}
                                    onClick={() => onOptionClicked(item)}
                                    data-test={`dropdown-list-item-${i}`}
                                >
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default DropDown