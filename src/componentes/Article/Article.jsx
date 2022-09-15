import React from 'react';

import '../Article/Article.css'

import Post from '../Post/Post';

const Article = () => {
  return (
  <section className='container'>
    <div className='container-posts'>
      <Post subtitle='tecnologia' title='Steam Deck mais barato'  author='Chupeta De Galinha' datatime='Setembro 13, 2022' textpost='1Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem earum dolorem. Est, voluptas quaerat.' imgprofile=''/>
      
      

      <Post  subtitle='fotografia' title='Câmeras que prometem Zoom de 90X'  author='Jake Daniels' datatime='Setembro 14, 2022' textpost='2Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem earum dolorem. Est, voluptas quaerat.' imgprofile=''/>
      

      <Post  subtitle='cinema' title='Bilheteria de Thor Amor e Trovão  supera os  US$ 700 milhões ' author='Suvaco Pereira' datatime='Setembro 17, 2022' textpost='3Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem earum dolorem. Est, voluptas quaerat.' imgprofile=''/>
      
     
    </div>
 
  </section>
  );
}
 
export default Article;