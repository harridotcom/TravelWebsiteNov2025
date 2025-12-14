import { useParams } from 'react-router-dom';
import { useState } from 'react';

function DestinationDetail() {
  const { country } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const destinationsData = {
    switzerland: {
      name: "Switzerland",
      flag: "🇨🇭",
      tagline: "Alpine Excellence",
      description: "Discover pristine mountain peaks, crystal-clear lakes, and charming villages nestled in breathtaking alpine landscapes.",
      mainImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Matterhorn",
          description: "Iconic pyramid peak"
        },
        {
          image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Jungfraujoch",
          description: "Top of Europe"
        },
        {
          image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Lake Geneva",
          description: "Crystal clear alpine lake"
        },
        {
          image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Interlaken",
          description: "Adventure sports paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Zermatt",
          description: "Car-free alpine village"
        },
        {
          image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Rhine Falls",
          description: "Europe's most powerful waterfall"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Lucerne",
          description: "Historic lakeside city"
        },
        {
          image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Grindelwald",
          description: "Hiking and skiing paradise"
        }
      ]
    },
    japan: {
      name: "Japan",
      flag: "🇯🇵",
      tagline: "Tradition Meets Innovation",
      description: "Experience the perfect harmony of ancient traditions and cutting-edge technology in the land of the rising sun.",
      mainImage: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Mount Fuji",
          description: "Sacred volcanic peak"
        },
        {
          image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Kyoto Temples",
          description: "Ancient spiritual sites"
        },
        {
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Tokyo",
          description: "Vibrant metropolis"
        },
        {
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Osaka",
          description: "Food capital of Japan"
        },
        {
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hiroshima",
          description: "Peace memorial city"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Nara",
          description: "Ancient capital with deer"
        },
        {
          image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hakone",
          description: "Hot springs and art"
        },
        {
          image: "https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Takayama",
          description: "Historic mountain town"
        },
        {
          image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Nikko",
          description: "UNESCO World Heritage"
        }
      ]
    },
    norway: {
      name: "Norway",
      flag: "🇳🇴",
      tagline: "Nordic Wilderness",
      description: "Journey through dramatic fjords, witness the dancing northern lights, and explore pristine arctic landscapes.",
      mainImage: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Geiranger Fjord",
          description: "UNESCO World Heritage"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Lofoten Islands",
          description: "Arctic wilderness"
        },
        {
          image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Northern Lights",
          description: "Aurora Borealis magic"
        },
        {
          image: "https://images.unsplash.com/photo-1539066033332-e64ac3338768?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Bergen",
          description: "Gateway to the fjords"
        },
        {
          image: "https://images.unsplash.com/photo-1591162618851-70ee8e040fdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Tromsø",
          description: "Arctic capital"
        },
        {
          image: "https://images.unsplash.com/photo-1571079570759-ce593986802c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Preikestolen",
          description: "Pulpit Rock cliff"
        },
        {
          image: "https://images.unsplash.com/photo-1569640779138-8db1dc8fb0d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Flam",
          description: "Railway and cruise hub"
        },
        {
          image: "https://images.unsplash.com/photo-1571079570759-ce593986802c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Stavanger",
          description: "Oil capital and fjords"
        }
      ]
    },
    newzealand: {
      name: "New Zealand",
      flag: "🇳🇿",
      tagline: "Adventure Awaits",
      description: "Explore diverse landscapes from snow-capped mountains to pristine coastlines in this adventure lover's paradise.",
      mainImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Milford Sound",
          description: "Dramatic fjord landscape"
        },
        {
          image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hobbiton",
          description: "Lord of the Rings film set"
        },
        {
          image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Queenstown",
          description: "Adventure sports hub"
        },
        {
          image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Bay of Islands",
          description: "Sailing and dolphins"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Mount Cook",
          description: "Highest peak in NZ"
        },
        {
          image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Auckland",
          description: "City of sails"
        },
        {
          image: "https://images.unsplash.com/photo-1460500063983-994d4c27756c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Rotorua",
          description: "Geothermal wonderland"
        },
        {
          image: "https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Wellington",
          description: "Capital and culture"
        }
      ]
    },
    italy: {
      name: "Italy",
      flag: "🇮🇹",
      tagline: "Renaissance Beauty",
      description: "Immerse yourself in timeless art, rich history, world-class cuisine, and breathtaking Mediterranean landscapes.",
      mainImage: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Rome",
          description: "Eternal City"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Venice",
          description: "Floating city"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Amalfi Coast",
          description: "Mediterranean paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Florence",
          description: "Renaissance capital"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Tuscany",
          description: "Wine country hills"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Cinque Terre",
          description: "Coastal cliff villages"
        },
        {
          image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Milan",
          description: "Fashion and design"
        },
        {
          image: "https://images.unsplash.com/photo-1555992538-c3cd2c0df17c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Lake Como",
          description: "Alpine lake luxury"
        },
        {
          image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sicily",
          description: "Island of contrasts"
        }
      ]
    },
    iceland: {
      name: "Iceland",
      flag: "🇮🇸",
      tagline: "Fire & Ice",
      description: "Witness nature's raw power through geysers, glaciers, volcanoes, and otherworldly landscapes.",
      mainImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Blue Lagoon",
          description: "Geothermal spa"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Golden Circle",
          description: "Geysers and waterfalls"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Jökulsárlón",
          description: "Glacier lagoon"
        },
        {
          image: "https://images.unsplash.com/photo-1513416879801-db238d60e909?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Reykjavik",
          description: "Colorful Nordic capital"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Gullfoss",
          description: "Golden waterfall"
        },
        {
          image: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Westfjords",
          description: "Remote dramatic cliffs"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Vatnajökull",
          description: "Europe's largest glacier"
        }
      ]
    }
  };

  const destinationData = destinationsData[country];

  if (!destinationData) {
    return (
      <div className="page-content">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1 className="page-title">Destination Not Found</h1>
            <p className="page-subtitle">The destination you're looking for doesn't exist.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-content">
      <section className="page-hero" style={{ backgroundImage: `url(${destinationData.mainImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-content">
          <h1 className="page-title">{destinationData.name} {destinationData.flag}</h1>
          <p className="page-subtitle">{destinationData.tagline}</p>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem', opacity: '0.9' }}>{destinationData.description}</p>
        </div>
      </section>

      <section className="destination-details-section">
        <div className="features-container">
          <h2 className="features-title">Places to Visit in {destinationData.name}</h2>
          <p className="section-subtitle">Explore the most stunning attractions and landmarks</p>
          
          <div className="gallery-grid">
            {destinationData.places.map((place, index) => (
              <div key={index} className="gallery-item">
                <img src={place.image} alt={place.name} />
                <div className="gallery-item-info">
                  <h4>{place.name}</h4>
                  <p>{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DestinationDetail;