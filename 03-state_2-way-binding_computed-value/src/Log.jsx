export default function Log({turns}){
    return <ol id="log">
        {turns.map((turn) =>  <li >{turn.player} selected {turn.row}, {turn.col}</li>)}
    </ol>
}