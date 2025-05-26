
import { ItineraryData, Coordinates, AccommodationInfo } from '../types';

const ATHENS_COORDS: Coordinates = { lat: 37.9838, lng: 23.7275 };
const AEGINA_COORDS: Coordinates = { lat: 37.7465, lng: 23.4293 };
const AEGINA_AGIA_MARINA_COORDS: Coordinates = { lat: 37.7384, lng: 23.5318 };
const AEGINA_MONI_ISLAND_COORDS: Coordinates = { lat: 37.7000, lng: 23.3833 }; // Approx Moni
const POROS_COORDS: Coordinates = { lat: 37.5000, lng: 23.4500 };
const POROS_ASKELI_COORDS: Coordinates = { lat: 37.5042, lng: 23.4716 };
const POROS_LOVE_BAY_COORDS: Coordinates = { lat: 37.4830, lng: 23.4290 }; // Approx Love Bay
const POROS_KANALI_BEACH_COORDS: Coordinates = { lat: 37.5008, lng: 23.4603 }; // Approx Kanali Beach
const HYDRA_COORDS: Coordinates = { lat: 37.3500, lng: 23.4667 };
const NAFPLIO_COORDS: Coordinates = { lat: 37.5676, lng: 22.8000 }; // Aria is near Nafplio
const NAFPLIO_KARATHONA_COORDS: Coordinates = { lat: 37.5486, lng: 22.8222 };
const EPIDAURUS_COORDS: Coordinates = { lat: 37.5950, lng: 23.0783 };
const MYCENAE_COORDS: Coordinates = { lat: 37.7308, lng: 22.7563 };
const TOLO_BEACH_COORDS: Coordinates = { lat: 37.5200, lng: 22.8590 }; // Approx Tolo Beach
const CORINTH_CANAL_COORDS: Coordinates = { lat: 37.9250, lng: 22.9894 };
const ATHENS_AIRPORT_COORDS: Coordinates = { lat: 37.9364, lng: 23.9476 };

// Helper function to create more descriptive placeholder URLs
const createPlaceholderUrl = (text: string, size: string = "400x250") => {
  const encodedText = encodeURIComponent(text.replace(/\s+/g, '+'));
  return `https://via.placeholder.com/${size}.png?text=${encodedText}`;
};

const accommodations: AccommodationInfo[] = [
  {
    id: "acc-athens",
    name: "Hotel near Acropolis (e.g., AVA Hotel or similar)",
    locationAssociated: "Athens",
    type: "Hotel / Boutique Hotel",
    datesOfStay: "June 13 - June 15 (2 nights)",
    description: "Centrally located hotel offering easy access to Plaka, the Acropolis, and other major historical sites. Look for family rooms or interconnecting options if needed.",
    imageUrl: createPlaceholderUrl("Hotel near Acropolis", "400x250"),
    websiteUrl: "https://www.google.com/search?q=hotel+near+acropolis+athens+family",
    mapCoordinates: ATHENS_COORDS
  },
  {
    id: "acc-aegina",
    name: "Kalokenti Studios",
    locationAssociated: "Aegina Town",
    type: "Studios / Apartments",
    datesOfStay: "June 15 - June 18 (3 nights)",
    description: "Family-friendly studios typically offering kitchenettes and a local Greek island feel, often a short walk from the port and town amenities.",
    imageUrl: createPlaceholderUrl("Kalokenti Studios", "300x200"),
    websiteUrl: "https://www.google.com/search?q=Kalokenti+Studios+Aegina",
    mapCoordinates: AEGINA_COORDS
  },
  {
    id: "acc-poros",
    name: "La Casa – Historical Center of Poros",
    locationAssociated: "Poros Town",
    type: "Guesthouse / Boutique Stay",
    datesOfStay: "June 18 - June 23 (5 nights)",
    description: "Charming accommodation in the heart of Poros Town, providing an authentic experience. May involve stairs due to historical location.",
    imageUrl: createPlaceholderUrl("La Casa Poros", "300x200"),
    websiteUrl: "https://www.google.com/search?q=La+Casa+Historical+Center+Poros",
    mapCoordinates: POROS_COORDS
  },
  {
    id: "acc-nafplio",
    name: "The Architect (Ária) or similar Villa/Apartment",
    locationAssociated: "Ária (Nafplio area)",
    type: "Villa / Apartment Rental",
    datesOfStay: "June 23 - June 26 (3 nights)",
    description: "Spacious rental property ideal for families, located a short drive from Nafplio town. Offers more room and self-catering facilities.",
    imageUrl: createPlaceholderUrl("The Architect Aria", "400x250"),
    websiteUrl: "https://www.google.com/search?q=The+Architect+Aria+Nafplio",
    mapCoordinates: NAFPLIO_COORDS
  },
  {
    id: "acc-airport",
    name: "Sofitel Athens Airport or Periport Hotel",
    locationAssociated: "Athens Airport Area",
    type: "Airport Hotel",
    datesOfStay: "June 26 - June 27 (1 night)",
    description: "Convenient hotel for early departure. Sofitel is on-site, Periport and other options are nearby with shuttle services.",
    imageUrl: createPlaceholderUrl("Athens Airport Hotel", "300x200"),
    websiteUrl: "https://www.google.com/search?q=Sofitel+Athens+Airport+OR+Periport+Hotel+Athens",
    mapCoordinates: ATHENS_AIRPORT_COORDS
  }
];


