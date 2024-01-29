import "./History.css"

export default function History({ bookdetails }) {
    return (
        <>
            {
                <div className="card" style={{ width: '100%', marginBottom: '20px' }}>
                    <img src={bookdetails.image} className="card-img-top" alt={`${bookdetails.title}  Image`} />
                    <div className="card-body">
                        <h5 className="card-title">{bookdetails.title}</h5>
                        <p>{bookdetails.price} PKR </p>
                        <a href="#" className="btn btn-default"> Add to Cart </a>
                    </div>
                </div>
            }
        </>


    )
}
