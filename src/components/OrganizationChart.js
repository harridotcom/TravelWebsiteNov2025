function OrganizationChart() {
  const orgData = {
    topManagement: {
      title: "Top Management",
      members: [
        { name: "Meiji Liu", position: "General Manager" },
        { name: "Ting Li", position: "Marketing Manager" },
        { name: "Chen Meng", position: "Business Manager" },
        { name: "Viren Modha", position: "Finance Manager" }
      ]
    },
    businessOperations: {
      title: "Business & Operations",
      head: "Hitesh Rajyaguru",
      headPosition: "Business Development Manager",
      members: [
        { name: "Avani", position: "Holiday Specialist & Digital Media Executive" },
        { name: "Zoya", position: "Visa Consultant" },
        { name: "Nisha", position: "Administrative Support Executive" }
      ]
    },
    ticketingTeam: {
      title: "Ticketing Team",
      head: "Chen Meng",
      headPosition: "Business Manager",
      members: [
        { name: "Santi", position: "Ticketing Operator" },
        { name: "Jerson Rafol", position: "Ticketing Operator" },
        { name: "Christopher Matacot", position: "Ticketing Operator" },
        { name: "Reena", position: "Ticketing Operator" },
        { name: "Trixie", position: "Office Support Executive" }
      ]
    },
    financeAccounts: {
      title: "Finance & Accounts",
      head: "Viren Modha",
      headPosition: "Finance Manager",
      members: [
        { name: "Myrill", position: "Accounts Executive" },
        { name: "Shaziya", position: "Accounts Assistant" }
      ]
    }
  };

  return (
    <section className="organization-chart">
      <div className="features-container">
        <h2 className="features-title">Organization Structure</h2>
        
        <div className="org-chart">
          <div className="org-level top-management">
            <div className="department-card">
              <h3 className="department-title">{orgData.topManagement.title}</h3>
              <div className="members-grid">
                {orgData.topManagement.members.map((member, index) => (
                  <div key={index} className="member-card executive">
                    <div className="member-name">{member.name}</div>
                    <div className="member-position">{member.position}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="org-level departments">
            <div className="department-card">
              <h3 className="department-title">{orgData.businessOperations.title}</h3>
              <div className="department-head">
                <div className="member-card head">
                  <div className="member-name">{orgData.businessOperations.head}</div>
                  <div className="member-position">{orgData.businessOperations.headPosition}</div>
                </div>
              </div>
              <div className="members-grid">
                {orgData.businessOperations.members.map((member, index) => (
                  <div key={index} className="member-card">
                    <div className="member-name">{member.name}</div>
                    <div className="member-position">{member.position}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="department-card">
              <h3 className="department-title">{orgData.ticketingTeam.title}</h3>
              <div className="department-head">
                <div className="member-card head">
                  <div className="member-name">{orgData.ticketingTeam.head}</div>
                  <div className="member-position">{orgData.ticketingTeam.headPosition}</div>
                </div>
              </div>
              <div className="members-grid">
                {orgData.ticketingTeam.members.map((member, index) => (
                  <div key={index} className="member-card">
                    <div className="member-name">{member.name}</div>
                    <div className="member-position">{member.position}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="department-card">
              <h3 className="department-title">{orgData.financeAccounts.title}</h3>
              <div className="department-head">
                <div className="member-card head">
                  <div className="member-name">{orgData.financeAccounts.head}</div>
                  <div className="member-position">{orgData.financeAccounts.headPosition}</div>
                </div>
              </div>
              <div className="members-grid">
                {orgData.financeAccounts.members.map((member, index) => (
                  <div key={index} className="member-card">
                    <div className="member-name">{member.name}</div>
                    <div className="member-position">{member.position}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .organization-chart {
          background: #ffffff;
          padding: 5rem 0;
        }

        .org-chart {
          max-width: 1200px;
          margin: 0 auto;
        }

        .org-level {
          margin-bottom: 3rem;
        }

        .top-management {
          text-align: center;
          margin-bottom: 4rem;
        }

        .departments {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .department-card {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .department-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .department-title {
          color: #2d3748;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
          border-bottom: 2px solid #667eea;
          padding-bottom: 0.5rem;
        }

        .department-head {
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .members-grid {
          display: grid;
          gap: 1rem;
        }

        .top-management .members-grid {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .member-card {
          background: white;
          border-radius: 6px;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .member-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }

        .member-card.executive {
          background: #667eea;
          color: white;
          border: 1px solid #667eea;
        }

        .member-card.head {
          background: #e53e3e;
          color: white;
          border: 1px solid #e53e3e;
          margin-bottom: 1rem;
        }

        .member-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #2d3748;
        }

        .member-position {
          font-size: 0.9rem;
          font-weight: 400;
          color: #4a5568;
          line-height: 1.3;
        }

        .member-card.executive .member-name,
        .member-card.head .member-name {
          color: white;
        }

        .member-card.executive .member-position,
        .member-card.head .member-position {
          color: rgba(255, 255, 255, 0.9);
        }

        @media (max-width: 768px) {
          .departments {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .department-card {
            padding: 1.5rem;
          }
          
          .top-management .members-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
          }

          .organization-chart {
            padding: 3rem 0;
          }
        }

        @media (max-width: 480px) {
          .top-management .members-grid {
            grid-template-columns: 1fr;
          }

          .member-card {
            padding: 1.2rem;
          }

          .member-name {
            font-size: 1rem;
          }

          .member-position {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}

export default OrganizationChart;