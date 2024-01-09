import {DATA_BASE_EVENTS_COLLECTION} from "../data-base";

export async function getAllEvents() {
   const response = await fetch('https://betours-7f803-default-rtdb.europe-west1.firebasedatabase.app/events.json')
   const data = await response.json()
   const events = []
   for (const key in data){
       events.push({
           id: key,
           ...data[key]
       })
   }
   return events
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter(event => event.isFeatured)
}

export async function getEventById(id) {
    const allEvents = await getAllEvents()
    const filteredEvents = allEvents.filter(event => event.id === id);
    return filteredEvents.length > 0 ? filteredEvents[0] : null;
}
