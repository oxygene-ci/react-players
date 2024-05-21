import React from 'react';
import Navbars from './Navbars';
import Main from './Main';
import Footer from './Footer';

function Home(props) {
    return (
        <div className='Home'>
            <Navbars page="accueil" />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;