

const LoadingSpinner = ({message, submit}) => {

    return (
        <>
            {submit
            ? <div className="spin"/>
            : null
            }
            <h3>{message}</h3>
        </>
    )
}

export default LoadingSpinner