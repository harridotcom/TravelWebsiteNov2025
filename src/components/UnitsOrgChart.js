import React from 'react';
import './UnitsOrgChart.css';

export default function UnitsOrgChart() {
    const teamData = {
        ceo: { 
            name: 'Meiji Liu', 
            title: 'General Manager',
            bio: '15+ years of experience in travel industry management. Leading Units Travel LLC to new heights.',
            email: 'meiji@unitstravel.com',
            phone: '+971-4-xxx-xxxx'
        },
        managers: [
            { 
                name: 'Ting Li', 
                title: 'Marketing Manager',
                bio: 'Expert in digital marketing and brand development. Specialized in travel industry promotion.',
                email: 'ting@unitstravel.com'
            },
            { 
                name: 'Chen Meng', 
                title: 'Business Manager',
                bio: 'Strategic business operations expert with focus on efficiency and client satisfaction.',
                email: 'chen@unitstravel.com'
            },
            { 
                name: 'Viren Modha', 
                title: 'Finance Manager',
                bio: 'Financial planning and analysis expert. Ensuring sustainable growth and profitability.',
                email: 'viren@unitstravel.com'
            }
        ],
        teams: {
            business: [
                { 
                    name: 'Hitesh Rajyaguru', 
                    title: 'Business Development Manager',
                    bio: 'Driving new business opportunities and partnerships across international markets.',
                    email: 'hitesh@unitstravel.com'
                },
                { 
                    name: 'Avani', 
                    title: 'Holiday Specialist',
                    bio: 'Creating memorable holiday experiences with personalized itineraries and exceptional service.',
                    email: 'avani@unitstravel.com'
                },
                { 
                    name: 'Zoya', 
                    title: 'Visa Consultant',
                    bio: 'Expert in visa processing and travel documentation across multiple countries.',
                    email: 'zoya@unitstravel.com'
                },
                { 
                    name: 'Nisha', 
                    title: 'Administrative Support',
                    bio: 'Providing comprehensive administrative support to ensure smooth operations.',
                    email: 'nisha@unitstravel.com'
                }
            ],
            ticketing: [
                { 
                    name: 'Santi', 
                    title: 'Ticketing Operator',
                    bio: 'Specialized in flight bookings and airline ticketing operations.',
                    email: 'santi@unitstravel.com'
                },
                { 
                    name: 'Jerson Rafol', 
                    title: 'Ticketing Operator',
                    bio: 'Expert in complex itinerary planning and multi-destination ticketing.',
                    email: 'jerson@unitstravel.com'
                },
                { 
                    name: 'Christopher Matacot', 
                    title: 'Ticketing Operator',
                    bio: 'Handling corporate travel bookings and group reservations efficiently.',
                    email: 'christopher@unitstravel.com'
                },
                { 
                    name: 'Reena', 
                    title: 'Ticketing Operator',
                    bio: 'Focused on customer service and special requests handling.',
                    email: 'reena@unitstravel.com'
                },
                { 
                    name: 'Trixie', 
                    title: 'Office Support',
                    bio: 'Supporting ticketing operations with administrative assistance.',
                    email: 'trixie@unitstravel.com'
                }
            ],
            finance: [
                { 
                    name: 'Myrill', 
                    title: 'Accounts Executive',
                    bio: 'Managing financial transactions and maintaining accurate accounting records.',
                    email: 'myrill@unitstravel.com'
                },
                { 
                    name: 'Shaziya', 
                    title: 'Accounts Assistant',
                    bio: 'Supporting accounts operations with attention to detail and accuracy.',
                    email: 'shaziya@unitstravel.com'
                }
            ]
        }
    };

    return (
        <section className="team-section">
            <div className="features-container">
                <h2 className="features-title">Our Team Structure</h2>
                <p className="section-subtitle">Meet our dedicated team members organized by departments</p>
                
                <div className="org-chart-simple">
                    {/* CEO */}
                    <div className="org-level ceo-level">
                        <div className="team-card ceo-card">
                            <div className="card-header">
                                <div className="member-info">
                                    <h4 className="member-name">{teamData.ceo.name}</h4>
                                    <p className="member-title">{teamData.ceo.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Managers */}
                    <div className="org-level managers-level">
                        {teamData.managers.map((manager, index) => (
                            <div key={index} className="team-card manager-card">
                                <div className="card-header">
                                    <div className="member-info">
                                        <h4 className="member-name">{manager.name}</h4>
                                        <p className="member-title">{manager.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Departments */}
                    <div className="departments-grid">
                        <div className="department">
                            <h3 className="department-title">Business Development</h3>
                            <div className="team-grid">
                                {teamData.teams.business.map((member, index) => (
                                    <div key={index} className="team-card employee-card">
                                        <div className="member-info">
                                            <h5 className="member-name">{member.name}</h5>
                                            <p className="member-title">{member.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="department">
                            <h3 className="department-title">Ticketing Operations</h3>
                            <div className="team-grid">
                                {teamData.teams.ticketing.map((member, index) => (
                                    <div key={index} className="team-card employee-card">
                                        <div className="member-info">
                                            <h5 className="member-name">{member.name}</h5>
                                            <p className="member-title">{member.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="department">
                            <h3 className="department-title">Finance & Accounts</h3>
                            <div className="team-grid">
                                {teamData.teams.finance.map((member, index) => (
                                    <div key={index} className="team-card employee-card">
                                        <div className="member-info">
                                            <h5 className="member-name">{member.name}</h5>
                                            <p className="member-title">{member.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}