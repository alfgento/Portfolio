import'./Cards.css'

function Cards ({title,desc,style}) {
   
    return (
        <>
            <div className={`card ${style}`}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default Cards

