import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addArticle, updateArticle } from '../redux/articleReducer';
import { useNavigate } from 'react-router-dom';

const AddArticle = (Props) => {
    const navigate = useNavigate()
    const { article } =Props
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({
    id: '',
    designation: '',
    family: '',
    image: ''
  });

  useEffect(() => {
    if (article) {
      setDataForm(article);
    } else {
      setDataForm({ id: '', designation: '', family: '', image: '' });
    }
  }, [article]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataForm({ id: '', designation: '', family: '', image: '' });
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>{article ? 'Update Article' : 'Add Article'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="designation" className="form-label">Designation</label>
            <input
              type="text"
              className="form-control"
              id="designation"
              name="designation"
              value={dataForm.designation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="family" className="form-label">Family</label>
            <input
              type="text"
              className="form-control"
              id="family"
              name="family"
              value={dataForm.family}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input
              type="url"
              className="form-control"
              id="image"
              name="image"
              value={dataForm.image}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={()=>{article? dispatch(updateArticle(dataForm)) :dispatch(addArticle({ ...dataForm, id: uuidv4() }))}}>
            {article ? 'Update Article' : 'Add Article'}
          </button>
        </form>
        <button  className="btn btn-primary mx-3 my-2"
            onClick={()=> navigate('/Ex4')}
          >
            Home
        </button>
      </div>
    </div>
  );
};

export default AddArticle;
