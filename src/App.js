import React from 'react'
import './App.css';
import './bootstrap.css';


function App() {

  const movies=
  [
{
  id:1,
 banner:'https://assetscdn1.paytm.com/images/cinema/Vaaranam-Aayiram--705x750-f9de07a0-8389-11ee-931a-230dd0f33fac.jpg?format=webp&imwidth=300',
  title:"Varanam Ayiram",
  rating:"7",
},
{
  id:2,
banner:'https://assetscdn1.paytm.com/images/cinema/3-705x750-bf826150-851e-11ee-a019-81361bc3d81d.jpg?format=webp&imwidth=300',
  title:"3",
  rating:"10",
},
{
  id:3,
 banner:'https://assetscdn1.paytm.com/images/cinema/Vaaranam-Aayiram--705x750-f9de07a0-8389-11ee-931a-230dd0f33fac.jpg?format=webp&imwidth=300',
  title:"Varanam Ayiram",
  rating:"7",
},
{
  id:4,
banner:'https://assetscdn1.paytm.com/images/cinema/3-705x750-bf826150-851e-11ee-a019-81361bc3d81d.jpg?format=webp&imwidth=300',
  title:"3",
  rating:"10",
},
{
  id:3,
 banner:'https://assetscdn1.paytm.com/images/cinema/Vaaranam-Aayiram--705x750-f9de07a0-8389-11ee-931a-230dd0f33fac.jpg?format=webp&imwidth=300',
  title:"Varanam Ayiram",
  rating:"7",
},
{
  id:4,
banner:'https://assetscdn1.paytm.com/images/cinema/3-705x750-bf826150-851e-11ee-a019-81361bc3d81d.jpg?format=webp&imwidth=300',
  title:"3",
  rating:"10",
}

  ]
  return (
    <div className="container">
        <div className='row'>
          <h1>Movie Listing</h1>
        {movies.map(movie => {
 return (
  <div className='col'>git 
    <div key={movie.id}>
      <img src={movie.banner}/>
      <h2>{movie.title}</h2>
      <p>rating:{movie.rating}</p>      
    </div>
    </div>
 );
})}
    </div>
    </div>
  );
}

export default App;