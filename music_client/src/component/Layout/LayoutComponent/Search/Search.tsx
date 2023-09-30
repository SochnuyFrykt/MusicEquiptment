import React from 'react';
import search from './search.module.scss'

const Search = () => {
    return(
        <>
            <form className={search.form}>
                <input placeholder='Щас найдём...' />
            </form>
        </>
    );
}

export default Search;