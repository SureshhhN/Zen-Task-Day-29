
import { useState } from "react";

export function TopBarNotification() {
    const [show,setShow]= useState(false);
    return (<>
        <li className={show?"nav-item dropdown no-arrow mx-1 show":"nav-item dropdown no-arrow mx-1"}>
            <a onClick={()=>setShow(!show)} className="nav-link dropdown-toggle"  id="alertsDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded={show?"true":"false"}>
                <i className="fas fa-bell fa-fw"></i>

                <span className="badge badge-danger badge-counter">3+</span>
            </a>

        </li>
    </>);
}
