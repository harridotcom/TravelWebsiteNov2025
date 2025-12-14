import React from 'react';
import './UnitsOrgChart.css';

export default function UnitsOrgChart() {
    const teamData = {
        ceo: { 
            name: 'Meiji Liu', 
            title: 'General Manager',
            photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            bio: '15+ years of experience in travel industry management. Leading Units Travel LLC to new heights.',
            email: 'meiji@unitstravel.com',
            phone: '+971-4-xxx-xxxx'
        },
        managers: [
            { 
                name: 'Ting Li', 
                title: 'Marketing Manager',
                photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                bio: 'Expert in digital marketing and brand development. Specialized in travel industry promotion.',
                email: 'ting@unitstravel.com'
            },
            { 
                name: 'Chen Meng', 
                title: 'Business Manager',
                photo: 'https://images.unsplash.com/photo-1559548331-f9cb98fa6399?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                bio: 'Strategic business operations expert with focus on efficiency and client satisfaction.',
                email: 'chen@unitstravel.com'
            },
            { 
                name: 'Viren Modha', 
                title: 'Finance Manager',
                photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                bio: 'Financial planning and analysis expert. Ensuring sustainable growth and profitability.',
                email: 'viren@unitstravel.com'
            }
        ],
        teams: {
            business: [
                { 
                    name: 'Hitesh Rajyaguru', 
                    title: 'Business Development Manager',
                    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Driving new business opportunities and partnerships across international markets.',
                    email: 'hitesh@unitstravel.com'
                },
                { 
                    name: 'Avani', 
                    title: 'Holiday Specialist',
                    photo: 'https://images.unsplash.com/photo-1494790108755-2616b9b01a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Creating memorable holiday experiences with personalized itineraries and exceptional service.',
                    email: 'avani@unitstravel.com'
                },
                { 
                    name: 'Zoya', 
                    title: 'Visa Consultant',
                    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Expert in visa processing and travel documentation across multiple countries.',
                    email: 'zoya@unitstravel.com'
                },
                { 
                    name: 'Nisha', 
                    title: 'Administrative Support',
                    photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Providing comprehensive administrative support to ensure smooth operations.',
                    email: 'nisha@unitstravel.com'
                }
            ],
            ticketing: [
                { 
                    name: 'Santi', 
                    title: 'Ticketing Operator',
                    photo: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Specialized in flight bookings and airline ticketing operations.',
                    email: 'santi@unitstravel.com'
                },
                { 
                    name: 'Jerson Rafol', 
                    title: 'Ticketing Operator',
                    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Expert in complex itinerary planning and multi-destination ticketing.',
                    email: 'jerson@unitstravel.com'
                },
                { 
                    name: 'Christopher Matacot', 
                    title: 'Ticketing Operator',
                    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Handling corporate travel bookings and group reservations efficiently.',
                    email: 'christopher@unitstravel.com'
                },
                { 
                    name: 'Reena', 
                    title: 'Ticketing Operator',
                    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Focused on customer service and special requests handling.',
                    email: 'reena@unitstravel.com'
                },
                { 
                    name: 'Trixie', 
                    title: 'Office Support',
                    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Supporting ticketing operations with administrative assistance.',
                    email: 'trixie@unitstravel.com'
                }
            ],
            finance: [
                { 
                    name: 'Myrill', 
                    title: 'Accounts Executive',
                    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                    bio: 'Managing financial transactions and maintaining accurate accounting records.',
                    email: 'myrill@unitstravel.com'
                },
                { 
                    name: 'Shaziya', 
                    title: 'Accounts Assistant',
                    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
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
                                <div className="photo-container">
                                    <img src={teamData.ceo.photo} alt={teamData.ceo.name} className="member-photo ceo-photo" />
                                    <div className="hover-overlay">
                                        <div className="hover-content">
                                            <h4>{teamData.ceo.title}</h4>
                                            <p className="member-bio">{teamData.ceo.bio}</p>
                                            <div className="contact-info">
                                                <p>{teamData.ceo.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    <div className="photo-container">
                                        <img src={manager.photo} alt={manager.name} className="member-photo manager-photo" />
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <h4>{manager.title}</h4>
                                                <p className="member-bio">{manager.bio}</p>
                                                <div className="contact-info">
                                                    <p>{manager.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                        <div className="photo-container">
                                            <img src={member.photo} alt={member.name} className="member-photo employee-photo" />
                                            <div className="hover-overlay">
                                                <div className="hover-content">
                                                    <h4>{member.title}</h4>
                                                    <p className="member-bio">{member.bio}</p>
                                                    <div className="contact-info">
                                                        <p>{member.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div className="photo-container">
                                            <img src={member.photo} alt={member.name} className="member-photo employee-photo" />
                                            <div className="hover-overlay">
                                                <div className="hover-content">
                                                    <h4>{member.title}</h4>
                                                    <p className="member-bio">{member.bio}</p>
                                                    <div className="contact-info">
                                                        <p>{member.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div className="photo-container">
                                            <img src={member.photo} alt={member.name} className="member-photo employee-photo" />
                                            <div className="hover-overlay">
                                                <div className="hover-content">
                                                    <h4>{member.title}</h4>
                                                    <p className="member-bio">{member.bio}</p>
                                                    <div className="contact-info">
                                                        <p>{member.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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