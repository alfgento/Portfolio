import'./Cards.css'

function Cards ({title,desc,style}) {
   
    return (
        <>
            <div className={`card ${style}`}>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default Cards