export const itineraryData: ItineraryData = {
  tripTitle: "Grecian Odyssey",
  tripSubtitle: "13 June – 27 June 2025 • A Family Adventure",
  accommodations, 
  detailedDays: [
    {
      day: 1,
      id: "day-1",
      date: "2025-06-13",
      displayDateFull: "Day 1 – Friday 13 June • Arrival in Athens",
      displayDateShort: "13 Jun (Fri)",
      location: "Athens (near Acropolis)",
      overnight: "Athens (near Acropolis)",
      mapCoordinates: ATHENS_COORDS,
      quickSummary: "Arrival, Plaka",
      activities: [
        { time: "Morning / Arrival", title: "Arrival & Transfer", description: "Taxi (≈€40 fixed) or Metro Line 3 from airport to Syntagma then short walk/taxi to hotel near Acropolis." },
        { time: "Afternoon", title: "Plaka Stroll & Ice Cream", description: "Gentle stroll through Plaka lanes; ice cream at Le Greche." },
        { time: "Evening", title: "Optional Sunset View", description: "Short walk to Areopagus Hill for sunset Acropolis view (paved ramp available for seniors)." }
      ],
      mealSuggestions: [
        { type: "Lunch", name: "Kostas Souvlaki (Agias Irinis Sq.)", cost: "€3-5 per wrap" },
        { type: "Ice Cream", name: "Le Greche", description: "During Plaka stroll."},
        { type: "Dinner", name: "To Kafeneio (Epicharmou 18)", description: "Traditional meze, shaded courtyard." }
      ],
      historicalFact: "Athens is one of the world's oldest cities, with its recorded history spanning over 3,400 years. It is the birthplace of democracy, Western philosophy, and the Olympic Games.",
      mythologicalStory: "Athens is named after Athena, the goddess of wisdom and warfare. Legend says she won patronage of the city in a contest against Poseidon by gifting the Athenians the first olive tree, a symbol of peace and prosperity."
    },
    {
      day: 2,
      id: "day-2",
      date: "2025-06-14",
      displayDateFull: "Day 2 – Saturday 14 June • Classical Athens",
      displayDateShort: "14 Jun (Sat)",
      location: "Athens",
      overnight: "Athens",
      mapCoordinates: ATHENS_COORDS,
      quickSummary: "Acropolis, Agora",
      activities: [
        { time: "08:00", title: "Acropolis & Parthenon", notes: "Pre-book 08:00 slot; lift available for seniors." },
        { time: "10:30", title: "Acropolis Museum Café break", notes: "Panoramic terrace, coffee €4." },
        { time: "11:30", title: "Ancient Agora & Hephaisteion", notes: "10 min walk, shaded trees." },
        { time: "15:00", title: "National Garden & Zappeion", notes: "Easy paths, playground for kids." },
        { time: "17:00", title: "Syntagma – Changing of the Guard", notes: "Every hour on the hour." },
        { time: "19:00", title: "Lycabettus Hill", notes: "Funicular (€10 rtn) – sunset views." }
      ],
      mealSuggestions: [
        { type: "Coffee Break", name: "Acropolis Museum Café", cost: "€4", description: "After Acropolis visit." },
        { type: "Lunch", name: "Ta Karamanlidika Tou Fani", cost: "€12-18 pp", description: "Shared cold cuts, salads." },
        { type: "Dinner", name: "Tavern Klimataria", cost: "€15-18", description: "Live folk music, set menus." }
      ],
      historicalFact: "The Parthenon, dedicated to Athena, was built in the 5th century BC during the Golden Age of Athens. It is considered an enduring symbol of Ancient Greece and Athenian democracy.",
      mythologicalStory: "The Ancient Agora was not only a marketplace but also the center of political and social life. It's said that Socrates often wandered here, engaging citizens in philosophical discussions."
    },
    {
      day: 3,
      id: "day-3",
      date: "2025-06-15",
      displayDateFull: "Day 3 – Sunday 15 June • Ferry to Aegina",
      displayDateShort: "15 Jun (Sun)",
      location: "Aegina Town",
      overnight: "Aegina Town (3 nights)",
      mapCoordinates: AEGINA_COORDS,
      quickSummary: "Ferry, Kolona site",
      activities: [
        { time: "Morning", title: "Transfer & Ferry Piraeus → Aegina", description: "Metro to Piraeus (≈40 min) or pre-book taxi (€25). Catch 10:30 Saronic Ferry; enjoy deck views. Check in Kalokenti Studios (5 min walk from port)." },
        { time: "Afternoon", title: "Kolona Archaeological Site & Beach", description: "Walk to site (free entry, shallow water for paddling). Explore pistachio market near port." }
      ],
      mealSuggestions: [
        { type: "Dinner", name: "Skotadis Taverna (harborfront)", description: "Fresh fish by the kilo or shared meze; kids’ pasta €6-7." }
      ],
      transportDetails: [
        { type: "Ferry", company: "Saronic Ferries", departureTimes: "08:00, 10:30, 12:30*", duration: "1h 15m", cost: "€12 adult / €6 child", notes: "Large conventional ferry, open deck. *June schedules; confirm at ferries.gr or openseas.gr." },
        { type: "Ferry", company: "Blue Star Ferries", departureTimes: "09:00, 11:00*", duration: "1h 10m", cost: "€13 adult / €7 child", notes: "Similar. *Confirm schedules." },
        { type: "Ferry", company: "Anes Flying Dolphin", departureTimes: "09:30, 13:30*", duration: "40m", cost: "€18 adult / €9 child", notes: "Hydrofoil, no outdoor deck. *Confirm schedules." }
      ],
      historicalFact: "Aegina was a major maritime power in ancient Greece and a rival to Athens. It was one of the first Greek city-states to mint its own coins, featuring a sea turtle.",
      mythologicalStory: "According to myth, Aegina was a nymph, daughter of the river god Asopos. Zeus, in the form of an eagle, abducted her and brought her to the island, which was then named after her. Their son, Aeacus, became a king known for his piety."
    },
    {
      day: 4,
      id: "day-4",
      date: "2025-06-16",
      displayDateFull: "Day 4 – Monday 16 June • Aegina Highlights",
      displayDateShort: "16 Jun (Mon)",
      location: "Aegina Island",
      overnight: "Aegina Town",
      mapCoordinates: AEGINA_AGIA_MARINA_COORDS, 
      quickSummary: "Aphaia, Ag. Marina",
      activities: [
        { time: "09:00", title: "Temple of Aphaia", transport: "Public Bus Aegina→Agia Marina (stop “Aphaia”, €2) or taxi (€15).", cost: "€6 adult / €3 child entrance" },
        { time: "11:30", title: "Agia Marina Beach", transport: "Same bus continues from Aphaia.", notes: "Shallow sandy bay, lounger set €10." },
        { time: "15:00", title: "Monastery of St Nektarios", transport: "Bus back toward Aegina Town, stop at monastery.", cost: "Free." },
        { time: "18:30", title: "Perdika fishing village", transport: "Taxi or bus.", notes: "Sunset promenade." }
      ],
      mealSuggestions: [
        { type: "Lunch", name: "Akrogiali (Agia Marina beachfront)", description: "Grilled sardines €9, Greek salad €6." },
        { type: "Dinner", name: "Remetzo (Perdika)", description: "Seafood risotto €14. Bus/taxi back to Aegina Town (~15 min)." }
      ],
      historicalFact: "The Temple of Aphaia is an remarkably well-preserved Doric temple, forming one point of the 'Sacred Triangle' with the Parthenon in Athens and the Temple of Poseidon at Sounion.",
      mythologicalStory: "Aphaia was a local goddess, possibly associated with Britomartis from Crete, a nymph connected to hunting and fishing. The temple's pediments depicted scenes from the Trojan War with Aeginetan heroes."
    },
    {
      day: 5,
      id: "day-5",
      date: "2025-06-17",
      displayDateFull: "Day 5 – Tuesday 17 June • Moni Island Nature Day",
      displayDateShort: "17 Jun (Tue)",
      location: "Aegina / Moni Island",
      overnight: "Aegina Town",
      mapCoordinates: AEGINA_MONI_ISLAND_COORDS,
      quickSummary: "Moni Island boat",
      activities: [
        { time: "Morning", title: "Moni Island Excursion", transport: "Perdika → Moni Island water taxi every 30 min (10 min ride, €5 return).", description: "Bring snorkels & picnic (buy pastries + fruit in Aegina Town). Wild peacocks & deer, pine-shaded beach, no cars." },
        { time: "Afternoon", title: "Return & Relax", description: "Return by 16:00." }
      ],
      mealSuggestions: [
        { type: "Snack", name: "Picnic on Moni Island" },
        { type: "Ice Cream", name: "Aiakeion café (Aegina Town)", description: "Gelato after returning."},
        { type: "Dinner", name: "Ouzeri to Dromaki (Aegina Town)", description: "Meze platters €10-12." }
      ],
      historicalFact: "Moni Island is uninhabited by humans but is a sanctuary for wildlife, including deer and peacocks, introduced to the island. It was once owned by the Greek Orthodox Church.",
      mythologicalStory: "While not rich in specific ancient myths, Moni's natural beauty and tranquility evoke a sense of timelessness, reminiscent of idyllic islands described in Greek poetry where nymphs and nature spirits might dwell."
    },
     {
      day: 6,
      id: "day-6",
      date: "2025-06-18",
      displayDateFull: "Day 6 – Wednesday 18 June • Ferry to Poros",
      displayDateShort: "18 Jun (Wed)",
      location: "Poros Town",
      overnight: "Poros Town (5 nights)",
      mapCoordinates: POROS_COORDS,
      quickSummary: "Ferry, Clock tower",
      activities: [
        { time: "Morning", title: "Ferry Aegina → Poros", description: "Check schedules. Walk 5 min to La Casa – Historical Center of Poros on arrival." },
        { time: "Late Afternoon", title: "Poros Clock Tower Walk", description: "Gentle zig-zag path; benches available for rests." }
      ],
      mealSuggestions: [
        { type: "Dinner", name: "Apagio Taverna", description: "Harbor view, veggie moussaka €10." }
      ],
      transportDetails: [
        { type: "Ferry", company: "Saronic Ferries", departureTimes: "11:30*", duration: "1h 15m", cost: "€13 adult", notes: "*Confirm schedules." },
        { type: "Ferry", company: "Anes", departureTimes: "13:45*", duration: "1h 30m", cost: "€12 adult", notes: "*Confirm schedules." }
      ],
      historicalFact: "Poros's landmark Clock Tower was built in 1927. The island played a role in the Greek War of Independence in the 1820s, hosting the first naval base of independent Greece.",
      mythologicalStory: "Poros is anciently known as Kalaureia and was home to an important sanctuary of Poseidon. It was here that Demosthenes, the famous Athenian orator, sought asylum and ultimately took his own life in 322 BC to avoid capture by his enemies."
    },
    {
      day: 7,
      id: "day-7",
      date: "2025-06-19",
      displayDateFull: "Day 7 – Thursday 19 June • Askeli Beach & Monastery",
      displayDateShort: "19 Jun (Thu)",
      location: "Poros (Askeli & Monastery area)",
      overnight: "Poros Town",
      mapCoordinates: POROS_ASKELI_COORDS,
      quickSummary: "Askeli, Monastery",
      activities: [
        { time: "Morning", title: "Askeli Beach", transport: "Mini bus Poros Town→Askeli (every 30 min, €1.80).", description: "Water sports (pedalo €15/h), playground, cafés." },
        { time: "Afternoon", title: "Monastery of Zoodochos Pigi", transport: "Bus stop “Moni” + 5 min walk.", notes: "Visit the historic monastery." }
      ],
      mealSuggestions: [
        { type: "Lunch", name: "Panorama (Askeli)", description: "Family platters €25 for 4." },
        { type: "Dinner", name: "Poseidon (Poros Town)", description: "Grilled meats, sea breeze." }
      ],
      historicalFact: "The Monastery of Zoodochos Pigi (Life-Giving Spring) dates back to the 18th century. It's known for its healing spring and played a supportive role during the Greek Revolution.",
      mythologicalStory: "Springs were often considered sacred in ancient Greece, believed to be watched over by nymphs (Naiads). While this monastery is Christian, the reverence for life-giving water sources has deep roots in Greek culture."
    },
    {
      day: 8,
      id: "day-8",
      date: "2025-06-20",
      displayDateFull: "Day 8 – Friday 20 June • Day Trip to Hydra",
      displayDateShort: "20 Jun (Fri)",
      location: "Hydra (Day trip from Poros)",
      overnight: "Poros Town",
      mapCoordinates: HYDRA_COORDS,
      quickSummary: "Hydra day trip",
      activities: [
        { time: "All Day", title: "Hydra Excursion", transport: "Poros → Hydra passenger ferry (Hellenic Seaways or Alpha Lines). Dep. 09:15, return 17:30 (approx.). 30-40 min each way. €16 adult / €8 child return.", description: "No cars on Hydra: easy harbor walk, donkey photo ops. Swim off Spilia or Vlychos (water taxi €4)." }
      ],
      mealSuggestions: [
        { type: "Lunch", name: "Psaropoula (Hydra)", description: "Fried calamari €9." },
        { type: "Dinner", name: "Garden Taverna (Poros)", description: "Courtyard dining upon return." }
      ],
      historicalFact: "Hydra was a formidable naval power during the late 18th and early 19th centuries. Its wealthy ship-owning families contributed significantly to the Greek War of Independence. The island's architecture reflects this prosperous period.",
      mythologicalStory: "The name 'Hydra' relates to water. While not the Lernaean Hydra of Heracles's labors, the island's name points to its ancient reliance on springs, as it has few natural water sources."
    },
    {
      day: 9,
      id: "day-9",
      date: "2025-06-21",
      displayDateFull: "Day 9 – Saturday 21 June • Russian & Love Bays",
      displayDateShort: "21 Jun (Sat)",
      location: "Poros (Bays)",
      overnight: "Poros Town",
      mapCoordinates: POROS_LOVE_BAY_COORDS,
      quickSummary: "Russian & Love Bays",
      activities: [
        { time: "Daytime", title: "Explore Russian Bay & Love Bay", transport: "Water taxi from Poros Town (10 min, €3) or rent small boat (~€50/day + fuel).", description: "Russian Bay: crystal water, shaded pines, ruins of 19th c. depot. Short hop to Love Bay (snorkel paradise). Bring picnic." }
      ],
      mealSuggestions: [
        { type: "Snack", name: "Picnic lunch at the bays", description: "Bakery pies, fruit." },
        { type: "Dinner", name: "Gia Mas (Poros Town)", description: "Live bouzouki on Saturdays." }
      ],
      historicalFact: "Russian Bay (Ormos Rossikou Navstathmou) on Poros served as a Russian naval station from 1834 to the early 20th century, a legacy of Russo-Greek cooperation. Ruins of the old naval buildings can still be seen.",
      mythologicalStory: "Love Bay (Limanaki tis Agapis) is so named for its romantic, secluded atmosphere. In Greek mythology, Eros (Cupid) was the god of love, and beautiful, tranquil spots like this were often imagined as his favored haunts."
    },
    {
      day: 10,
      id: "day-10",
      date: "2025-06-22",
      displayDateFull: "Day 10 – Sunday 22 June • Viewpoints & Village Life",
      displayDateShort: "22 Jun (Sun)",
      location: "Poros",
      overnight: "Poros Town",
      mapCoordinates: POROS_COORDS,
      quickSummary: "Hike, cooking class",
      activities: [
        { time: "08:00", title: "Prophet Elias Chapel Hike", description: "30 min gradual uphill path; carry water; sunrise views over Saronic Gulf.", notes: "Panoramic views." },
        { time: "11:30", title: "Kanali Beach", notes: "Shallow, café bar, lounger set €8." },
        { time: "15:00", title: "Family Cooking Class (Poros Cooking Project)", cost: "€25 adult / kids free", description: "2 hr hands-on class; simple dishes like gemista." }
      ],
      mealSuggestions: [
        { type: "Breakfast", name: "Saga Café (harbor)", cost: "Pancakes €6, fresh juice €3", description: "Suggested around 10:00"},
        { type: "Dinner", name: "Oasis Taverna", cost: "Stuffed tomatoes €8, house wine €5 ½ litre", description: "Suggested around 19:30" }
      ],
      historicalFact: "Many small chapels dedicated to Prophet Elias (Profitis Ilias) are found on hilltops throughout Greece. This reflects a tradition of seeking high places for worship, pre-dating Christianity with ancient hilltop sanctuaries.",
      mythologicalStory: "Cooking and sharing food (symposiums, feasts) were central to ancient Greek social life. Learning to cook traditional dishes connects you to a long heritage of hospitality (xenia) and culinary arts that have been passed down through generations."
    },
    {
      day: 11,
      id: "day-11",
      date: "2025-06-23",
      displayDateFull: "Day 11 – Monday 23 June • Transfer to Nafplio (Ária)",
      displayDateShort: "23 Jun (Mon)",
      location: "Ária (Nafplio area)",
      overnight: "Ária (Nafplio area)",
      mapCoordinates: NAFPLIO_COORDS,
      quickSummary: "Epidaurus, Nafplio",
      activities: [
        { time: "Morning", title: "Transfer Poros → Galatas & Car Pickup", transport: "Poros → Galatas: 5 min car ferry every 30 min (€1 pp + €5 vehicle if needed). Collect Rental Car (Galatas Pier, pre-book 7-seat automatic Avance/Budget ≈ €70-80/day incl. CDW)." },
        { time: "En Route", title: "Ancient Theatre of Epidaurus", description: "Drive to Nafplio via Epidaurus (total 1h 45m driving). World-class acoustics.", cost: "€12 adult / €6 child; shaded seating for seniors." },
        { time: "Afternoon", title: "Arrive & Settle", description: "Arrive The Architect property (Ária, 5 min from Nafplio town)." },
        { time: "Evening", title: "Nafplio Old Town Exploration", description: "Stroll and gelato at Antica Gelateria di Roma." }
      ],
      mealSuggestions: [
        { type: "Ice Cream", name: "Antica Gelateria di Roma (Nafplio)"},
        { type: "Dinner", name: "Vasilis Taverna (Nafplio)", description: "Slow-cooked lamb €14." }
      ],
      historicalFact: "The Theatre of Epidaurus, built in the 4th century BC, is renowned for its exceptional acoustics, allowing unamplified spoken word from the stage to be heard perfectly by all 14,000 spectators. It still hosts performances today.",
      mythologicalStory: "Epidaurus was a major healing center in antiquity, dedicated to Asclepius, the god of medicine. Patients would undergo 'incubation' (enkoimesis), sleeping in the sanctuary hoping for Asclepius to visit them in dreams and reveal cures."
    },
    {
      day: 12,
      id: "day-12",
      date: "2025-06-24",
      displayDateFull: "Day 12 – Tuesday 24 June • Nafplio Sights & Beach",
      displayDateShort: "24 Jun (Tue)",
      location: "Nafplio & Karathona Beach",
      overnight: "Ária / Nafplio",
      mapCoordinates: NAFPLIO_COORDS, 
      quickSummary: "Palamidi, Karathona",
      activities: [
        { time: "09:00", title: "Palamidi Fortress", cost: "€8 adult / €4 child", notes: "Drive up or climb 999 steps; views over Argolic Gulf." },
        { time: "11:30", title: "Old Town Walking Tour", description: "Syntagma Sq., Komboloi Museum (free)." },
        { time: "14:30", title: "Karathona Beach", transport: "10 min drive.", notes: "Free parking; pedalos €10/h." },
        { time: "19:00", title: "Optional Wine Tasting", description: "Domaine Skouras near Nemea (30 min drive), €15 pp (seniors can relax at café)." }
      ],
      mealSuggestions: [
        { type: "Lunch", name: "Pidalio (Nafplio)", description: "Seafood meze platter €18 (feeds 2-3)." },
        { type: "Dinner", name: "Ta Fanaria (Nafplio)", description: "Grilled chicken & chips €9." }
      ],
      historicalFact: "Nafplio was the first capital of the newly independent Greek state from 1823 to 1834. The Palamidi Fortress, a Venetian construction, offers panoramic views and has a rich military history.",
      mythologicalStory: "Legend attributes the founding of Nafplio to Nauplius, son of Poseidon and Amymone. Palamedes, a hero of the Trojan War famed for his wisdom and inventions (like dice and some letters of the alphabet), was said to be his descendant."
    },
    {
      day: 13,
      id: "day-13",
      date: "2025-06-25",
      displayDateFull: "Day 13 – Wednesday 25 June • Mycenae & Tolo",
      displayDateShort: "25 Jun (Wed)",
      location: "Mycenae / Tolo / Nafplio",
      overnight: "Ária / Nafplio",
      mapCoordinates: MYCENAE_COORDS,
      quickSummary: "Mycenae, Tolo, Bourtzi",
      activities: [
        { time: "Morning", title: "Mycenae Archaeological Site & Museum", transport: "30 min drive from Nafplio.", cost: "€12 adult / €6 child", description: "Lion Gate, Treasury of Atreus. Shaded benches near museum for breaks." },
        { time: "Afternoon", title: "Swim at Tolo Beach", description: "Long, shallow, pedal boats for kids." },
        { time: "Evening", title: "Bourtzi Fortress Boat Trip", transport: "Return to Nafplio; 10 min boat ride.", cost: "€5 return." }
      ],
      mealSuggestions: [
        { type: "Lunch", name: "Maria’s Taverna (Tolo)", description: "Fried zucchini €6, chicken souvlaki €10." },
        { type: "Dinner", name: "Pidalio (Nafplio, if loved) or Kastro Karima for variety." }
      ],
      historicalFact: "Mycenae was a major center of Greek civilization in the Bronze Age (c. 1600-1100 BC), giving its name to the Mycenaean period. The citadel's massive 'Cyclopean' walls were fabled to have been built by giants.",
      mythologicalStory: "Mycenae is the legendary home of King Agamemnon, who led the Greeks in the Trojan War. The site is steeped in tales from Greek tragedy, including the stories of Clytemnestra, Orestes, and Electra."
    },
    {
      day: 14,
      id: "day-14",
      date: "2025-06-26",
      displayDateFull: "Day 14 – Thursday 26 June • Return to Athens Airport",
      displayDateShort: "26 Jun (Thu)",
      location: "Athens Airport area",
      overnight: "Athens Airport area",
      mapCoordinates: CORINTH_CANAL_COORDS, 
      quickSummary: "Corinth Canal, Airport",
      activities: [
        { time: "Morning", title: "Leisurely Breakfast & Checkout", description: "Checkout by 10:00." },
        { time: "Journey", title: "Drive to Athens Airport", transport: "170 km, ~2h via A7 motorway. Toll costs: ≈ €10 total.", description: "Stop at Corinth Canal (rest area viewpoint, free, 15 min)." },
        { time: "Afternoon", title: "Fuel & Car Drop Off", description: "At airport rental depot." },
        { time: "Evening", title: "Check into Airport Hotel", description: "Sofitel if desired, or nearby Periport Hotel (budget shuttle)." }
      ],
      mealSuggestions: [
        { type: "Dinner", name: "Karavi Restaurant (inside Sofitel)", cost: "Set menu €20", description: "Alternatively, walk to Moustaki taverna (Spata village, €15-18 pp)." }
      ],
      historicalFact: "The Corinth Canal, completed in 1893, connects the Gulf of Corinth with the Saronic Gulf, effectively making the Peloponnese an island. The idea for such a canal dates back to antiquity.",
      mythologicalStory: "Periander, the tyrant of Corinth in the 7th century BC, is credited with the first serious attempt to build a canal. When that failed, he built the Diolkos, a paved trackway for dragging ships overland, remnants of which can still be seen."
    },
    {
      day: 15,
      id: "day-15",
      date: "2025-06-27",
      displayDateFull: "Day 15 – Friday 27 June • Departure",
      displayDateShort: "27 Jun (Fri)",
      location: "Athens Airport",
      overnight: "—",
      mapCoordinates: ATHENS_AIRPORT_COORDS,
      quickSummary: "Departure",
      activities: [
        { time: "Morning/Afternoon", title: "Departure", description: "Check in 3h before long-haul flight to Australia. Duty-free pistachios & olive oil gifts!" }
      ],
      mealSuggestions: [],
      historicalFact: "Athens International Airport 'Eleftherios Venizelos' opened in 2001, replacing the older Ellinikon International Airport. It's named after a prominent Greek statesman.",
      mythologicalStory: "While airports are modern, the idea of flight has ancient roots in Greek myth, most famously with Icarus and Daedalus. Icarus, ignoring his father's warnings, flew too close to the sun, melting his wax wings."
    }
  ],
  transportBudgetTips: [
    { segment: "Airport→Athens center", mode: "Metro Line 3", cost: "€9", notes: "40 min, lift access." },
    { segment: "Athens local", mode: "Metro/Bus", cost: "€1.20 single / €4.10 day pass", notes: "Kids <6 free." },
    { segment: "Piraeus→Aegina", mode: "Ferry", cost: "€12-18", notes: "Book online or at port." },
    { segment: "Aegina buses", mode: "Public Bus", cost: "€2 flat", notes: "Buy on board." },
    { segment: "Aegina→Poros", mode: "Ferry", cost: "€12-13", notes: "Direct Saronic line." },
    { segment: "Poros local", mode: "Mini bus", cost: "€1.80", notes: "Runs Askeli–Monastery." },
    { segment: "Poros→Hydra rtn", mode: "Fast ferry", cost: "€16", notes: "Book a day before." },
    { segment: "Poros→Galatas", mode: "Car ferry", cost: "€1 pp", notes: "5 min." },
    { segment: "Rental car (3 days)", mode: "7 seat auto", cost: "≈€220 total", notes: "Includes CDW, unlimited km." },
    { segment: "Fuel & Tolls (Nafplio loop + airport)", mode: "Car", cost: "≈€60 fuel + €10 tolls", notes: "Estimated." }
  ],
  beaches: [
    { islandRegion: "Aegina", name: "Agia Marina", whyGo: "Shallow, sandy, family friendly", facilities: "Loungers, cafés", coordinates: AEGINA_AGIA_MARINA_COORDS, imageUrl: createPlaceholderUrl("Agia Marina Beach", "350x200") },
    { islandRegion: "Aegina", name: "Marathonas", whyGo: "Calm water, tavernas at sand’s edge", facilities: "Free shade trees", coordinates: { lat: 37.7130, lng: 23.4330 }, imageUrl: createPlaceholderUrl("Marathonas Beach", "350x200") }, 
    { islandRegion: "Aegina", name: "Moni Island", whyGo: "Turquoise, wild peacocks", facilities: "No shops – bring picnic", coordinates: AEGINA_MONI_ISLAND_COORDS, imageUrl: createPlaceholderUrl("Moni Island Beach", "350x200") },
    { islandRegion: "Poros", name: "Askeli", whyGo: "Long sand/pebble, water sports", facilities: "Showers, cafés", coordinates: POROS_ASKELI_COORDS, imageUrl: createPlaceholderUrl("Askeli Beach Poros", "350x200") },
    { islandRegion: "Poros", name: "Love Bay (Limanaki tis Agapis)", whyGo: "Pine framed cove, emerald water", facilities: "Limited loungers, small cantina", coordinates: POROS_LOVE_BAY_COORDS, imageUrl: createPlaceholderUrl("Love Bay Poros", "350x200") },
    { islandRegion: "Poros", name: "Russian Bay", whyGo: "Historic backdrop, clear water", facilities: "Cantina hut (seasonal)", coordinates: { lat: 37.4800, lng: 23.4250 }, imageUrl: createPlaceholderUrl("Russian Bay Poros", "350x200") }, 
    { islandRegion: "Poros", name: "Kanali Beach", whyGo: "Shallow, close to town, café bar", facilities: "Loungers, café", coordinates: POROS_KANALI_BEACH_COORDS, imageUrl: createPlaceholderUrl("Kanali Beach Poros", "350x200") },
    { islandRegion: "Nafplio area", name: "Karathona", whyGo: "2 km arc, shallow, organized", facilities: "Sunbeds €8, tavernas, free parking", coordinates: NAFPLIO_KARATHONA_COORDS, imageUrl: createPlaceholderUrl("Karathona Beach Nafplio", "350x200") },
    { islandRegion: "Nafplio area", name: "Tolo", whyGo: "Fine sand, pedalos, very shallow", facilities: "Full services, water sports", coordinates: TOLO_BEACH_COORDS, imageUrl: createPlaceholderUrl("Tolo Beach", "350x200") },
    { islandRegion: "Nafplio area", name: "Arvanitia", whyGo: "Pebble beach, views of Palamidi, close to town", facilities: "Snack kiosk, showers", coordinates: { lat: 37.5630, lng: 22.8045 }, imageUrl: createPlaceholderUrl("Arvanitia Beach Nafplio", "350x200") } 
  ],
  familyFriendlyDayTrips: [
    { base: "Athens", excursion: "Stavros Niarchos Foundation Cultural Center Park", travel: "Tram or Bus", approxCost: "Free entry", whyItFits: "Expansive gardens, playgrounds, water jets, library, free evening concerts/events often." },
    { base: "Aegina", excursion: "Pistachio Farm Visit", travel: "Taxi (e.g., to a farm near Pachia Rachi) ≈€10-15", approxCost: "Free tasting (check with farm)", whyItFits: "Learn how Aegina’s famous PDO nut is grown and harvested." },
    { base: "Poros", excursion: "Lemon Forest (Lemonodasos) in Galatas", travel: "Water taxi Poros→Galatas (€1-2 pp) + walk", approxCost: "Minimal (taxi boat)", whyItFits: "Scenic stroll among approx. 30,000 lemon trees (best in spring for blossoms)." },
    { base: "Nafplio", excursion: "Self-guided 'Melting Pot' Food Tour", travel: "Walking in Old Town", approxCost: "€5-10 pp for snacks", whyItFits: "Sample local treats like koulouri (sesame bread ring), loukoumades (honey puffs), local cheese, gelato." }
  ],
  restaurantShortList: [
    { location: "Athens", restaurants: [
        { name: "Kostas Souvlaki (Agias Irinis Sq.)", note: "Iconic souvlaki", imageUrl: createPlaceholderUrl("Kostas Souvlaki", "300x180"), websiteUrl: "https://www.google.com/search?q=Kostas+Souvlaki+Agias+Irinis+Sq.+Athens", menuHighlights:["Pork Souvlaki Wrap", "Chicken Souvlaki Wrap"] },
        { name: "To Kafeneio (Epicharmou 18, Plaka)", note: "Traditional meze, courtyard", imageUrl: createPlaceholderUrl("To Kafeneio Plaka", "300x180"), websiteUrl: "https://www.google.com/search?q=To+Kafeneio+Plaka+Athens", menuUrl: "https://example.com/menu/tokafeneio", menuHighlights:["Fava", "Keftedakia (Meatballs)", "Local Cheeses"] },
        { name: "Ta Karamanlidika Tou Fani (Sokratous 1)", note: "Deli & meze, charcuterie", imageUrl: createPlaceholderUrl("Ta Karamanlidika", "300x180"), websiteUrl: "https://karamanlidika.gr/", menuUrl: "https://karamanlidika.gr/menu/", menuHighlights:["Pastirma", "Soutzouki", "Aged Cheeses Platter"] },
        { name: "Tavern Klimataria (Plateia Theatrou 2)", note: "Live Greek music, traditional", imageUrl: createPlaceholderUrl("Tavern Klimataria", "300x180"), websiteUrl: "https://www.google.com/search?q=Tavern+Klimataria+Athens", menuHighlights:["Lamb Kleftiko", "Moussaka", "Live Music Menu"] },
        { name: "Oineas (Aischylou 33, Psyrri)", note: "Modern Greek, artistic vibe", imageUrl: createPlaceholderUrl("Oineas Athens", "300x180"), websiteUrl: "https://www.google.com/search?q=Oineas+Restaurant+Athens", menuHighlights:["Risotto with Wild Mushrooms", "Sea Bass Carpaccio"] },
        { name: "Feyrouz (Karori 23 & Agathonos)", note: "Excellent Levantine street food", imageUrl: createPlaceholderUrl("Feyrouz Athens", "300x180"), websiteUrl: "https://www.google.com/search?q=Feyrouz+Athens", menuHighlights:["Lahmacun", "Peinirli", "Vegetarian options"] }
    ]},
    { location: "Aegina", restaurants: [
        { name: "Skotadis (Harborfront, Aegina Town)", note: "Fresh fish, classic taverna", imageUrl: createPlaceholderUrl("Skotadis Aegina", "300x180"), websiteUrl: "https://www.google.com/search?q=Skotadis+Aegina", menuHighlights:["Grilled Octopus", "Fresh Daily Fish", "Aegina Pistachio Salad"] },
        { name: "Remetzo (Perdika)", note: "Seafood, sunset views", imageUrl: createPlaceholderUrl("Remetzo Perdika", "300x180"), websiteUrl: "https://www.google.com/search?q=Remetzo+Perdika+Aegina", menuHighlights:["Seafood Risotto", "Lobster Pasta", "Fresh Mussels"] },
        { name: "Ouzeri to Dromaki (Aegina Town)", note: "Meze platters, local feel", imageUrl: createPlaceholderUrl("Ouzeri to Dromaki", "300x180"), websiteUrl: "https://www.google.com/search?q=Ouzeri+to+Dromaki+Aegina", menuHighlights:["Mixed Meze Platter", "Fried Calamari", "Local Ouzo Selection"] },
        { name: "Akrogiali (Agia Marina beach)", note: "Beachfront, casual lunch", imageUrl: createPlaceholderUrl("Akrogiali Agia Marina", "300x180"), websiteUrl: "https://www.google.com/search?q=Akrogiali+Agia+Marina+Aegina", menuHighlights:["Grilled Sardines", "Greek Salad", "Horta (Wild Greens)"] },
        { name: "Panta Rei (Pistachio themed desserts, Aegina Town)", note: "Unique pistachio sweets", imageUrl: createPlaceholderUrl("Panta Rei Aegina", "300x180"), websiteUrl: "https://www.google.com/search?q=Panta+Rei+Aegina", menuHighlights:["Pistachio Baklava", "Pistachio Ice Cream", "Pistachio Liqueur"] }
    ]},
    { location: "Poros", restaurants: [
        { name: "Apagio Taverna (Harborfront, Poros Town)", note: "Harbor view, good moussaka", imageUrl: createPlaceholderUrl("Apagio Taverna Poros", "300x180"), websiteUrl: "https://www.google.com/search?q=Apagio+Taverna+Poros", menuHighlights:["Veggie Moussaka", "Kleftiko Lamb", "Fresh Fish"] },
        { name: "Panorama (Askeli Beach)", note: "Family platters, beach view", imageUrl: createPlaceholderUrl("Panorama Askeli", "300x180"), websiteUrl: "https://www.google.com/search?q=Panorama+Restaurant+Askeli+Poros", menuHighlights:["Mixed Grill Platter", "Greek Salad", "Children's Menu"] },
        { name: "Poseidon (Kanali area, Poros Town)", note: "Grilled meats, sea breeze", imageUrl: createPlaceholderUrl("Poseidon Poros", "300x180"), websiteUrl: "https://www.google.com/search?q=Poseidon+Restaurant+Poros", menuHighlights:["Pork Kontosouvli", "Chicken Souvlaki", "Local Wine"] },
        { name: "Garden Taverna (Poros Town)", note: "Courtyard setting", imageUrl: createPlaceholderUrl("Garden Taverna Poros", "300x180"), websiteUrl: "https://www.google.com/search?q=Garden+Taverna+Poros", menuHighlights:["Stuffed Vine Leaves (Dolmades)", "Gemista (Stuffed Tomatoes/Peppers)"] },
        { name: "Gia Mas (Poros Town)", note: "Live bouzouki (Saturdays usually)", imageUrl: createPlaceholderUrl("Gia Mas Poros", "300x180"), websiteUrl: "https://www.google.com/search?q=Gia+Mas+Taverna+Poros", menuHighlights:["Live Music Menu", "Mezedes", "House Wine"] },
        { name: "Oasis Taverna (Near Kanali Beach)", note: "Stuffed tomatoes, home style", imageUrl: createPlaceholderUrl("Oasis Taverna Poros", "300x180"), websiteUrl: "https://www.google.com/search?q=Oasis+Taverna+Poros", menuHighlights:["Stuffed Tomatoes (Gemista)", "Moussaka", "Local Specialties"] },
        { name: "Saga Café (Harbor, Poros Town)", note: "Breakfast/Brunch (pancakes)", imageUrl: createPlaceholderUrl("Saga Cafe Poros", "300x180"), websiteUrl: "https://www.google.com/search?q=Saga+Cafe+Poros", menuHighlights:["Pancakes", "Fresh Juices", "Coffee Selection"] }
    ]},
    { location: "Nafplio/Tolo", restaurants: [
        { name: "Vasilis Taverna (Nafplio Old Town)", note: "Slow-cooked lamb, traditional", imageUrl: createPlaceholderUrl("Vasilis Taverna Nafplio", "300x180"), websiteUrl: "https://www.google.com/search?q=Vasilis+Taverna+Nafplio", menuHighlights:["Slow-cooked Lamb", "Artichoke Hearts", "Traditional Pies"] },
        { name: "Pidalio (Nafplio Old Town)", note: "Seafood meze, popular", imageUrl: createPlaceholderUrl("Pidalio Nafplio", "300x180"), websiteUrl: "https://www.google.com/search?q=Pidalio+Nafplio", menuHighlights:["Seafood Meze Platter", "Grilled Octopus", "Tsipouro with Meze"] },
        { name: "Ta Fanaria (Nafplio Old Town)", note: "Reliable Greek fare, good for families", imageUrl: createPlaceholderUrl("Ta Fanaria Nafplio", "300x180"), websiteUrl: "https://www.google.com/search?q=Ta+Fanaria+Nafplio", menuHighlights:["Grilled Chicken & Chips", "Pastitsio", "Greek Salad"] },
        { name: "Maria’s Taverna (Tolo)", note: "Beachfront, fried zucchini, souvlaki", imageUrl: createPlaceholderUrl("Maria's Taverna Tolo", "300x180"), websiteUrl: "https://www.google.com/search?q=Maria%27s+Taverna+Tolo", menuHighlights:["Fried Zucchini", "Chicken Souvlaki", "Fresh Fish by the sea"] },
        { name: "Kastro Karima (Nafplio Old Town)", note: "Variety, good reviews", imageUrl: createPlaceholderUrl("Kastro Karima Nafplio", "300x180"), websiteUrl: "https://www.google.com/search?q=Kastro+Karima+Nafplio", menuHighlights:["Modern Greek Dishes", "Local Wine Selection"] },
        { name: "Antica Gelateria di Roma (Nafplio)", note: "Authentic gelato", imageUrl: createPlaceholderUrl("Antica Gelateria Nafplio", "300x180"), websiteUrl: "https://www.google.com/search?q=Antica+Gelateria+di+Roma+Nafplio", menuHighlights:["Pistachio Gelato", "Fig Gelato", "Seasonal Fruit Sorbets"] }
    ]},
    { location: "Athens Airport Area", restaurants: [
        { name: "Karavi Restaurant (Sofitel Athens Airport)", note: "Convenient, set menu option", imageUrl: createPlaceholderUrl("Karavi Restaurant Sofitel", "300x180"), websiteUrl: "https://www.sofitel-athens-airport.com/restaurants-bars/karavi-restaurant/", menuHighlights:["Set Menu", "International Cuisine"] },
        { name: "Moustaki Taverna (Spata village, near airport)", note: "Local taverna, short taxi ride", imageUrl: createPlaceholderUrl("Moustaki Taverna Spata", "300x180"), websiteUrl: "https://www.google.com/search?q=Moustaki+Taverna+Spata", menuHighlights:["Grilled Meats", "Traditional Greek Dishes"] }
    ]}
  ],
  gettingAroundIslands: [
    { island: "Aegina", description: "Reliable blue public buses (timetable usually posted at port); taxis available at main square in Aegina Town; bike rental possible for flat areas near town (€10-15/day)." },
    { island: "Poros", description: "Mini bus loop (Poros Town – Askeli – Monastery); frequent water taxis to various beaches and Galatas; waterfront is stroller-friendly; be mindful of steep alleys in upper town for seniors." },
    { island: "Hydra (Day Trip)", description: "No vehicles allowed. Main transport is walking, donkey rides (for novelty/short distances), or water taxis to beaches/remote spots (€4-10+ depending on distance)." }
  ],
  finalReminders: [
    "Book ferries (especially fast ferries/popular routes) & Acropolis tickets online 4-6 weeks ahead for June travel.",
    "Carry sufficient cash, especially on smaller islands or for smaller tavernas/shops that may not accept cards.",
    "Embrace the 'siesta' culture: Many shops close roughly 14:30-17:30. Plan beach time or rest then.",
    "Sun protection is crucial: Hats, sunglasses, high SPF sunscreen. The Greek sun is strong in June.",
    "Pack comfortable walking shoes for archaeological sites and cobbled streets.",
    "Consider travel insurance that covers potential ferry delays or cancellations.",
    "Learn a few basic Greek phrases like 'Yassas' (Hello), 'Efharisto' (Thank you), 'Parakalo' (Please/You're welcome)."
  ]
};
