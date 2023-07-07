import { useEffect } from "react";

const SubmitAlert = ({ message }) => {
    return (
        <div className="alert alert-light alert-dismissible fade show" role="alert">
            <strong>{message}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    );
};

export default SubmitAlert;