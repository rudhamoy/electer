
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
import { useState } from 'react';
import { useStateContext } from '../context/ContextProvider'

function Dialog({ visibility, setDialogVisibility, children, headerName }) {
    // const [visibility, setDialogVisibility] = useState(true);
    const { payrollData } = useStateContext()

    function onOverlayClick() {
        setDialogVisibility(false);
    }
    function dialogClose() {
        setDialogVisibility(false);
    }

    function header() {
        return (
            <div>
                <p className="text-sm font-semibold">{headerName}</p>
            </div>
        )
    }

    function footerTemplate() {
        return (<div className='flex justify-between'>
            <button id="sendButton" className="p-1 px-3 border" data-ripple="true">Ok</button>
            <button id="sendButton" className="p-1 px-3 border" data-ripple="true">Save</button>
        </div>);
    }

   const  settings = { effect: 'Zoom', duration: 400, delay: 0 };

    return (
    <div className="" id="dialog-target">

        <DialogComponent 
        width="500px" 
        isModal={true} 
        target="#dialog-target" 
        header={header} 
        footerTemplate={footerTemplate} 
        visible={visibility} 
        showCloseIcon={true} 
        close={dialogClose} 
        overlayClick={onOverlayClick} 
        animationSettings={settings}
        >
            {children}
        </DialogComponent>
    </div>
    );
}
export default Dialog;
