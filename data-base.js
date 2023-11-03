export const DATA_BASE_EVENTS_COLLECTION = [
    {
        id: 'event001',
        title: 'Programming for everyone',
        description: 'A great introduction to the field of programming. We tackle why programming is a basic' +
            'nowadays and how will it boost to career',
        location: 'Hohe Str. 49, 40213 Düsseldorf, Germany',
        date: '2024-02-01',
        image: 'https://a.cdn-hotels.com/gdcs/production61/d1121/6dfd3cfe-d31b-4514-b3af-aee8536223d1.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        isFeatured: false
    },
    {
        id: 'event002',
        title: 'Decoding Redux Toolkit',
        description: 'a deep dive into Redux, from its basics to the use of its best performing library, Redux Toolkit',
        location: 'Pl. de la Encarnación, 17, 41003 Sevilla, Spain',
        date: '2024-01-10',
        image: 'https://sevillaguias.es/wp-content/uploads/2020/02/sevilla-guias-espana-1024x576.jpg',
        isFeatured: false
    },
    {
        id: 'event003',
        title: 'AI for everyone',
        description: 'Prominent industry leaders will share their perspectives on AI and explain why it is essential for individuals from every field to understand and learn how to harness its benefits',
        location: '14 Gloucester St, Oxford OX1 2BN, United Kingdom',
        date: '2024-03-20',
        image: 'https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg',
        isFeatured: true
    },
]

export function getFeaturedEvents() {
    return  DATA_BASE_EVENTS_COLLECTION.filter(event => event.isFeatured)
}

export function getAllEvents() {
    return DATA_BASE_EVENTS_COLLECTION
}

export function getFilteredEvents(dateFiltered) {
    const { year, month } = dateFiltered

    return DATA_BASE_EVENTS_COLLECTION.filter(event => {
        const eventDate = new Date(event.date)
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    })
}

export function getEventById(id) {
    return DATA_BASE_EVENTS_COLLECTION.filter(event => event.id === id)
}
