import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Destinations() {

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
    uae: {
      name: "United Arab Emirates",
      flag: "🇦🇪",
      tagline: "Modern Marvels",
      description: "Experience futuristic cities, luxury shopping, stunning architecture, and endless desert adventures.",
      mainImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      places: [
        {
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Dubai",
          description: "City of skyscrapers"
        },
        {
          image: "https://images.unsplash.com/photo-1529492964842-2b35e4e2f5c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Abu Dhabi",
          description: "Capital and culture"
        },
        {
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Burj Khalifa",
          description: "World's tallest building"
        }
      ]
    },
    georgia: {
      name: "Georgia",
      flag: "🇬🇪",
      tagline: "Crossroads of Cultures",
      description: "Discover ancient wine traditions, stunning mountain landscapes, and warm hospitality at the crossroads of Europe and Asia.",
      mainImage: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      mainImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        }
      ]
    },
    vietnam: {
      name: "Vietnam",
      flag: "🇻🇳",
      tagline: "Timeless Beauty",
      description: "Experience vibrant street life, stunning natural landscapes, delicious cuisine, and rich history from north to south.",
      mainImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        }
      ]
    },
    bali: {
      name: "Bali, Indonesia",
      flag: "🇮🇩",
      tagline: "Island Paradise",
      description: "Discover tropical beaches, ancient temples, lush rice terraces, and spiritual experiences in this Indonesian paradise.",
      mainImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    oman: {
      name: "Oman",
      flag: "🇴🇲",
      tagline: "Arabian Jewel",
      description: "Explore stunning deserts, pristine coastlines, ancient forts, and authentic Arabian culture in this hidden gem.",
      mainImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    china: {
      name: "China",
      flag: "🇨🇳",
      tagline: "Ancient Wonders",
      description: "Discover millennia of history, stunning landscapes, modern cities, and cultural treasures across this vast nation.",
      mainImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        }
      ]
    },
    saudiarabia: {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      tagline: "Kingdom of Wonders",
      description: "Experience ancient heritage, modern vision, stunning landscapes, and authentic Arabian hospitality.",
      mainImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    france: {
      name: "France",
      flag: "🇫🇷",
      tagline: "Romance & Culture",
      description: "Experience world-renowned cuisine, art, fashion, and romantic landscapes from Paris to Provence.",
      mainImage: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        }
      ]
    },
    thailand: {
      name: "Thailand",
      flag: "🇹🇭",
      tagline: "Land of Smiles",
      description: "Discover vibrant temples, pristine beaches, delicious cuisine, and warm hospitality in Southeast Asia's jewel.",
      mainImage: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        }
      ]
    },
    maldives: {
      name: "Maldives",
      flag: "🇲🇻",
      tagline: "Tropical Paradise",
      description: "Escape to pristine white beaches, crystal-clear waters, luxury resorts, and world-class diving experiences.",
      mainImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        }
      ]
    },
    egypt: {
      name: "Egypt",
      flag: "🇪🇬",
      tagline: "Ancient Mysteries",
      description: "Explore ancient pyramids, magnificent temples, the Nile River, and thousands of years of fascinating history.",
      mainImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        }
      ]
    },
    southafrica: {
      name: "South Africa",
      flag: "🇿🇦",
      tagline: "Rainbow Nation",
      description: "Experience diverse wildlife, stunning landscapes, vibrant cultures, and world-class wines in the rainbow nation.",
      mainImage: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        }
      ]
    },
    srilanka: {
      name: "Sri Lanka",
      flag: "🇱🇰",
      tagline: "Pearl of the Indian Ocean",
      description: "Discover ancient temples, pristine beaches, lush tea plantations, and incredible wildlife in this tropical island paradise.",
      mainImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Galle",
          description: "Colonial fort city"
        },
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Yala National Park",
          description: "Wildlife sanctuary"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Unawatuna Beach",
          description: "Golden sandy beaches"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Dambulla Cave Temple",
          description: "Ancient Buddhist caves"
        },
        {
          image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Nuwara Eliya",
          description: "Little England"
        }
      ]
    }
  };

  // Carousel state and functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  const dubaiImages = [
    {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "Dubai Skyline",
      description: "Modern marvels reaching for the sky"
    },
    {
      src: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "Burj Al Arab",
      description: "Iconic sail-shaped luxury"
    },
    {
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "Dubai Marina",
      description: "Waterfront living at its finest"
    },
    {
      src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "Palm Jumeirah",
      description: "Man-made wonder of the world"
    },
    {
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "Dubai Fountain",
      description: "Dancing waters and music"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dubaiImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dubaiImages.length) % dubaiImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const renderCountryCard = (countryKey, data) => {
    const previewPlaces = data.places.slice(0, 3);

    return (
      <div key={countryKey} className="country-card">
        <div className="country-header">
          <img src={data.mainImage} alt={data.name} className="country-main-image" />
          <div className="country-overlay">
            <h3 className="country-name">{data.name}</h3>
            <p className="country-tagline">{data.tagline}</p>
          </div>
        </div>
        <div className="country-places">
          <h4>Top Places to Visit</h4>
          <div className="places-preview">
            <div className="places-grid">
              {previewPlaces.map((place, index) => (
                <div key={index} className="place-item">
                  <img src={place.image} alt={place.name} />
                  <div className="place-info">
                    <h5>{place.name}</h5>
                    <p>{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="country-buttons">
              <Link 
                to={`/destinations/${countryKey}`} 
                className="view-details-btn"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="page-content">
      <section className="dubai-carousel-section">
        <div className="carousel-container">
          <div className="carousel-header">
            <h2>Discover Dubai</h2>
            <p>Experience the extraordinary</p>
          </div>
          <div className="image-carousel">
            <div className="carousel-track">
              {dubaiImages.map((image, index) => (
                <div 
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={image.src} alt={image.title} />
                  <div className="slide-content">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-nav">
              <button className="nav-btn prev-btn" onClick={prevSlide}>‹</button>
              <button className="nav-btn next-btn" onClick={nextSlide}>›</button>
            </div>
            <div className="carousel-dots">
              {dubaiImages.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="beautiful-countries">
        <div className="features-container">
          <h2 className="features-title">Most Beautiful Countries to Visit</h2>
          <p className="section-subtitle">Discover breathtaking destinations and their most stunning attractions</p>
          
          <div className="countries-grid">
            {Object.entries(destinationsData).map(([countryKey, data]) => 
              renderCountryCard(countryKey, data)
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinations;