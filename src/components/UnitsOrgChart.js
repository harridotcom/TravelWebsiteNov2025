import React from 'react';
import './UnitsOrgChart.css';

export default function UnitsOrgChart() {
    const teamData = {
        ceo: { name: 'Meiji Liu', title: 'General Manager' },
        managers: [
            { name: 'Ting Li', title: 'Marketing Manager' },
            { name: 'Chen Meng', title: 'Business Manager' },
            { name: 'Viren Modha', title: 'Finance Manager' }
        ],
        teams: {
            business: [
                { name: 'Hitesh Rajyaguru', title: 'Business Development Manager' },
                { name: 'Avani', title: 'Holiday Specialist' },
                { name: 'Zoya', title: 'Visa Consultant' },
                { name: 'Nisha', title: 'Administrative Support' }
            ],
            ticketing: [
                { name: 'Santi', title: 'Ticketing Operator' },
                { name: 'Jerson Rafol', title: 'Ticketing Operator' },
                { name: 'Christopher Matacot', title: 'Ticketing Operator' },
                { name: 'Reena', title: 'Ticketing Operator' },
                { name: 'Trixie', title: 'Office Support' }
            ],
            finance: [
                { name: 'Myrill', title: 'Accounts Executive' },
                { name: 'Shaziya', title: 'Accounts Assistant' }
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
                                <div className="avatar ceo-avatar">
                                    {teamData.ceo.name.split(' ').map(n => n[0]).join('')}
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
                                    <div className="avatar manager-avatar">
                                        {manager.name.split(' ').map(n => n[0]).join('')}
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
                                        <div className="avatar employee-avatar">
                                            {member.name.split(' ').map(n => n[0]).join('')}
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
                                        <div className="avatar employee-avatar">
                                            {member.name.split(' ').map(n => n[0]).join('')}
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
                                        <div className="avatar employee-avatar">
                                            {member.name.split(' ').map(n => n[0]).join('')}
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