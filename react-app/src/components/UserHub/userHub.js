import React, {useEffect} from "react";
import './userHub.css';

import AuthForms from '../AuthForms';

const UserHub = ({setBloomState, authenticated, setAuthenticated}) => {

    // const history = useHistory();

    useEffect(() => {
        const url = window.location.href;

        if(url.includes("userHub")) {
           setBloomState("translate")
        }
    })

    return (
        <>
            <div id="hub-background">
                <AuthForms authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </div>
        </>
    )
}

export default UserHub;
