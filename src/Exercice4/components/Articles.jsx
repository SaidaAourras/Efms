import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle } from '../redux/articleReducer';
import AddArticle from './AddArticle'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const Articles = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const { articles } = useSelector(state => state.articles);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleEditClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="container mt-5">
      {selectedArticle ? (
        <AddArticle article={selectedArticle} />
      ) : (
        <>
        <button className='btn btn-primary' onClick={()=> navigate('/form')}>
            add
        </button>
          <div className="d-flex flex-wrap justify-content-around w-75 mx-auto">
            {articles.length === 0 ? (
              <p>No articles available</p>
            ) : (
              articles.map((article) => (
                <div key={article.id} className="card my-3" style={{ width: '18rem' }}>
                  <img src={article.image} className="card-img-top" alt={article.family} />
                  <div className="card-body">
                    <h5 className="card-title">{article.designation}</h5>
                    <div className="text-muted">{article.family}</div>
                    <button className="btn btn-outline-info btn-sm mx-1" 
                      onClick={() => dispatch(deleteArticle(article.id))}>
                      Delete
                    </button>
                    <button className="btn btn-outline-warning btn-sm mx-1"
                      onClick={() => handleEditClick(article)}>
                      Edit
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
         
        </>
      )}
    </div>
  );
};

export default Articles;
