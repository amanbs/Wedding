// Central content for Amy & Aman's wedding website

export const COUPLE = {
  bride: "Amy",
  groom: "Aman",
  tagline: "We can't wait to celebrate with you.",
  location: "Jaipur, India",
  dates: "December 17 & 18, 2026",
  weddingDate: "2026-12-17T18:00:00+05:30",
  rsvpUrl: "https://marble-beauty-7d8.notion.site/d80b8f568d5d4ad4a8003ebc23afeee2",
};

export const IMAGES = {
  heroPalace:
    "https://images.pexels.com/photos/32261804/pexels-photo-32261804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1400&w=1000",
  cover:
    "https://pictime4neu1public-pub-d2gua5c5f8dfgmem.a02.azurefd.net/pictures/52/169/52169011/homepage/homepage.jpg?rs=134240239892695706",
  storyCouple:
    "https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=900",
  detailsFloral:
    "https://images.pexels.com/photos/931155/pexels-photo-931155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=900",
  scheduleDinner:
    "https://images.pexels.com/photos/19269784/pexels-photo-19269784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=900",
  gallery1:
    "https://images.pexels.com/photos/34865618/pexels-photo-34865618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=900",
  gallery2:
    "https://images.pexels.com/photos/36106445/pexels-photo-36106445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=900",
  gallery3:
    "https://images.unsplash.com/photo-1519756719377-e084f8333a83?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  venueHaveli:
    "https://hotelnarainniwas.com/wp-content/uploads/2024/11/home-hero-2.webp",
  venueWedding:
    "https://hotelnarainniwas.com/wp-content/uploads/2025/01/home-wedding.png",
  venueSuite:
    "https://hotelnarainniwas.com/wp-content/uploads/2025/01/home-suites.webp",
};

export const STORY = [
  {
    n: "01",
    label: "How It Began",
    title: "A Match Lockdown-ed",
    paras: [
      "Our story began on what was arguably the worst possible day to meet someone, the very first day of the COVID lockdown.",
      "We were neighbours at the Cité Internationale Universitaire de Paris, both trying to survive the final stretch of our master's degrees.",
      "Somewhere along the way, after one day of hanging out together, we simply...never stopped.",
      "Since then, we've followed each other across cities, countries and continents (quite literally, in that order), proving that some things are just meant to find their way back.",
    ],
  },
  {
    n: "02",
    label: "The Coming Together of Two Families",
    title: "The Real Love Story",
    paras: [
      "If Amy and Aman are a match made in COVID, then our parents are definitely a match made in heaven.",
      "Seriously. They got along so effortlessly that we're still not entirely convinced they weren't secretly plotting this long before we met.",
      "Watching our families become one has been one of the greatest joys of this journey. It really does feel like the universe was in on the plan all along.",
    ],
  },
  {
    n: "03",
    label: "The Celebration",
    title: "Where all our worlds come together",
    paras: [
      "If you know Amy, you'll know there was never going to be any destination other than Jaipur for the wedding.",
      "If you know Aman...you'll know he couldn't care less. Luckily, celebrating in the city he grew up in turned out to be a pretty great compromise.",
      "This weekend isn't just about the two of us. It's about every chapter that brought us here. To have all of you, our favourite people from every season of our lives, under one roof is something we'll never take for granted.",
      "So, whether you're travelling across town or across continents, we hope you'll make the journey to celebrate with us. Come as you are, bring your stories, your dancing shoes, and your biggest smiles. We can't wait to introduce old friends to new ones, watch our worlds collide in the best possible way, and celebrate the beautiful, wonderfully diverse village that has shaped our lives.",
      "Thank you for making the trip. Having you there is what will make this celebration complete. We truly can't wait to welcome you to Jaipur.",
    ],
  },
];

export const DETAILS = [
  { label: "Location", value: "Jaipur, India", sub: "The Pink City of Rajasthan" },
  { label: "Dates", value: "Dec 17 & 18, 2026", sub: "Two days of celebration" },
  { label: "Venue", value: "Narain Niwas Palace", sub: "A heritage haveli in the heart of Jaipur" },
];

export const SCHEDULE = [
  {
    day: "Day One",
    date: "December 17, 2026",
    image: "/jaipur/jaipur-peacock.jpg",
    caption: "Rajasthani kathputli — colour, craft & celebration",
    events: [
      { time: "12:00 PM", title: "Haldi & Mehendi", note: "A brunch with henna, courtyard music and turmeric" },
      { time: "7:00 PM", title: "Sangeet & Cocktails", note: "A celebration Rajasthan-safari style" },
    ],
  },
  {
    day: "Day Two",
    date: "December 18, 2026",
    image: "/jaipur/jaipur-puppets.jpg",
    caption: "The palace gates of Jaipur open to a new beginning",
    events: [
      { time: "11:30 AM", title: "Amy's send-off & Aman's Baraat", note: "The groom's procession arrives" },
      { time: "12:00 PM", title: "The Pheras", note: "Vows exchanged in the palace gardens" },
      { time: "7:00 PM", title: "The Party, After", note: "Toasts, music and the first dance" },
    ],
  },
];

export const TRAVEL = [
  {
    title: "Visas",
    paras: [
      "Citizens of many countries can apply for an Indian e-Visa online prior to their trip. Some visitors may still need to apply for a regular visa through an Indian embassy or consulate, as not all nationalities are eligible for an e-Visa.",
      "To check visa requirement and procedure information, visit the following links depending on your nationality:",
    ],
    links: [
      { label: "Official Government of India E-Visa Portal", url: "https://indianvisaonline.gov.in/evisa/tvoa.html" },
      { label: "Embassy of India, Tunis — Visa Procedure & Fee Structure", url: "https://www.embassyofindiatunis.gov.in/visa-procedure-fee-structure.php" },
    ],
  },
  {
    title: "Getting to Jaipur",
    paras: [
      "Jaipur is well connected and easily accessible. Jaipur International Airport (JAI) has numerous flights connecting from Delhi, Mumbai, and other major Indian hubs. From the airport, Narain Niwas Palace is a comfortable 20-minute drive.",
      "Jaipur is also easily accessible from New Delhi via the national highway (most recommended). A pre-booked taxi ride takes approximately 4 hours, and reliable Volvo bus services are also available.",
    ],
  },
  {
    title: "Accommodation",
    paras: [
      "We have arranged for full boarding accommodation at the Narain Niwas Palace for all our guests. More details about your stay for the two days will be shared once we receive your RSVP. It will be our pleasure to host you.",
    ],
  },
  {
    title: "Getting around",
    paras: [
      "Uber taxis, tuk-tuks and pre-arranged cars are the easiest way to explore the Pink City.",
    ],
  },
];

export const NOTES = [
  {
    title: "",
    text: "Indian weddings are less of a single event and more of a joyful marathon! Expect multiple celebrations — pace yourself, enjoy the downtime, and stay hydrated.",
  },
  {
    title: "Dress Code",
    text: "The dress code leans festive and pastel — think Jaipur palace elegance.",
  },
  {
    title: "Weather",
    text: "December evenings in Jaipur can be quite cool, so we recommend bringing a warm layer for the outdoor celebrations.",
  },
  {
    title: "Get Ready to Plan",
    text: "A logistics guide and moodboard will follow with the formal invitation.",
  },
];
