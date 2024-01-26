import "./History.css"

export default function History({ hisdetails }) {
    return (
        <>
            {
                <div className="card" style={{ width: '100%', marginBottom: '20px' }}>
                    <img src={hisdetails.imageUrl} className="card-img-top" alt={`${hisdetails.title}  Image`} />
                    <div className="card-body">
                        <h5 className="card-title">{hisdetails.title}</h5>
                        <p>{hisdetails.price} PKR </p>
                        <a href="#" className="btn btn-default"> Add to Cart </a>
                    </div>
                </div>
            }
        </>


    )
}
