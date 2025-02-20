import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const Header = ({ onSearch, onReset }) => {
    const [value, setValue] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(value);
    }

    return (

        <div className='flex bg-red-700 p-5 gap-8 justify-between text-xl font-bold items-center '>
            <h1>MovieTv</h1>
            <form onSubmit={handleSearch} className="flex">                     <input
                className="text-zinc-900 text-xl ml-20 py-3 w-80 px-5 border-2 rounded-s-full  focus:outline-none"
                type="search"
                placeholder="Recherche"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
                <button type='submit'
                    className=" w-20 p-3 border-l-0 border-2 hover:bg-gray-300 focus:outline-none focus:ring-0 focus:ring-gray-200 bg-slate-100/95 rounded-e-full" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-zinc-600" />
                </button>
            </form>
            <div className="flex items-center gap-8">
                <a href="#" onClick={onReset}
                    className="text-amber-100 hover:text-gray-900 hover:bg-amber-100 p-3 rounded-full ">
                    Accueil
                </a>
                <a href="#" className="text-amber-100 hover:text-gray-900 hover:bg-amber-100 p-3 rounded-full ">
                    Inscription
                </a>
            </div>

        </div>
    )
}

export default Header;