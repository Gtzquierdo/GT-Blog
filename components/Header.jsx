import React, { useState, useEffect } from 'react';

import Link from 'next/link';
// import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories);
        });
    }, []);
    return (
        <div>
            
        </div>
    )
}

export default Header
