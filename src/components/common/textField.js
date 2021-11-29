import ReactTooltip from "react-tooltip"

const TextField = ({
    id = 'textField',
    value = '',
    label = '',
    placeholder = '',
    showTooltip = false,
    loading = false,
    onChange = () => { },
    onKeyPress = () => { },
    onClick = () => { },
    className = '',
}) => {
    return (
        <div>
            {label && <p className={`mb-1 font-semibold ${className}`}>{label}</p>}
            <input
                id={id}
                name={id}
                autoComplete="off"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={"text"}
                className={`border border-solid border-2 border-primary p-2.5 text-md w-80 tablet:w-50 h-10 ${className}`}
                placeholder={placeholder}
                data-tip data-for={`${id}Tip`}
                onKeyDown={onKeyPress}
                onKeyPress={onKeyPress}
                onClick={onClick}
                data-test="textfield-input"
            >
            </input>
            {
                showTooltip &&
                <ReactTooltip
                    id={`${id}Tip`}
                    place="bottom"
                    effect="solid"
                    backgroundColor="#555456"
                    arrowColor="transparent"
                    className="bg-gray border-2xl shadow-header"
                    data-test="textfield-tooltip">
                    The result you were looking for could not be found
                </ReactTooltip>
            }
            {
                loading &&
                <div className="absolute w-auto inset-y-0 top-2" style={{ right: '40px' }}>
                    <div className="loader" data-test="textfield-loader" />
                </div>
            }
        </div>
    )
}

export default TextField
