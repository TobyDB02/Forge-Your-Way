import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const Collapsible = ({ open = false, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="card">
            <div>
                <div className="p-3 border-bottom d-flex justify-content-between">
                    <h6 className="font-weight-bold">{title}</h6>
                    <button type="button" className="btn" onClick={handleFilterOpening}>
                        {!isOpen ? (
                            <FontAwesomeIcon icon={faChevronDown} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronUp} />
                        )}
                    </button>
                </div>
            </div>

            <div className="border-bottom">
                <div>{isOpen && <div className="p-3">{children}</div>}</div>
            </div>
        </div>
    );
};

Collapsible.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};
//hi



export default Collapsible;
