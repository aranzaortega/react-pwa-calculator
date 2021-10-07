import React from 'react'
import PropTypes from 'prop-types'

const Result = ({operation, calculation}) => {
    return (
        <div className="m-2">
            <span>{operation}: {calculation}</span>
        </div>
    )
}

Result.propTypes = {
    operation: PropTypes.string,
    calculation: PropTypes.number
}

export default Result
