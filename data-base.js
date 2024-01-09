import {getAllEvents} from "./helpers/api-util";

export const DATA_BASE_EVENTS_COLLECTION = [
    {
        "id": "tour001",
        "title": "Culinary Delights of Barcelona",
        "description": "Embark on a gastronomic adventure through the vibrant streets of Barcelona. Indulge in the rich flavors of Spanish cuisine as we explore traditional markets, savor tapas in historic taverns, and learn the art of paella cooking from local chefs. This tour is a feast for the senses, blending the city's history with its delectable food culture.",
        "location": "La Boqueria Market, Barcelona, Spain",
        "date": "2024-04-15",
        "image": "https://images.ctfassets.net/qr8kennq1pom/5Odp3sElFAGyWkzE2G5TR2/7491b42e521dac513e20e1de13e80ab0/Traditional_and_Unique_food_in_Spain.jpg?fm=jpg&fl=progressive&q=70",
        "isFeatured": false
    },
    {
        "id": "tour002",
        "title": "Mystical Trek through Machu Picchu",
        "description": "Embark on a once-in-a-lifetime trek through the ancient Inca trails leading to the breathtaking Machu Picchu. This adventure blends the awe-inspiring beauty of the Andes Mountains with the rich history of the Inca civilization. Join us for a mystical journey as we traverse lush landscapes, explore hidden ruins, and witness the sunrise over the iconic Machu Picchu.",
        "location": "Machu Picchu, Cusco Region, Peru",
        "date": "2024-06-10",
        "image": "https://media.npr.org/assets/img/2021/08/09/gettyimages-1229409136-db9b54a1546b7f503c7e812178f4cab5b707aca3-s1100-c50.jpg",
        "isFeatured": false
    },
    {
        "id": "tour003",
        "title": "Safari Adventure in Serengeti National Park",
        "description": "Experience the thrill of the wild on a safari expedition through the vast landscapes of Serengeti National Park. Witness the iconic Great Migration, spot the Big Five, and immerse yourself in the untouched beauty of the African savannah. This tour offers an unforgettable encounter with nature, combining adventure and wildlife conservation.",
        "location": "Serengeti National Park, Tanzania",
        "date": "2024-08-20",
        "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/shutterstock_90117172.jpg",
        "isFeatured": false
    },
    {
        "id": "tour004",
        "title": "Historical Wonders of Rome",
        "description": "Step back in time and explore the ancient wonders of Rome. This tour takes you on a journey through the Colosseum, Roman Forum, and the Pantheon, unveiling the secrets of the Roman Empire. Immerse yourself in the city's rich history, marvel at iconic architecture, and relive the glory of a bygone era on this cultural expedition through the heart of Italy.",
        "location": "Colosseum, Rome, Italy",
        "date": "2024-10-05",
        "image": "https://media.timeout.com/images/105211701/750/422/image.jpg",
        "isFeatured": false
    },
    {
        "id": "tour005",
        "title": "Island Paradise Getaway in Bali",
        "description": "Escape to the tropical paradise of Bali, where lush landscapes, pristine beaches, and vibrant culture await. This tour offers a rejuvenating retreat as we explore ancient temples, relax on picturesque beaches, and indulge in traditional Balinese cuisine. Immerse yourself in the tranquility of Bali, a perfect blend of nature, spirituality, and relaxation.",
        "location": "Ubud, Bali, Indonesia",
        "date": "2024-12-01",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRch-kvrphcqW2bhG6YQyZAiN8ctjgbve8bottYQYZJww&s",
        "isFeatured": true
    },
    {
        "id": "tor001",
        "title": "Historical Journey through Rome",
        "description": "Discover the rich history of Rome as we explore ancient ruins, iconic landmarks, and indulge in authentic Italian cuisine. This tour offers a captivating journey through time, blending the modern and ancient wonders of the Eternal City.",
        "location": "Rome, Italy",
        "date": "2024-04-15",
        "image": "https://thumbs.dreamstime.com/b/rome-italy-colosseum-coliseum-sunrise-144201572.jpg",
        "isFeatured": true
    },
    {
        "id": "tor003",
        "title": "Cultural Extravaganza in Kyoto",
        "description": "Immerse yourself in the enchanting culture of Kyoto, Japan. This tour takes you through historic temples, traditional tea ceremonies, and the beauty of cherry blossoms. Experience the elegance of Japan's ancient capital.",
        "location": "Kyoto, Japan",
        "date": "2024-08-10",
        "image": "https://media.istockphoto.com/id/1146262403/photo/woman-wearing-japanese-traditional-kimono-walking-at-historic-higashiyama-district-in-spring.jpg?s=612x612&w=0&k=20&c=0LOWlTmIxZBGblGZafxBWMnobeFW1_Yi0LdFZND2Lzg=",
        "isFeatured": true
    },
    {
        "id": "tour006",
        "title": "Scenic Road Trip along the Pacific Coast",
        "description": "Hit the open road for a breathtaking journey along the Pacific Coast. From stunning coastal cliffs to charming seaside towns, this road trip promises scenic beauty and unforgettable moments.",
        "location": "Pacific Coast Highway, USA",
        "date": "2024-03-03",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52SUt3iS5GBkRJXIUI2VTctjZWgrmuLEGrttyl-WtiA&s",
        "isFeatured": true
    },
    {
        "id": "tour008",
        "title": "Relaxing Retreat in the Maldives",
        "description": "Escape to the idyllic beaches of the Maldives for a luxurious and relaxing retreat. Indulge in overwater bungalows, pristine white sands, and crystal-clear turquoise waters in this tropical paradise.",
        "location": "Maldives",
        "date": "2024-05-12",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/28/b5/c1/a7/water-villa-aerial.jpg",
        "isFeatured": true
    },
]
