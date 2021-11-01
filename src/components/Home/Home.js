import React from 'react';
import Banner from '../Banner/Banner';
import Equity from '../Equity/Equity';
import Nursing from '../Nursing/Nursing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Nursing></Nursing>
            <Equity></Equity>
        </>
    );
};

export default Home;