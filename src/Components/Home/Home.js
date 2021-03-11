import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';
const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const leaguesSlice = leagues.slice(15, 30);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <div style={{ textAlign: 'center' }}>
            <div className="home-banner">
                <div className="overlay">
                    <h3>All Sports Leagues</h3>
                </div>
            </div>
            {
                leaguesSlice.map(league =>
                    <League league={league}
                    >
                    </League>)
            }
        </div>
    );
};

export default Home;