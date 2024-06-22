import { useState } from "react"

export function Player({ name, symbol }) {
    const [ editedName, setEditedName ] = useState(name);
    const [ isEditing, setIsEditing ] = useState(false);
    function handleEditClick() {
        setIsEditing((edit) => !edit);
    }
    function handleChange(event) {
        setEditedName(event.target.value);
    }

    return <li>
        <span className="player" >
            {isEditing ? <input type="text" required value={editedName} onChange={handleChange}/> : <span className="player-name">{editedName}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
    </li>
}