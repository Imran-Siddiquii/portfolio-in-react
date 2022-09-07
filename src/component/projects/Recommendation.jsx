import React, { useState } from 'react'


const recommend={
    Bollywood:[{
        name:"Don2",
        image:"https://flxt.tmsimg.com/assets/p8934938_p_v8_ai.jpg"
    

},{
    image:"https://www.yashrajfilms.com/images/default-source/Movies/Sultan/sultan_767x430.jpg?sfvrsn=529dcccc_4",
    name:"Sultan"

},
{
    image:"https://upload.wikimedia.org/wikipedia/en/f/f1/Dhoom_3_Film_Poster.jpg",
    name:"Dhoom 3"
},
{
    image:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/12/pjimage-48-1606906136.jpg",
    name:"MBBS"
}
],
    Hollywood:[{
    image:"https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/fast-five-2011/large_jwNWXqMMbvM55czSepwog6mxqM9.jpg",
        name:"Fast Five"

},
{
image:"https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.jpg",
    name:"Avanger Endgame"
},
{
image:"https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
    name:"Mission Impossible 6"
},
{
image:"https://upload.wikimedia.org/wikipedia/en/b/b9/Spectre_2015_poster.jpg",
    name:"Specter OO7"
}]
}
const movies=Object.keys(recommend);  // get object key  such as hollywood and bollowood

// console.log(movies);
// console.log(recommend.Bollywood)

const Recommendation = () => {

    // const [moviesList,setMoviesList]=useState([''])// for empyt screen at first 
const [moviesList,setMoviesList]=useState('Bollywood')
    const bringMovie=(list)=>{

        // console.log(list);  //empty screen at first
        // const mo=recommend[list]
   setMoviesList(list)          
    }
  return (<>
    <div className='container-fluid d-flex my-4 justify-content-center w-100 '>
    <br />
    {
        movies.map((list)=>(
            <button className='btn btn-primary mx-5' onClick={()=>bringMovie(list)} key={list}>{list}</button>
        ))
    }   
    </div>
    <div className=' container d-flex  mx-auto justify-content-center'>
        {recommend[moviesList].map((movieList,index)=>(<>
           <div key={index}>
           <div className="card mx-4 " style={{width: "18rem"}}>
  <img  src={movieList.image} alt="Card" className="card-img-top"  height="170px" width="fit-content"  />
  <div className="card-body">
    <p className="card-text text-center">{movieList.name}</p>
    
  </div>
</div>
            </div></>))}
        </div>
    </>)
}

export default Recommendation;