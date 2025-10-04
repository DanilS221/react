import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css"

const ProfileStatusWithHooks =(props) => {


    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{

        setStatus(props.status)
    },[props.status])

    const activateEditMode = () =>{
        setEditMode(true)
    }

    const deactiveteEditMode = () => {
        setEditMode(false)
        props.updateStatusThunkCreator(status);
    }


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }

    return (
        <div>
            {  editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactiveteEditMode} onChange={onStatusChange} value={status}/>
                </div>}
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status|| "----"}</span>
                </div>
            }


        </div>

    )

}

export default ProfileStatusWithHooks;