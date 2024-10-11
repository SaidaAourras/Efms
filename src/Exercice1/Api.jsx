import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Api = () => {

    const [article, setArticle] = useState(null);

    useEffect(() => {
      const fetchArticle = async () => {
        try {
          const response = await axios.get("http://localhost:5000/article");
          setArticle(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des articles :", error);
        }
      };
  
      fetchArticle(); 
    }, []); 
  
    console.log(article);
    
  return (
    <div>
      
    </div>
  )
}

export default Api
