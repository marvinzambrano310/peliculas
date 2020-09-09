import React,{useEffect,useState} from 'react';
import moment from 'moment';
import '../styles/App.css';
import Cards from "./Cards";
import Titles from "./Titles";
import Details from "./Details";
import Comments from "./Comments";


const App = () =>{

 const [movies, setMovies]=useState(null);
 const [moviesInfo, setMoviesInfo]=useState([]);
 const [word, setWord]=useState('');
 const [id, setId]=useState('');
 const [idComment, setIdComment]=useState('');
 const [details,setDetails]=useState(false);
 const [comments,setComments]=useState([]);
 const [showComments,setShowComments]=useState(false);

    useEffect(()=> {
        const getMovie = async ()=>{
            const data=await fetch(`http://www.omdbapi.com/?apikey=16e43354&s=${word}`);
            const json=await data.json();
            setMovies(json.Search);
        };
        getMovie();
    },[word]);

    useEffect(()=> {
        const getMovieInfo = async ()=>{
            const data1=await fetch(`http://www.omdbapi.com/?apikey=16e43354&i=${id}`);
            const json1=await data1.json();
            setMoviesInfo(json1);
        };
        getMovieInfo();
    },[id]);

    const handleSearch =(newWord)=>{
        //const newWord=document.querySelector('#movie').value;
        setWord(newWord);
       // document.querySelector('#movie').value='';
    }
    const handleAddComment =()=>{
        let id2=idComment
        let name='Han Solo';
        let text=document.querySelector( '#comment' ).value;
        let date=moment().fromNow();
        const newComment={
            id2,
            name,
            text,
            date
        }
        setComments((prevState) =>[
            ...prevState,
            newComment
        ] );
        document.querySelector( '#comment' ).value='';
    }

    const showDetails =(index)=>{
        const id3=movies[index].imdbID;
        setId(id3);
        setDetails(!details);
    }
    const handleOkDetails =()=>{
        setDetails(!details);
    }
    const handleCancelDetails =()=>{
        setDetails(!details);
    }
    const handleShowComments =(index)=>{

        const id1=movies[index].imdbID;
        setIdComment(id1);
        setShowComments(!showComments);

    }
    const handleOkComments =()=>{
        setShowComments(!showComments);
    }
    const handleCancelComments =()=>{
        setShowComments(!showComments);
    }

    return(
        <>
            <div className={'first'}>
                <Titles search={handleSearch}/>
                <Cards movies={movies} details={showDetails} comments={handleShowComments}/>
                <Details details={details} ok={handleOkDetails} cancel={handleCancelDetails} info={moviesInfo}/>
                <Comments id={idComment}
                          cancel={handleCancelComments}
                          ok={handleOkComments}
                          add={handleAddComment}
                          comments={comments}
                          show={showComments}
                />
            </div>
        </>
    );
}

export default App;
