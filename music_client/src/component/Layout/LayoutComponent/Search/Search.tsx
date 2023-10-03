import React from 'react';
import search from './search.module.scss'
import { LuSearch } from 'react-icons/lu'

const Search = () => {
    return(
        <>
            <form className={search.form}>
                <input placeholder='Щас найдём...' />
                <LuSearch />
            </form>
        </>
    );
}

export default Search;