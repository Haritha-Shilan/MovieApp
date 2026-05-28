import React, {  useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import { MovieContext } from '../context/MovieContext';
import { useMovies } from '../hooks/useMovies';

function SearchBar() {
  const {handleSearchText } = useMovies();
const[text,setText]=useState('');

const handleSearch=()=>{
    if(text.trim()==='') return;
    handleSearchText(text);
}

  return (
    <Container className='mt-5 mx-auto' style={{maxWidth:"500px"}}>

    <InputGroup>
            <Form.Control type='text' placeholder='Search movies,actors...' value={text} onChange={(e)=>setText(e.target.value)}></Form.Control>
            <Button variant='primary' type='button' onClick={handleSearch} className='px-4'>
                <FaSearch className='me-2'/> Search
            </Button>
    </InputGroup>
    </Container>
  )
}

export default SearchBar