import PropTypes from "prop-types";

function ClearButton ({onClear}) {
    const clear = () => {
        const result = confirm("Are you sure to clear all data?");
        if (!result) return;
        onClear();
    }

    return (
        <button onClick={clear} className="btn btn-clear">Clear</button>
    )
}

ClearButton.propTypes = {
    onClear: PropTypes.func
}

export default ClearButton;