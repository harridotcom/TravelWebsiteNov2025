import React, { useState } from 'react';
import './OrganizationTree3D.css';

function OrganizationTree3D() {
  const [activeNode, setActiveNode] = useState(null);

  const orgData = {
    ceo: {
      name: "Meiji Liu",
      position: "General Manager",
      id: "ceo",
      children: ["marketing", "business", "finance"]
    },
    marketing: {
      name: "Ting Li",
      position: "Marketing Manager",
      id: "marketing",
      level: 2,
      children: []
    },
    business: {
      name: "Chen Meng",
      position: "Business Manager",
      id: "business",
      level: 2,
      children: ["hitesh", "ticketing"]
    },
    finance: {
      name: "Viren Modha",
      position: "Finance Manager",
      id: "finance",
      level: 2,
      children: ["myrill", "shaziya"]
    },
    hitesh: {
      name: "Hitesh Rajyaguru",
      position: "Business Development Manager",
      id: "hitesh",
      level: 3,
      children: ["avani", "zoya", "nisha"]
    },
    ticketing: {
      name: "Ticketing Head",
      position: "Operations Lead",
      id: "ticketing",
      level: 3,
      children: ["santi", "jerson", "christopher", "reena", "trixie"]
    },
    myrill: {
      name: "Myrill",
      position: "Accounts Executive",
      id: "myrill",
      level: 3,
      children: []
    },
    shaziya: {
      name: "Shaziya",
      position: "Accounts Assistant",
      id: "shaziya",
      level: 3,
      children: []
    },
    avani: {
      name: "Avani",
      position: "Holiday Specialist & Digital Media Executive",
      id: "avani",
      level: 4,
      children: []
    },
    zoya: {
      name: "Zoya",
      position: "Visa Consultant",
      id: "zoya",
      level: 4,
      children: []
    },
    nisha: {
      name: "Nisha",
      position: "Administrative Support Executive",
      id: "nisha",
      level: 4,
      children: []
    },
    santi: {
      name: "Santi",
      position: "Ticketing Operator",
      id: "santi",
      level: 4,
      children: []
    },
    jerson: {
      name: "Jerson Rafol",
      position: "Ticketing Operator",
      id: "jerson",
      level: 4,
      children: []
    },
    christopher: {
      name: "Christopher Matacot",
      position: "Ticketing Operator",
      id: "christopher",
      level: 4,
      children: []
    },
    reena: {
      name: "Reena",
      position: "Ticketing Operator",
      id: "reena",
      level: 4,
      children: []
    },
    trixie: {
      name: "Trixie",
      position: "Office Support Executive",
      id: "trixie",
      level: 4,
      children: []
    }
  };

  const handleNodeClick = (nodeId) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  };

  const getNodeClass = (nodeId, level) => {
    let baseClass = "org-node";
    if (level === undefined || level === 1) baseClass += " ceo-node";
    else if (level === 2) baseClass += " manager-node";
    else if (level === 3) baseClass += " supervisor-node";
    else baseClass += " employee-node";
    
    if (activeNode === nodeId) baseClass += " active";
    return baseClass;
  };

  const renderNode = (nodeKey, node, position) => {
    return (
      <div
        key={nodeKey}
        className={getNodeClass(nodeKey, node.level)}
        style={position}
        onClick={() => handleNodeClick(nodeKey)}
      >
        <div className="node-content">
          <div className="node-avatar">
            {node.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="node-info">
            <h4 className="node-name">{node.name}</h4>
            <p className="node-position">{node.position}</p>
          </div>
        </div>
        <div className="node-glow"></div>
      </div>
    );
  };

  const renderConnections = () => {
    const connections = [];
    
    // CEO to Level 2 connections (straight vertical lines)
    const ceoConnections = [
      { from: "ceo", to: "marketing", path: "M 600 180 L 600 200 L 300 200 L 300 280" },
      { from: "ceo", to: "business", path: "M 600 180 L 600 280" },
      { from: "ceo", to: "finance", path: "M 600 180 L 600 200 L 900 200 L 900 280" }
    ];

    // Level 2 to Level 3 connections
    const level2Connections = [
      { from: "business", to: "hitesh", path: "M 600 360 L 600 380 L 450 380 L 450 480" },
      { from: "business", to: "ticketing", path: "M 600 360 L 600 380 L 650 380 L 650 480" },
      { from: "finance", to: "myrill", path: "M 900 360 L 900 380 L 820 380 L 820 480" },
      { from: "finance", to: "shaziya", path: "M 900 360 L 900 380 L 980 380 L 980 480" }
    ];

    // Level 3 to Level 4 connections
    const level3Connections = [
      { from: "hitesh", to: "avani", path: "M 450 560 L 450 580 L 250 580 L 250 680" },
      { from: "hitesh", to: "zoya", path: "M 450 560 L 450 580 L 350 580 L 350 680" },
      { from: "hitesh", to: "nisha", path: "M 450 560 L 450 580 L 450 580 L 450 680" },
      { from: "ticketing", to: "santi", path: "M 650 560 L 650 580 L 550 580 L 550 680" },
      { from: "ticketing", to: "jerson", path: "M 650 560 L 650 580 L 650 580 L 650 680" },
      { from: "ticketing", to: "christopher", path: "M 650 560 L 650 580 L 750 580 L 750 680" },
      { from: "ticketing", to: "reena", path: "M 650 560 L 650 580 L 850 580 L 850 680" },
      { from: "ticketing", to: "trixie", path: "M 650 560 L 650 580 L 950 580 L 950 680" }
    ];

    [...ceoConnections, ...level2Connections, ...level3Connections].forEach((conn, index) => {
      connections.push(
        <path
          key={`connection-${index}`}
          d={conn.path}
          className="org-connection"
          fill="none"
          stroke="url(#connectionGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      );
    });

    return connections;
  };

  return (
    <section className="organization-tree-3d">
      <div className="features-container">
        <h2 className="features-title">Our Team Structure</h2>
        <p className="section-subtitle">Meet our dedicated team members organized in an interactive 3D hierarchy</p>
        
        <div className="tree-container">
          <svg className="connection-svg" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#4ecdc4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#a8edea" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {renderConnections()}
          </svg>
          
          <div className="nodes-container">
            {/* CEO Level - Center top */}
            {renderNode("ceo", orgData.ceo, { 
              left: "600px", 
              top: "100px",
              transform: "translateX(-50%)"
            })}
            
            {/* Level 2 - Managers - Evenly spaced */}
            {renderNode("marketing", orgData.marketing, { 
              left: "300px", 
              top: "280px",
              transform: "translateX(-50%)"
            })}
            {renderNode("business", orgData.business, { 
              left: "600px", 
              top: "280px",
              transform: "translateX(-50%)"
            })}
            {renderNode("finance", orgData.finance, { 
              left: "900px", 
              top: "280px",
              transform: "translateX(-50%)"
            })}
            
            {/* Level 3 - Supervisors - Under their managers */}
            {renderNode("hitesh", orgData.hitesh, { 
              left: "450px", 
              top: "480px",
              transform: "translateX(-50%)"
            })}
            {renderNode("ticketing", orgData.ticketing, { 
              left: "650px", 
              top: "480px",
              transform: "translateX(-50%)"
            })}
            {renderNode("myrill", orgData.myrill, { 
              left: "820px", 
              top: "480px",
              transform: "translateX(-50%)"
            })}
            {renderNode("shaziya", orgData.shaziya, { 
              left: "980px", 
              top: "480px",
              transform: "translateX(-50%)"
            })}
            
            {/* Level 4 - Employees - Under their supervisors */}
            {renderNode("avani", orgData.avani, { 
              left: "250px", 
              top: "680px",
              transform: "translateX(-50%)"
            })}
            {renderNode("zoya", orgData.zoya, { 
              left: "350px", 
              top: "680px",
              transform: "translateX(-50%)"
            })}
            {renderNode("nisha", orgData.nisha, { 
              left: "450px", 
              top: "680px",
              transform: "translateX(-50%)"
            })}
            {renderNode("santi", orgData.santi, { 
              left: "550px", 
              top: "680px",
              transform: "translateX(-50%)"
            })}
            {renderNode("jerson", orgData.jerson, { 
              left: "650px", 
              top: "680px",
              transform: "translateX(-50%)"
            })}
            {renderNode("christopher", orgData.christopher, { 
              left: "750px", 
              top: "680px",
              transform: "translateX(-50%)"
            })}
            {renderNode("reena", orgData.reena, { 
              left: "850px", 
              top: "680px",
              transform: "translateX(-50%)"
            })}
            {renderNode("trixie", orgData.trixie, { 
              left: "950px", 
              top: "680px",
              transform: "translateX(-50%)"
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrganizationTree3D;