import axios from "axios";

export function getNews(category = 'General') {

    const API_Key = '281eb424c1b3403aa9bc1460c4a230f7';
    const API_Endpoint=`https://newsapi.org/v2/top-headlines?country=us&category=${category}`
  
      return axios.get(`${API_Endpoint}&apiKey=${API_Key}`)
      
    }
  