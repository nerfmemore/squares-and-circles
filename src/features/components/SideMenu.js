import React, { useState } from "react";
import { ControlPanel } from "./ControlPanel";

export const SideMenu = () => {
    const [isMenuVisible, setMenuVisability] = useState(false);

    return (<div>
        <button onClick={() => setMenuVisability(!isMenuVisible)}>Меню</button>
        {isMenuVisible ? <ControlPanel/> : null}
    </div>)
}