import "../css/group.css"

export default function Group({ group }){
    return (
        <>
        <div className="group-card">
            <h4 className="group-name">{group?.name} </h4>
        </div>
        </>
    )
}