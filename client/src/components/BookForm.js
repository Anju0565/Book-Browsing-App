import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_POST_BOOKS } from '../redux/books/books.actions';

const BookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    price: '',
    genre: '',
    desc: '',
    coverImage: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert('Name is required');
      return;
    }
    if (!formData.author) {
      alert('Author is required');
      return;
    }
    if (!formData.price) {
      alert('Price is required');
      return;
    }
    if (!formData.genre) {
      alert('Genre is required');
      return;
    }
    if (!formData.desc) {
      alert('Description is required');
      return;
    }
    if (!formData.coverImage) {
      alert('File is not uploaded');
      return;
    }
    dispatch(ACTION_POST_BOOKS(formData));

    setFormData({
      name: '',
      author: '',
      price: '',
      genre: '',
      desc: '',
      coverImage: null,
    });
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '10px',
      backgroundColor: 'teal',
      color:'teal',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      color: 'whitesmoke',
    },
    label: {
      display: 'block',
      margin: '10px 0',
      fontSize: '1.1rem',
      color: '#555',
    },
    input: {
      width: '90%',
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    fileInput: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      fontSize: '1rem',
    },
    imagePreview: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
    button: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          placeholder='Name of the Book'
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          style={styles.input}
          placeholder='Name of the Author'
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={styles.input}
          placeholder='Price'
        />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          style={styles.input}
          placeholder='Genre'
        />
        <input
          type="text"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          style={styles.input}
          placeholder='Enter Description'
        />
        <input
          type="file"
          name="coverImage"
          onChange={handleChange}
          accept="image/*"
          style={styles.fileInput}
        />

        {formData.coverImage && (
          <img
            src={URL.createObjectURL(formData.coverImage)}
            alt="Cover Preview"
            style={styles.imagePreview}
          />
        )}

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;