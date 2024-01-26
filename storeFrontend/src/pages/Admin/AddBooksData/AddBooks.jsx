import "./AddBooks.css"
import React, { useState } from 'react';

const AddBooks = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: '',
        publishedDate: '',
        stock: 0,
        imageUrl: '',
        price: 0,
        category: 'History',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., send data to server)
        console.log(formData);
    };

    return (
        <>
            <div className="container addbookform">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text" className="form-control" id="author" name="author" value={formData.author} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="publishedDate" className="form-label">Published Date</label>
                        <input type="date" className="form-control" id="publishedDate" name="publishedDate" value={formData.publishedDate} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label"> Stock </label>
                        <input type="number" className="form-control" id="stock" name="stock" value={formData.stock} onChange={handleChange} require />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label">Image URL</label>
                        <input type="url" className="form-control" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} require />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} require />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Categor</label>
                        <select className="form-control" id="category" name="category" value={formData.category} onChange={handleChange} require >
                            <option value="History">History</option>
                            <option value="Programming">Programming</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBooks;
