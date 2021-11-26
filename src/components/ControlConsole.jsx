import React from "react";
import "../App.css";

const ControlConsole = () => {
    return (
        <div className="control-console">
            <button type="button" class="btn btn-primary btn-lg">Capsules</button>
            <div class="col-xs-3">
                <input type="text" aria-label=" " class="form-control"/>
            </div>
            <button type="button" class="btn btn-primary btn-lg">Landing Pad</button>
        </div>
    );

};

export default ControlConsole;