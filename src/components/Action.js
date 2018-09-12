import React from "react";
import Option from "./Option";

//converting Action to stateless component from class based stateful one
const Action = (props) => (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>

);

export default Action;