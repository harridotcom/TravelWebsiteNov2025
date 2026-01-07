import { useParams } from 'react-router-dom';
import { useState } from 'react';

function DestinationDetail() {
  const { country } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const destinationsData = {
    dubai: {
      name: "Dubai",
      flag: "🇦🇪",
      tagline: "City of Dreams",
      description: "Experience futuristic skyscrapers, luxury shopping, stunning architecture, and endless desert adventures in this modern marvel.",
      mainImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Burj Khalifa",
          description: "World's tallest building"
        },
        {
          image: "https://images.unsplash.com/photo-1502998732392-615e9b445fa4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Dubai Aquarium",
          description: "Underwater world adventure"
        },
        {
          image: "https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?q=80&w=1237&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Dubai Frame",
          description: "Golden picture frame landmark"
        },
        {
          image: "https://images.unsplash.com/photo-1667592441284-b590021411e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Museum of the Future",
          description: "Innovation and technology showcase"
        },
        {
          image: "https://images.unsplash.com/photo-1606036858743-c106b6ffbff6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyaiUyMGFsJTIwYXJhYnxlbnwwfHwwfHx8MA%3D%3D",
          name: "Burj Al Arab",
          description: "Iconic sail-shaped luxury hotel"
        },
        {
          image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1YmFpJTIwZGVzZXJ0JTIwc2FmYXJpfGVufDB8fDB8fHww",
          name: "Desert Safari",
          description: "Adventure in golden sand dunes"
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1738876553819-d4a0b6716ebb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXlhJTIwdW5pdmVyc2UlMjBkdWJhaXxlbnwwfHwwfHx8MA%3D%3D",
          name: "Aya Universe",
          description: "Immersive digital art experience"
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1661962769667-a159071a31cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWklMjBlbnRlcnRhaW5tZW50fGVufDB8fDB8fHww",
          name: "House of Hype",
          description: "Street art and culture hub"
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1694475175003-9b470d82de5e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2xvYmFsJTIwdmlsbGFnZSUyMGR1YmFpfGVufDB8fDB8fHww",
          name: "Global Village",
          description: "Cultural and shopping festival"
        },
        {
          image: "https://images.unsplash.com/photo-1588314941393-af1c493f345c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWklMjBtaXJhY2xlJTIwZ2FyZGVufGVufDB8fDB8fHww",
          name: "Miracle Garden",
          description: "World's largest flower garden"
        },
        {
          image: "https://images.unsplash.com/photo-1691399382216-61468ffb788c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWklMjBtYXJpbmElMjBjcnVpc2V8ZW58MHx8MHx8fDA%3D",
          name: "Dow Cruise (Marina/Creek)",
          description: "Traditional Arabian boat experience"
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1694475172763-24e0c87c90a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlJTIwcGFsbSUyMGR1YmFpJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D",
          name: "The View at Palm",
          description: "Panoramic views from Palm Jumeirah"
        },
        {
          image: "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXRsYW50aXMlMjB0aGUlMjBwYWxtfGVufDB8fDB8fHww",
          name: "Atlantis Aquaventure",
          description: "Luxury resort and waterpark"
        }
      ]
    },
    abudhabi: {
      name: "Abu Dhabi",
      flag: "🇦🇪",
      tagline: "Capital of Culture",
      description: "Discover the sophisticated capital of the UAE with stunning mosques, thrilling theme parks, and world-class attractions.",
      mainImage: "https://plus.unsplash.com/premium_photo-1661964095477-fe68b487f700?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhzZWFyY2h8MXx8YWJ1JTIwZGhhYml8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1567215378181-6ecf3590646f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hlaWtoJTIwemF5ZWQlMjBncmFuZCUyMG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
          name: "Sheikh Zayed Grand Mosque",
          description: "Stunning Islamic architecture masterpiece"
        },
        {
          image: "https://images.unsplash.com/photo-1628005924701-5c2e8e23dbe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFwcyUyMGhpbmR1JTIwbWFuZGlyJTIwYWJ1JTIwZGhhYml8ZW58MHx8MHx8fDA%3D",
          name: "Baps Hindu Temple",
          description: "Beautiful modern Hindu temple"
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1697730217428-fa63a4efa669?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Vhd29ybGQlMjBhYnUlMjBkaGFiaXxlbnwwfHwwfHx8MA%3D%3D",
          name: "SeaWorld Abu Dhabi",
          description: "Marine life theme park"
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eWFzJTIwaXNsYW5kfGVufDB8fDB8fHww",
          name: "Yas Island",
          description: "Entertainment and leisure destination"
        },
        {
          image: "https://images.unsplash.com/photo-1578152882785-df9744e359e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVycmFyaSUyMHdvcmxkJTIwYWJ1JTIwZGhhYml8ZW58MHx8MHx8fDA%3D",
          name: "Ferrari World",
          description: "High-speed thrills and Ferrari excitement"
        },
        {
          image: "https://images.unsplash.com/photo-1639586385864-a8b5d71684c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnV0dGVyZmx5JTIwZ2FyZGVuJTIwYWJ1JTIwZGhhYml8ZW58MHx8MHx8fDA%3D",
          name: "The Butterfly Gardens",
          description: "Tropical paradise with exotic butterflies"
        }
      ]
    },
    oman: {
      name: "Oman",
      flag: "🇴🇲",
      tagline: "Arabian Jewel",
      description: "Explore stunning deserts, pristine coastlines, ancient forts, and authentic Arabian culture in this hidden gem.",
      mainImage: "https://images.unsplash.com/photo-1621680696874-edd80ce57b72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T21hbnxlbnwwfHwwfHx8MA%3D%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Muscat",
          description: "Capital of culture"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Wahiba Sands",
          description: "Desert adventure"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Nizwa",
          description: "Ancient capital"
        }
      ]
    },
    saudiarabia: {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      tagline: "Kingdom of Wonders",
      description: "Experience ancient heritage, modern vision, stunning landscapes, and authentic Arabian hospitality.",
      mainImage: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Riyadh",
          description: "Modern capital"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "AlUla",
          description: "Archaeological wonder"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Edge of the World",
          description: "Dramatic cliffs"
        }
      ]
    },
    switzerland: {
      name: "Switzerland",
      flag: "🇨🇭",
      tagline: "Alpine Excellence",
      description: "Discover pristine mountain peaks, crystal-clear lakes, and charming villages nestled in breathtaking alpine landscapes.",
      mainImage: "https://images.unsplash.com/photo-1570161766218-f8488ebb8078?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
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
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Bernina Express",
          description: "Scenic railway journey"
        },
        {
          image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Château de Chillon",
          description: "Medieval castle on lake"
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
        },
        {
          image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Miyajima Island",
          description: "Floating torii gate"
        }
      ]
    },
    georgia: {
      name: "Georgia",
      flag: "🇬🇪",
      tagline: "Crossroads of Cultures",
      description: "Discover ancient wine traditions, stunning mountain landscapes, and warm hospitality at the crossroads of Europe and Asia.",
      mainImage: "https://images.unsplash.com/photo-1603350576276-24747f7bbf40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2VvcmdpYXxlbnwwfHwwfHx8MA%3D%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Tbilisi",
          description: "Historic capital"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Svaneti",
          description: "Mountain towers"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Kazbegi",
          description: "Caucasus peaks"
        }
      ]
    },
    azerbaijan: {
      name: "Azerbaijan",
      flag: "🇦🇿",
      tagline: "Land of Fire",
      description: "Explore ancient fire temples, modern architecture, and rich cultural heritage in the land of eternal flames.",
      mainImage: "https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhzZWFyY2h8Mnx8QXplcmJhaWphbnxlbnwwfHwwfHx8MA%3D%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Baku",
          description: "Flame Towers city"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Gobustan",
          description: "Ancient rock art"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sheki",
          description: "Silk Road heritage"
        }
      ]
    },
    srilanka: {
      name: "Sri Lanka",
      flag: "🇱🇰",
      tagline: "Pearl of the Indian Ocean",
      description: "Discover ancient temples, pristine beaches, lush tea plantations, and incredible wildlife in this tropical island paradise.",
      mainImage: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3JpJTIwTGFua2F8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sigiriya",
          description: "Ancient rock fortress"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Kandy",
          description: "Cultural capital"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ella",
          description: "Tea country paradise"
        }
      ]
    },
    bali: {
      name: "Bali, Indonesia",
      flag: "🇮🇩",
      tagline: "Island Paradise",
      description: "Discover tropical beaches, ancient temples, lush rice terraces, and spiritual experiences in this Indonesian paradise.",
      mainImage: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFsaSUyQyUyMEluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ubud",
          description: "Cultural heart"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Seminyak Beach",
          description: "Sunset paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Tanah Lot",
          description: "Sea temple"
        }
      ]
    },
    thailand: {
      name: "Thailand",
      flag: "🇹🇭",
      tagline: "Land of Smiles",
      description: "Discover vibrant temples, pristine beaches, delicious cuisine, and warm hospitality in Southeast Asia's jewel.",
      mainImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Bangkok",
          description: "Vibrant capital"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Phuket",
          description: "Island paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Chiang Mai",
          description: "Northern culture"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Krabi",
          description: "Limestone cliffs"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Koh Phi Phi",
          description: "Tropical paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ayutthaya",
          description: "Ancient capital"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Koh Samui",
          description: "Coconut island"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sukhothai",
          description: "Dawn of happiness"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hua Hin",
          description: "Royal beach resort"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Chiang Rai",
          description: "Golden Triangle"
        }
      ]
    },
    armenia: {
      name: "Armenia",
      flag: "🇦🇲",
      tagline: "Ancient Heritage",
      description: "Journey through the world's first Christian nation, with ancient monasteries, stunning landscapes, and rich traditions.",
      mainImage: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Yerevan",
          description: "Pink city"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Mount Ararat",
          description: "National symbol"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Geghard Monastery",
          description: "Rock-carved church"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Lake Sevan",
          description: "High altitude lake"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Tatev Monastery",
          description: "Medieval marvel"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Gyumri",
          description: "Cultural capital"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Dilijan",
          description: "Armenian Switzerland"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Khor Virap",
          description: "Monastery with Ararat view"
        },
        {
          image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Echmiadzin",
          description: "Spiritual center"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Noravank Monastery",
          description: "Red cliffs monastery"
        }
      ]
    },
    vietnam: {
      name: "Vietnam",
      flag: "🇻🇳",
      tagline: "Timeless Beauty",
      description: "Experience vibrant street life, stunning natural landscapes, delicious cuisine, and rich history from north to south.",
      mainImage: "https://images.unsplash.com/photo-1528127269322-539801943592?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhzZWFyY2h8Mnx8VmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ha Long Bay",
          description: "Limestone karsts"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ho Chi Minh City",
          description: "Vibrant metropolis"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hoi An",
          description: "Ancient trading port"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hanoi",
          description: "Historic capital"
        },
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sapa",
          description: "Terraced rice fields"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Phong Nha-Ke Bang",
          description: "Cave systems"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hue",
          description: "Imperial city"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Mekong Delta",
          description: "Floating markets"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Da Nang",
          description: "Coastal city"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ninh Binh",
          description: "Dry Ha Long Bay"
        }
      ]
    },
    china: {
      name: "China",
      flag: "🇨🇳",
      tagline: "Ancient Wonders",
      description: "Discover millennia of history, stunning landscapes, modern cities, and cultural treasures across this vast nation.",
      mainImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhzZWFyY2h8Mnx8Q2hpbmF8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Great Wall",
          description: "Ancient wonder"
        },
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Beijing",
          description: "Imperial capital"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Shanghai",
          description: "Modern metropolis"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Xi'an",
          description: "Terracotta Army"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Guilin",
          description: "Karst landscapes"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Zhangjiajie",
          description: "Avatar mountains"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Lhasa",
          description: "Tibetan spiritual center"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Chengdu",
          description: "Panda capital"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hangzhou",
          description: "West Lake beauty"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Suzhou",
          description: "Venice of the East"
        }
      ]
    },
    saudiarabia: {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      tagline: "Kingdom of Wonders",
      description: "Experience ancient heritage, modern vision, stunning landscapes, and authentic Arabian hospitality.",
      mainImage: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Riyadh",
          description: "Modern capital"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "AlUla",
          description: "Archaeological wonder"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Edge of the World",
          description: "Dramatic cliffs"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Jeddah",
          description: "Gateway to Mecca"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Diriyah",
          description: "Saudi birthplace"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Abha",
          description: "Mountain resort"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Taif",
          description: "Summer capital"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Farasan Islands",
          description: "Red Sea paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Najran",
          description: "Southern heritage"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "NEOM",
          description: "Futuristic megacity"
        }
      ]
    },
    france: {
      name: "France",
      flag: "🇫🇷",
      tagline: "Romance & Culture",
      description: "Experience world-renowned cuisine, art, fashion, and romantic landscapes from Paris to Provence.",
      mainImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhzZWFyY2h8Mnx8RnJhbmNlfGVufDB8fDB8fHww",
      places: [
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Paris",
          description: "City of Light"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "French Riviera",
          description: "Mediterranean glamour"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Provence",
          description: "Lavender fields"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Lyon",
          description: "Gastronomic capital"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Loire Valley",
          description: "Château country"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Mont Blanc",
          description: "Alpine majesty"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Normandy",
          description: "D-Day beaches"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Bordeaux",
          description: "Wine capital"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Alsace",
          description: "Fairytale villages"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Corsica",
          description: "Island of beauty"
        }
      ]
    },
    maldives: {
      name: "Maldives",
      flag: "🇲🇻",
      tagline: "Tropical Paradise",
      description: "Escape to pristine white beaches, crystal-clear waters, luxury resorts, and world-class diving experiences.",
      mainImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHhzZWFyY2h8Mnx8TWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Malé",
          description: "Capital atoll"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Baa Atoll",
          description: "UNESCO biosphere"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Overwater Villas",
          description: "Luxury accommodation"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ari Atoll",
          description: "Whale shark haven"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Manta Point",
          description: "Manta ray encounters"
        },
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "North Malé Atoll",
          description: "Resort paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Addu Atoll",
          description: "Southern beauty"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Banana Reef",
          description: "Diving paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hulhumalé",
          description: "Artificial island"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Vaadhoo Island",
          description: "Bioluminescent beach"
        }
      ]
    },
    egypt: {
      name: "Egypt",
      flag: "🇪🇬",
      tagline: "Ancient Mysteries",
      description: "Explore ancient pyramids, magnificent temples, the Nile River, and thousands of years of fascinating history.",
      mainImage: "https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWd5cHR8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Pyramids of Giza",
          description: "Ancient wonders"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Cairo",
          description: "City of pharaohs"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Luxor",
          description: "Valley of Kings"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Aswan",
          description: "Nubian culture"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Alexandria",
          description: "Mediterranean jewel"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Abu Simbel",
          description: "Ramses II temples"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sharm El Sheikh",
          description: "Red Sea diving"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hurghada",
          description: "Beach resort town"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Dahab",
          description: "Backpacker paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Siwa Oasis",
          description: "Desert sanctuary"
        }
      ]
    },
    southafrica: {
      name: "South Africa",
      flag: "🇿🇦",
      tagline: "Rainbow Nation",
      description: "Experience diverse wildlife, stunning landscapes, vibrant cultures, and world-class wines in the rainbow nation.",
      mainImage: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U291dGglMjBBZnJpY2F8ZW58MHx8MHx8fDA%3D",
      places: [
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Cape Town",
          description: "Mother City"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Kruger National Park",
          description: "Big Five safari"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Table Mountain",
          description: "Iconic landmark"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Johannesburg",
          description: "City of Gold"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Garden Route",
          description: "Coastal paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Stellenbosch",
          description: "Wine country"
        },
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Robben Island",
          description: "Nelson Mandela prison"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Drakensberg",
          description: "Dragon mountains"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Hermanus",
          description: "Whale watching"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sun City",
          description: "Entertainment resort"
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