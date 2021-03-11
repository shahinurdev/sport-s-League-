import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import male from './img/maleResize.png';
import female from './img/female.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [leagueDetails, setLeagueDetails] = useState({});
    const { strCountry, strGender,
        dateFirstEvent, strSport, strLeague,
        strFacebook, strYoutube, strBadge
    } = leagueDetails;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetails(data.leagues[0]));
    }, [idLeague])

    return (
        <div className="leagueDetailsDiv">
            <div className="league-banner">
                <div className="league-banner-img">
                    <img src={strBadge} alt="" />
                </div>
            </div>
            <Container className="leagueDetailsContainer">
                <Row>
                    <Col>
                        <h5> <strong>{strLeague}</strong> </h5>
                        <h6>Founded: {dateFirstEvent}</h6>
                        <h3>Country: {strCountry}</h3>
                        <h3>Gender: {strGender}</h3>
                        <h5>Sport Type: {strSport}</h5>
                    </Col>

                    <Col>
                        <img src={male} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="leagueDetailsText">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br />
                <br />
                <br />
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                <Container>
                <div className="socialIcon">
                    <a href={strFacebook} target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href={strFacebook} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href={strYoutube} target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
                </Container>
            </Container>
        </div>


    );
};

export default LeagueDetail;