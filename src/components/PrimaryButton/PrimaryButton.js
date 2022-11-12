import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-5 font-semibold">{children}</button>
        </div>
    );
};

export default PrimaryButton;