import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Wrapper } from '../../components/Header/styles';
import { getTopHeadLines } from '../../services/newsApi/noticias';

interface Article {
  title: string;
  url: string;
  description: string;
  urlToImage: string;
}

function Home() {

  // quando se passa um array vazio, significa que ele só irá executar isso apenas uma vez, 
  // no momento da construção do componente
const [articles, setArticles] = useState<Article[]>([])

useEffect(() => {

  const getNoticias = async () => {
    const response = await getTopHeadLines();

    setArticles (response.articles);
  };

  getNoticias();
}, []);

  return (
    <div>
      <Header />
      <Wrapper>
        {articles.map((article, index) => {
            return ( <Card 
              titulo={article.title} 
              resumo={article.description} 
              link={article.url} 
              image={article.urlToImage}
              key={index}
              />
              );
          })
        }      
      </Wrapper>      
    </div>
    
  )
}

export default Home;