import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddBookForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [image, setImage] = useState(nl);

  const preset_key = ""; // Your Cloudinary preset key
  const cloud_name = ""; // Your Cloudinary cloud name

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", preset_key);

    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
      setImage(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const onSubmit = async (data) => {
    // Use the image state value instead of the form data
    data.image = image;

    try {
      const response = await axios.post('http://localhost:5000/api/books/createBookRecord', data);
      console.log(response.data);
      setSuccessMessage('Book added successfully!');
      setErrorMessage(null);
      reset(); 
      setImage(null);
    } catch (error) {
      console.error('Error adding book:', error);
      setErrorMessage('Error adding book. Please try again.');
      setSuccessMessage(null);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
      <form onSubmit={handleSubmit(onSubmit)}>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <div>
        <label>Title</label>
        <input type="text" className='form-control' {...register('title', { required: 'Title is required' })} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <textarea  className='form-control'  {...register('description', { required: 'Description is required' })} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label>Author</label>
        <input type="text"  className='form-control' {...register('author', { required: 'Author is required' })} />
        {errors.author && <p>{errors.author.message}</p>}
      </div>

      <div>
        <label>Published Date</label>
        <input type="date"  className='form-control' {...register('publishedDate', { required: 'Published Date is required' })} />
        {errors.publishedDate && <p>{errors.publishedDate.message}</p>}
      </div>

      <div>
        <label>Stock</label>
        <input type="number"  className='form-control' {...register('stock', { required: 'Stock is required', min: { value: 0, message: 'Stock must be greater than or equal to 0' } })} />
        {errors.stock && <p>{errors.stock.message}</p>}
      </div>

      <div>
        <label>Image</label>
        <input type="file"  className='form-control' onChange={uploadImage} />
        {image && <img src={image} alt="Uploaded Preview" style={{height:"200px" , width:"200px" , border:"10px solid #F8F9FA" }} />}
      </div>

      <div>
        <label>Price</label>
        <input type="number"  className='form-control' {...register('price', { required: 'Price is required', min: { value: 0, message: 'Price must be greater than or equal to 0' } })} />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <div>
        <label>Category</label>
        <select className='form-control'  {...register('category', { required: 'Category is required' })}>
          <option value="History">History</option>
          <option value="Programming">Programming</option>
        </select>
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      <button type="submit" className='btn btn-primary'>Add Book</button>
    </form>
      </div>
    </div>
  );
};

export default AddBookForm;
