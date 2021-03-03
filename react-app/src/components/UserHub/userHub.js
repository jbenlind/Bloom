import React, {useEffect} from "react";
import { useHistory } from 'react-router-dom';
import './userHub.css';

import AuthForms from '../AuthForms';

const UserHub = ({setBloomState}) => {

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
                <AuthForms />
            </div>
        </>
    )
}

export default UserHub;
