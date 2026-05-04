/** Edit this file to update copy, dates, and links across the site. */

export const site = {
  title: "Magi & The One Heart Orchestra",
  shortName: "One Heart Orchestra",
  tagline: "Authentic roots reggae with country, funk & blues",
  legacySite: "https://oneheartorchestra.com/home",
  /** Add full URLs when ready; empty string hides the icon. */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    spotify: "",
  },
  booking: {
    /** Set to your public booking email when DNS / inbox is ready */
    email: "",
    legacyContact: "https://oneheartorchestra.com/contact",
  },
} as const;

/** Spotify embeds — paste iframe `src` from Spotify → Share → Embed */
export const media = {
  spotifyArtistEmbedSrc:
    "https://open.spotify.com/embed/artist/0ue0G3C50nNmMpzcRgW4UV?utm_source=generator&theme=0",
  /** YouTube watch URLs → embed uses youtube.com/embed/:id */
  youtubeVideoIds: [
    "9Lq8-dRlQuA",
    "ukueVvmMoqw",
    "a9UmAZ6gh-8",
    "GbdnHZvZPio",
    "e8BPyE4yspE",
  ],
  /** Featured clips on the EPK page */
  epkYoutubeVideoIds: ["GbdnHZvZPio", "e8BPyE4yspE"],
  /** Files in public/media/ */
  promoPhotos: [
    { file: "promo-log-cabin.png", alt: "The One Heart Orchestra in front of a log cabin" },
    { file: "promo-winter-field.png", alt: "The band in a snowy field with blue sky" },
    { file: "promo-magi.png", alt: "Magi with guitar" },
    { file: "promo-desert-sky.png", alt: "The band outdoors under a clear sky" },
  ],
  /** Press kit photos — files in public/epk/ */
  epkPhotos: [
    { file: "epk-magi.png", alt: "Magi with guitar in the studio" },
    { file: "epk-winter-field.png", alt: "The band in a snowy field with mountains" },
    { file: "epk-log-cabin.png", alt: "The band in front of a log cabin at golden hour" },
    { file: "epk-desert-sky.png", alt: "Group portrait outdoors under a clear sky" },
    { file: "epk-live-el-camino.png", alt: "Live on stage with El Camino backdrop" },
    { file: "epk-live-bob-marley-poster.png", alt: "Live performance on stage" },
  ],
} as const;

export const quotes = [
  "A lot of people done wrong, a lot of people fuss and fight, a lot of people just looking for some place to rest their head at night. It's another brand new day and another season. I and I arise to do JAH work 'cause Love Need No Reason — Magi",
  "Daniel's mission to be a voice of peace and reason brings an authentic and heartfelt sound that is refreshing. In a sea of hype and pretense, Daniel Wilson brings the audience together through reggae, yet keeps them together through positive encouragement via a message everyone can feel. — Ras Elijah Tafari",
  "Working with Daniel (Magi) on the Words Not Written album was a smooth and fun experience. We had good energy collaborating together, and I think it shows in the final product. We would most definitely work with him again. — Dane Foltin, Lion Heights",
  "Loving warmth, jivetastic flowing energy — Colin Gilbertson, Motel SoCo",
] as const;

export const bio = {
  lead: `Magi (pronounced maj-eye) and The One Heart Orchestra deliver a unique, heartfelt sound rooted in tight reggae grooves and enriched by touches of country, funk, and blues. True to roots reggae, their music is a powerful vehicle for messages of peace and positivity.`,
  extended: `Daniel Wilson, known as "Magi," discovered his passion for music at age 16, learning guitar to accompany his singing. Inspired to write original songs following the events of September 11, 2001, Magi has consistently used his art to channel resilience and hope. After relocating to Durango, Colorado, he became a key figure in various reggae projects, culminating in his current endeavor, The One Heart Orchestra.

Magi's early band, Magi Nation, featured the legendary Rasta Stevie—renowned MC of Reggae on the River—as their drummer. This collaboration led to opportunities to perform alongside reggae icons such as Ky-Mani Marley, Collie Buddz, Tarrus Riley, and Kabaka Pyramid. In 2021, Magi began collaborating with Dane Foltin of Austin-based Lion Heights to record his debut album, Words Not Written, released in 2024.`,
  /** Short blurb for EPK / one-sheets; full story lives on the home page. */
  condensed: `Led by Daniel "Magi" Wilson, The One Heart Orchestra plays roots reggae colored by country, funk, and blues—from Magi Nation (with Rasta Stevie) to festival stages and the 2024 debut Words Not Written with Lion Heights.`,
} as const;

export const lineup = [
  { role: "Lead vocals / guitar", name: "Daniel Wilson (Magi)" },
  { role: "Backing & lead vocals", name: "Nuriya" },
  { role: "Drums", name: 'Chad Bennett "Redfoot"' },
  { role: "Bass", name: "Levi" },
  { role: "Lead guitar", name: 'Eric Luc ("Joe Bummer")' },
  { role: "Keys & saxophone", name: 'Ian Boletchek ("Dr. Zuke")' },
] as const;

export const album = {
  title: "Words Not Written",
  year: 2024,
  legacyListen: "https://oneheartorchestra.com/music",
  tracks: [
    { n: 1, title: "Roots", length: "4:23" },
    { n: 2, title: "For The Love", length: "3:00" },
    { n: 3, title: "Words Not Written", length: "4:12" },
    { n: 4, title: "For the Kids", length: "3:59" },
    { n: 5, title: "Jubilee", length: "3:09" },
    { n: 6, title: "Child Of Space", length: "3:00" },
    { n: 7, title: "Roots Dub", length: "4:09" },
    { n: 8, title: "For The Love Dub", length: "2:59" },
    { n: 9, title: "For the Kids Dub", length: "4:00" },
  ],
} as const;

export const shows = [
  {
    date: "2026-05-16",
    time: "11:00 AM",
    title: "Magi and The One Heart Orchestra",
    venue: "Vallecito Half Marathon finish line",
    city: "Vallecito, CO",
    href: "https://oneheartorchestra.com/home",
  },
  {
    date: "2026-05-22",
    time: "6:00 PM",
    title: "Kickoff celebration — Iron Horse Bicycle Classic",
    venue: "Buckley Park",
    city: "Durango, CO",
    href: "https://oneheartorchestra.com/home",
  },
  {
    date: "2026-06-20",
    time: "4:00 PM",
    title: "Reggae in the Park, Pagosa Springs",
    venue: "Yamaguchi Park",
    city: "Pagosa Springs, CO 81147",
    href: "https://oneheartorchestra.com/home",
  },
] as const;
