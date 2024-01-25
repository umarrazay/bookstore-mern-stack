import "./History.css"

export default function History({ hisdetails }) {
    return (
        <div className="hisItems">
            <div className="card">
                <img src={hisdetails.imageUrl} alt={`${hisdetails.title}  Image`} style={{width:"100%"}} />
                    <h3>{hisdetails.title}</h3>
                    <p className="price">$19.99</p>
                    <p>{hisdetails.description}</p>
                    <p>{hisdetails.stock}</p>
                    <p>{hisdetails.author}</p>
                    <p><button>Add to Cart</button></p>
            </div>
        </div>
    )
}
