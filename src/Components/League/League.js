import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './League.css';


const League = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    return (

        <div className="column">
            <h3>{strLeague}</h3>
            <p>Sport type: {strSport}</p>
            <Link to={`/league/${idLeague}`}>
                <Button variant="primary">
                    Show
                        </Button>
            </Link>

        </div>

    );
};

export default League;