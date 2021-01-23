import React from 'react';
import Paragraph from './Para';

function Books(obj){
    return(
        <>
            <h1> First Bookname is {obj.bookname}  </h1>
            <Paragraph bookAuthorName={obj.authorname}/>
        </>
    )
}

export default Books;