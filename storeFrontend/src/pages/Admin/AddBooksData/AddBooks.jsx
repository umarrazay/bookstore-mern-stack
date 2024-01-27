import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddBooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/historybooks/createBookRecord',
        data
      );
      console.log('API Response:', response.data);
      setSuccessMessage('Book data added successfully!');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className={`form-control ${errors.author ? 'is-invalid' : ''}`}
            {...register('author', { required: 'Author is required' })}
          />
          {errors.author && (
            <div className="invalid-feedback">{errors.author.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="publishedDate" className="form-label">
            Published Date
          </label>
          <input
            type="date"
            className={`form-control ${errors.publishedDate ? 'is-invalid' : ''}`}
            {...register('publishedDate', { required: 'Published Date is required' })}
          />
          {errors.publishedDate && (
            <div className="invalid-feedback">{errors.publishedDate.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
            {...register('stock', {
              required: 'Stock is required',
              min: { value: 0, message: 'Stock cannot be less than zero' },
            })}
          />
          {errors.stock && (
            <div className="invalid-feedback">{errors.stock.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className={`form-control ${errors.imageUrl ? 'is-invalid' : ''}`}
            {...register('imageUrl', { required: 'Image URL is required' })}
          />
          {errors.imageurl && (
            <div className="invalid-feedback">{errors.imageUrl.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
            {...register('price', {
              required: 'Price is required',
              valueAsNumber: true,
              min: { value: 0, message: 'Price cannot be less than zero' },
            })}
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className={`form-select ${errors.category ? 'is-invalid' : ''}`}
            {...register('category', { required: 'Category is required' })}
          >
            <option value="History">History</option>
            <option value="Programming">Programming</option>
          </select>
          {errors.category && (
            <div className="invalid-feedback">{errors.category.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          Submit
        </button>

        {successMessage && (
          <div className="mt-3 alert alert-success">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default AddBooks;
