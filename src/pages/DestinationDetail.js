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
        },
        {
          image: "https://images.unsplash.com/photo-1580745395652-7b1e36e6e908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Palm Jumeirah",
          description: "Man-made island paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Desert Safari",
          description: "Arabian desert adventure"
        },
        {
          image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sheikh Zayed Mosque",
          description: "Architectural masterpiece"
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Dubai Mall",
          description: "Shopping and entertainment"
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Al Ain Oasis",
          description: "UNESCO heritage site"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Fujairah Beach",
          description: "East coast paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ras Al Khaimah",
          description: "Mountain and beach combo"
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
        },
        {
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Batumi",
          description: "Black Sea resort"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Kakheti Wine Region",
          description: "Ancient wine culture"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Mtskheta",
          description: "Ancient capital"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Vardzia",
          description: "Cave monastery"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Gori",
          description: "Stalin's birthplace"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sighnaghi",
          description: "City of love"
        },
        {
          image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Uplistsikhe",
          description: "Ancient rock city"
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
        },
        {
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Yanar Dag",
          description: "Burning mountain"
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Lahij",
          description: "Copper craft village"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ganja",
          description: "Second largest city"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Quba",
          description: "Apple and carpet region"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Gabala",
          description: "Mountain resort"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Nakhchivan",
          description: "Ancient autonomous region"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ateshgah Temple",
          description: "Fire worshippers temple"
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
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Mount Batur",
          description: "Sunrise volcano trek"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Kuta Beach",
          description: "Surfing paradise"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Uluwatu Temple",
          description: "Clifftop temple"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Tegallalang Rice Terraces",
          description: "Scenic rice fields"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Nusa Penida",
          description: "Hidden island gem"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Besakih Temple",
          description: "Mother temple"
        },
        {
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Canggu",
          description: "Bohemian beach town"
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
        },
        {
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Salalah",
          description: "Dhofar region beauty"
        },
        {
          image: "https://images.unsplash.com/photo-1565097409498-07e8c3d45f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Jebel Shams",
          description: "Grand Canyon of Oman"
        },
        {
          image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Sur",
          description: "Dhow building town"
        },
        {
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Wadi Shab",
          description: "Natural swimming pools"
        },
        {
          image: "https://images.unsplash.com/photo-1568428942120-89151cfaad1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Bahla Fort",
          description: "UNESCO World Heritage"
        },
        {
          image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Ras al Jinz",
          description: "Turtle watching reserve"
        },
        {
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          name: "Misfat al Abriyeen",
          description: "Mountain village"
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