import React, { useEffect, useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, ButtonGroup, ToggleButton, Table, Tab, Nav, Button, Card } from "react-bootstrap";
import axios from 'axios';
import Papa from 'papaparse';
import { GiPodium, GiTrophy } from "react-icons/gi";
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import { GrSchedulePlay } from 'react-icons/gr';
import agilityClass from '../assets/agility.png';
import drillsClass from '../assets/drills.png';
import guidedClass from '../assets/guided.png';
import privateLessons from '../assets/privates3.png';
import prosClass from '../assets/pros.png';
import rentals from '../assets/rentals.png';

const LeaguesMobile = () => {
    const [activeKey, setActiveKey] = useState(null);

    const [section, setSection] = useState('leagues');

    const [advMens, setAdvMens] = useState([]);
    const [advMensRanks, setAdvMensRanks] = useState([]);
    const [advMixed, setAdvMixed] = useState([]);
    const [advMixedRanks, setAdvMixedRanks] = useState([]);
    const [intMens, setIntMens] = useState([]);
    const [intMensRanks, setIntMensRanks] = useState([]);
    const [intMixed, setIntMixed] = useState([]);
    const [intMixedRanks, setIntMixedRanks] = useState([]);
    const [morningMixed, setMorningMixed] = useState([]);
    const [morningMixedRanks, setMorningMixedRanks] = useState([]);

    useEffect(() =>{
        fetchGoogleSheets();
    }, []);

    const fetchGoogleSheets = () => {
    const advMensSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZdSKxEE4cpe3oFMwZccwpqfFwtJE9YZJR-E0jnaqDPTVAERyqzRDcPvFBpa-44TrnJsTqP4hBgFs2/pub?gid=70908963&single=true&output=csv';
    const advMensStandings = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZdSKxEE4cpe3oFMwZccwpqfFwtJE9YZJR-E0jnaqDPTVAERyqzRDcPvFBpa-44TrnJsTqP4hBgFs2/pub?gid=1447006910&single=true&output=csv';
    const advMixedSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSov27PLqI1LbLGXUHbYQa273psiVxoY6A2_8bUhHo7xMr4nnXf2zR-Vmm2YmruE5OB5EudAhm0nnM3/pub?output=csv';
    const advMixedStandings = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSov27PLqI1LbLGXUHbYQa273psiVxoY6A2_8bUhHo7xMr4nnXf2zR-Vmm2YmruE5OB5EudAhm0nnM3/pub?gid=1447006910&single=true&output=csv';
    const intMensSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSK7fpqqKAPND-ucg-zLZ_soSdBJp0bBpSqcCmHtBSPNyzAj1QeyoyMGgizUb0wtebRjmVmD4bLDeTY/pub?output=csv';
    const intMensStandings = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSK7fpqqKAPND-ucg-zLZ_soSdBJp0bBpSqcCmHtBSPNyzAj1QeyoyMGgizUb0wtebRjmVmD4bLDeTY/pub?gid=1447006910&single=true&output=csv';
    const intMixedSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQR_7utALn_RPVJcwwfnRXBZ9k-155NilCORK4lxYsYZCyr09DtJjvWMmS5qnZZFaHfuZzc6uPmzzgO/pub?output=csv';
    const intMixedStandings = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQR_7utALn_RPVJcwwfnRXBZ9k-155NilCORK4lxYsYZCyr09DtJjvWMmS5qnZZFaHfuZzc6uPmzzgO/pub?gid=1112082240&single=true&output=csv';
    const morningMixedSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWNBRxJr8MmoRBzvozKFVF3kTn-gXozGitat_Ot0P59A6HBNaNlfwDXDl70j13YF1Fg4tR7I6CuSMs/pub?output=csv';
    const morningMixedStandings = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWNBRxJr8MmoRBzvozKFVF3kTn-gXozGitat_Ot0P59A6HBNaNlfwDXDl70j13YF1Fg4tR7I6CuSMs/pub?gid=1447006910&single=true&output=csv';

        axios.get(advMensSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setAdvMens(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Advanced Men\'s data:', error);
            });
        axios.get(advMixedSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setAdvMixed(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Advanced Mixed data:', error);
            });
        axios.get(intMensSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setIntMens(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Intermediate Men\'s data:', error);
            });
        axios.get(intMixedSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setIntMixed(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Intermediate Mixed data:', error);
            });
        axios.get(morningMixedSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setMorningMixed(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Morning Mixed data:', error);
            });
        axios.get(advMensStandings)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data)
                setAdvMensRanks(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Advanced Men\'s standings:', error);
            });
        axios.get(advMixedStandings)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setAdvMixedRanks(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Advanced Mixed standings:', error);
            });
        axios.get(intMixedStandings)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setIntMixedRanks(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Intermediate Mixed standings:', error);
            });
        axios.get(intMensStandings)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setIntMensRanks(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Intermediate Men\'s standings:', error);
            });
        axios.get(morningMixedStandings)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setMorningMixedRanks(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Morning Mixed standings:', error);
            });
        
    }

    function parseCSV(csvText) {
        const results = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true
        });
        return results.data;
    }

    // useEffect(() => {
    //     console.log(advMens);
        
    // }, [advMens]);

    return (
        <div className='m-league-container'>
            {/* TOGGLE SWITCH */}
                <ButtonGroup>
                    <ToggleButton
                        id="toggle-leagues"
                        type="radio"
                        variant={section === 'leagues' ? 'primary' : 'outline-primary'}
                        name="section"
                        value="leagues"
                        checked={section === 'leagues'}
                        onChange={() => setSection('leagues')}
                        >
                            Leagues
                    </ToggleButton>
                    <ToggleButton
                        id="toggle-programs"
                        type="radio"
                        variant={section === 'programs' ? 'primary' : 'outline-primary'}
                        name="section"
                        values="programs"
                        checked={section === 'programs'}
                        onChange={() => setSection('programs')}
                    >
                        Programs
                    </ToggleButton>
                </ButtonGroup>

            { section === 'leagues' ? (
            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)} flush>
                

                {[
                    {
                        key: '0',
                        title: "Advanced Men's League",
                        standings: [
                            advMensRanks[1]?.['_12'] || 'Loading...',
                            advMensRanks[2]?.['_12'] || 'Loading...',
                            advMensRanks[3]?.['_12'] || 'Loading...'
                        ],
                        roster: [
                            [advMens[1]?.[""] || 'Loading...', advMens[1]?.Teams || 'Loading...', advMens[1]?._1 || 'Loading...'],
                            [advMens[2]?.[""] || 'Loading...', advMens[2]?.Teams || 'Loading...', advMens[2]?._1 || 'Loading...'],
                            [advMens[3]?.[""] || 'Loading...', advMens[3]?.Teams || 'Loading...', advMens[3]?._1 || 'Loading...'],
                            [advMens[4]?.[""] || 'Loading...', advMens[4]?.Teams || 'Loading...', advMens[4]?._1 || 'Loading...'],
                            [advMens[5]?.[""] || 'Loading...', advMens[5]?.Teams || 'Loading...', advMens[5]?._1 || 'Loading...'],
                            [advMens[6]?.[""] || 'Loading...', advMens[6]?.Teams || 'Loading...', advMens[6]?._1 || 'Loading...'],
                            [advMens[7]?.[""] || 'Loading...', advMens[7]?.Teams || 'Loading...', advMens[7]?._1 || 'Loading...'],
                            [advMens[8]?.[""] || 'Loading...', advMens[8]?.Teams || 'Loading...', advMens[8]?._1 || 'Loading...']
                        ],
                        schedule: [
                        [advMens[12]?.Teams || 'Loading...',
                            advMens[13]?.Teams || 'Loading...', advMens[13]?.[""] || 'Loading...', advMens[13]?._1 || 'Loading...', advMens[13]?._2 || 'Loading...', advMens[13]?._3 || 'Loading...', advMens[13]?._4 || 'Loading...',
                            advMens[14]?.Teams || 'Loading...', advMens[14]?.[""] || 'Loading...', advMens[14]?._1 || 'Loading...', advMens[14]?._2 || 'Loading...', advMens[14]?._3 || 'Loading...', advMens[14]?._4 || 'Loading...',
                            advMens[15]?.Teams || 'Loading...', advMens[15]?.[""] || 'Loading...', advMens[15]?._1 || 'Loading...', advMens[15]?._2 || 'Loading...', advMens[15]?._3 || 'Loading...', advMens[15]?._4 || 'Loading...',
                            advMens[16]?.Teams || 'Loading...', advMens[16]?.[""] || 'Loading...', advMens[16]?._1 || 'Loading...', advMens[16]?._2 || 'Loading...', advMens[16]?._3 || 'Loading...', advMens[16]?._4 || 'Loading...',
                        ],[advMens[17]?.Teams || 'Loading...',
                            advMens[18]?.Teams || 'Loading...', advMens[18]?.[""] || 'Loading...', advMens[18]?._1 || 'Loading...', advMens[18]?._2 || 'Loading...', advMens[18]?._3 || 'Loading...', advMens[18]?._4 || 'Loading...',
                            advMens[19]?.Teams || 'Loading...', advMens[19]?.[""] || 'Loading...', advMens[19]?._1 || 'Loading...', advMens[19]?._2 || 'Loading...', advMens[19]?._3 || 'Loading...', advMens[19]?._4 || 'Loading...',
                            advMens[20]?.Teams || 'Loading...', advMens[20]?.[""] || 'Loading...', advMens[20]?._1 || 'Loading...', advMens[20]?._2 || 'Loading...', advMens[20]?._3 || 'Loading...', advMens[20]?._4 || 'Loading...',
                            advMens[21]?.Teams || 'Loading...', advMens[21]?.[""] || 'Loading...', advMens[21]?._1 || 'Loading...', advMens[21]?._2 || 'Loading...', advMens[21]?._3 || 'Loading...', advMens[21]?._4 || 'Loading...',
                        ],[advMens[22]?.Teams || 'Loading...',
                            advMens[23]?.Teams || 'Loading...', advMens[23]?.[""] || 'Loading...', advMens[23]?._1 || 'Loading...', advMens[23]?._2 || 'Loading...', advMens[23]?._3 || 'Loading...', advMens[23]?._4 || 'Loading...',
                            advMens[24]?.Teams || 'Loading...', advMens[24]?.[""] || 'Loading...', advMens[24]?._1 || 'Loading...', advMens[24]?._2 || 'Loading...', advMens[24]?._3 || 'Loading...', advMens[24]?._4 || 'Loading...',
                            advMens[25]?.Teams || 'Loading...', advMens[25]?.[""] || 'Loading...', advMens[25]?._1 || 'Loading...', advMens[25]?._2 || 'Loading...', advMens[25]?._3 || 'Loading...', advMens[25]?._4 || 'Loading...',
                            advMens[26]?.Teams || 'Loading...', advMens[26]?.[""] || 'Loading...', advMens[26]?._1 || 'Loading...', advMens[26]?._2 || 'Loading...', advMens[26]?._3 || 'Loading...', advMens[26]?._4 || 'Loading...',
                        ],[advMens[27]?.Teams || 'Loading...',
                            advMens[28]?.Teams || 'Loading...', advMens[28]?.[""] || 'Loading...', advMens[28]?._1 || 'Loading...', advMens[28]?._2 || 'Loading...', advMens[28]?._3 || 'Loading...', advMens[28]?._4 || 'Loading...',
                            advMens[29]?.Teams || 'Loading...', advMens[29]?.[""] || 'Loading...', advMens[29]?._1 || 'Loading...', advMens[29]?._2 || 'Loading...', advMens[29]?._3 || 'Loading...', advMens[29]?._4 || 'Loading...',
                            advMens[30]?.Teams || 'Loading...', advMens[30]?.[""] || 'Loading...', advMens[30]?._1 || 'Loading...', advMens[30]?._2 || 'Loading...', advMens[30]?._3 || 'Loading...', advMens[30]?._4 || 'Loading...',
                            advMens[31]?.Teams || 'Loading...', advMens[31]?.[""] || 'Loading...', advMens[31]?._1 || 'Loading...', advMens[31]?._2 || 'Loading...', advMens[31]?._3 || 'Loading...', advMens[31]?._4 || 'Loading...',
                        ],[advMens[32]?.Teams || 'Loading...',
                            advMens[33]?.Teams || 'Loading...', advMens[33]?.[""] || 'Loading...', advMens[33]?._1 || 'Loading...', advMens[33]?._2 || 'Loading...', advMens[33]?._3 || 'Loading...', advMens[33]?._4 || 'Loading...',
                            advMens[34]?.Teams || 'Loading...', advMens[34]?.[""] || 'Loading...', advMens[34]?._1 || 'Loading...', advMens[34]?._2 || 'Loading...', advMens[34]?._3 || 'Loading...', advMens[34]?._4 || 'Loading...',
                            advMens[35]?.Teams || 'Loading...', advMens[35]?.[""] || 'Loading...', advMens[35]?._1 || 'Loading...', advMens[35]?._2 || 'Loading...', advMens[35]?._3 || 'Loading...', advMens[35]?._4 || 'Loading...',
                            advMens[36]?.Teams || 'Loading...', advMens[36]?.[""] || 'Loading...', advMens[36]?._1 || 'Loading...', advMens[36]?._2 || 'Loading...', advMens[36]?._3 || 'Loading...', advMens[36]?._4 || 'Loading...',
                        ],[advMens[37]?.Teams || 'Loading...',
                            advMens[38]?.Teams || 'Loading...', advMens[38]?.[""] || 'Loading...', advMens[38]?._1 || 'Loading...', advMens[38]?._2 || 'Loading...', advMens[38]?._3 || 'Loading...', advMens[38]?._4 || 'Loading...',
                            advMens[39]?.Teams || 'Loading...', advMens[39]?.[""] || 'Loading...', advMens[39]?._1 || 'Loading...', advMens[39]?._2 || 'Loading...', advMens[39]?._3 || 'Loading...', advMens[39]?._4 || 'Loading...',
                            advMens[40]?.Teams || 'Loading...', advMens[40]?.[""] || 'Loading...', advMens[40]?._1 || 'Loading...', advMens[40]?._2 || 'Loading...', advMens[40]?._3 || 'Loading...', advMens[40]?._4 || 'Loading...',
                            advMens[41]?.Teams || 'Loading...', advMens[41]?.[""] || 'Loading...', advMens[41]?._1 || 'Loading...', advMens[41]?._2 || 'Loading...', advMens[41]?._3 || 'Loading...', advMens[41]?._4 || 'Loading...',
                        ],[advMens[42]?.Teams || 'Loading...'
                        ]]
                    }
                ].map((league) => (
                    <AccordionItem eventKey={league.key} key={league.key} className='m-league-accordion-item'>
                        <AccordionHeader className='m-league-accordion-header'>
                            <h1 className="m-league-name">
                                {league.title}
                            </h1>
                            <div className="m-league-prelim-standings">
                                {league.standings.map((standing, index) => (
                                    <span key={index}>
                                        <GiTrophy fill={index === 0 ? '#ffcd00' : index === 1 ? '#cecece' : '#977547'} /> 
                                        {standing}
                                    </span>
                                ))}
                            </div>
                            <div className="accordion-custom-toggle">
                                {activeKey === league.key ? (
                                    <FaChevronCircleUp className='m-accordion-custom-button' style={{ width: '1.5rem', height: 'auto' }}/>
                                ) : (
                                    <FaChevronCircleDown className='m-accordion-custom-button' style={{ width: '1.5rem', height: 'auto' }} />
                                )}
                            </div>
                        </AccordionHeader>
                        <AccordionBody>
                            <Tab.Container defaultActiveKey="roster" className="tab-container-whole">
                                <Nav variant="tabs" className="d-flex justify-content-between">
                                <Nav.Item className="flex-fill text-center">
                                    <Nav.Link eventKey="roster">Roster</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="flex-fill text-center">
                                    <Nav.Link eventKey="schedule">Schedule</Nav.Link>
                                </Nav.Item>
                                </Nav>

                                <Tab.Content className="p-4">
                                <Tab.Pane eventKey="roster">
                                    <div className="m-league-roster">
                                        <Table variant='dark' striped>
                                            <thead>
                                                <tr>
                                                    <th>Members</th>
                                                    <th>Team Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {league.roster.map((team, index) => (
                                                    <tr key={index}>
                                                        <td className="m-league-roster-player-name">
                                                            <span>
                                                                {team[0]}
                                                            </span>
                                                            <br />
                                                            <span>
                                                                {team[1]} 
                                                            </span>
                                                            </td>
                                                        <td className="m-league-roster-team-name">{team[2]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="schedule">
                                    <Table variant='dark' striped className='m-league-schedule-table'>
                                        
                                        <tbody>
                                            {league.schedule.map((week, index) => {
                                                const isLast = index === league.schedule.length - 1;
                                                if (isLast) {
                                                    return(
                                                        <React.Fragment key={index}>
                                                            <tr className='m-league-table-headers'>
                                                                <td colSpan={2}>{week[0]}</td>
                                                            </tr>
                                                        </React.Fragment>
                                                    )
                                                }
                                                return (
                                                <React.Fragment key={index}>
                                                    
                                                    <tr className='m-league-table-headers'>
                                                        <td colSpan={2}>{week[0]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{week[1]}</td>
                                                        <td>{week[7]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            {week[2]}<br></br>vs<br></br>{week[3]}
                                                        </td>
                                                        <td>
                                                            {week[8]}<br></br>vs<br></br>{week[9]}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>{week[13]}</td>
                                                        <td>{week[19]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            {week[14]}<br></br>vs<br></br>{week[15]}
                                                        </td>
                                                        <td>
                                                            {week[20]}<br></br>vs<br></br>{week[21]}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>{week[4]}</td>
                                                        <td>{week[10]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            {week[5]}<br></br>vs<br></br>{week[6]}
                                                        </td>
                                                        <td>
                                                            {week[11]}<br></br>vs<br></br>{week[12]}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>{week[16]}</td>
                                                        <td>{week[22]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            {week[17]}<br></br>vs<br></br>{week[18]}
                                                        </td>
                                                        <td>
                                                            {week[23]}<br></br>vs<br></br>{week[24]}
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            );
                                        })}
                                        </tbody>
                                        
                                    </Table>

                                </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </AccordionBody>
                    </AccordionItem>
                ))}
            </Accordion>
            ) : (
                
                // THIS DIV IS INSIDE OF THE M-LEAGUE-CONTAINER DIV, PLEASE REMEMBER THIS
                <div className='m-programs-container'>
                    <React.Fragment>
                    {[
                        {
                            key: '0',
                            title: 'Court Rentals',
                            description: 'Rent out a court and bring your friends, snacks, and drinks!',
                            image: { src: rentals, alt: 'Court Rentals' },
                            buttonText: 'Book Now',
                            registrationLink: 'https://theflightclub.as.me/?appointmentType=category:Court%20Rentals',
                        },
                        {
                            key: '1',
                            title: 'Private Lessons',
                            description: 'Book a private lesson with one of our elite coaches.',
                            image: { src: privateLessons, alt: 'Private Lessons' },
                            buttonText: 'Find an Instructor',
                            registrationLink: '#about',
                        },
                        {
                            key: '2',
                            title: 'Skills & Drills',
                            description: 'Join a group class and participate in intense drills and engaging games aimed at improving your skills.',
                            image: { src: drillsClass, alt: 'Skills & Drills' },
                            buttonText: 'Register',
                            registrationLink: 'https://theflightclub.as.me/?appointmentType=73750796',
                        },
                        {
                            key: '3',
                            title: 'Agility Class',
                            description: 'Work on mastering the art of footwork and increasing your hustle and stamina.',
                            image: { src: agilityClass, alt: 'Agility Class' },
                            buttonText: 'Register',
                            registrationLink: 'https://theflightclub.as.me/?appointmentType=73750877',
                        },
                        {
                            key: '4',
                            title: 'Play with the Pros',
                            description: 'Reach out to an instructor to test your skills in a fun and competitive environment while receiving real-time feedback.',
                            image: { src: prosClass, alt: 'Play with the Pros' },
                            buttonText: 'Find an Instructor',
                            registrationLink: '#about',
                        },
                        {
                            key: '5',
                            title: 'Guided Open Play',
                            description: 'Join a group of like-minded players for a fun and competitive open play session, guided by one of our coaches.',
                            image: { src: guidedClass, alt: 'Guided Open Play' },
                            buttonText: 'Register',
                            registrationLink: 'https://theflightclub.as.me/?appointmentType=77262984',
                        }
                    ].map((program) => (
                        <Card key={program.key} className='m-program-card'>
                            <Card.Img variant="top" src={program.image.src} alt={program.image.alt} />
                            <Card.Body>
                                <Card.Title>{program.title}</Card.Title>
                                <Card.Text>{program.description}</Card.Text>
                                <Button variant="primary" href={program.registrationLink} target="_blank">{program.buttonText}</Button>
                            </Card.Body>
                        </Card>
                    ))}
                    </React.Fragment>
                </div>
            ) }
        </div>
    );
}

export default LeaguesMobile;
