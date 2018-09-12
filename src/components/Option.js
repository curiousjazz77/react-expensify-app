import React from "react";

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
);

export default Option; //so that the component is named in dev tools and doesn't come up as unknown if we remove the component name above
//and only say export default (props) =>