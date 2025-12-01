export type TimelineEntry = {
  title: string
  icon: string
  time?: string
  side?: 'left' | 'right'
}

export type InvitationParagraph = {
  text: string
  class?: string
}

export const eventConfig = {
  hero: {
    partners: [
      { name: 'Ava', class: 'bride' },
      { name: 'Mason', class: 'groom' },
    ],
    dates: ['2025.09.12', 'September 12, 2025'],
    backgroundImage: 'hero.jpg',
    bannerImage: 'banner2.JPG',
  },
  invitation: {
    paragraphs: [
      { text: 'Halfway through our journey, our paths have become one.' },
      { text: 'Hand in hand, with hearts full of wonder, we step into forever.' },
      { text: 'With love and excitement, we invite you to witness' },
      { text: 'the celebration of our marriage and the start of our next chapter.' },
      { text: 'Friday, September 12 · 6:00 PM' },
      { text: 'The Conservatory at Willow Park' },
      { text: 'With love,' },
      { text: 'Ava Bennett & Mason Cole' },
    ],
  },
  timeline: <TimelineEntry[]>[
    { time: '18:00', title: 'Welcome Cocktails', icon: 'welcome.png', side: 'right' },
    { time: '18:30', title: 'Ceremony Begins', icon: 'wedding-rings.png', side: 'left' },
    { time: '19:00', title: 'Sunset Portraits', icon: 'camera.png', side: 'right' },
    { time: '20:00', title: 'Dinner & Toasts', icon: 'dinner.png', side: 'left' },
    { time: '21:00', title: 'First Dance', icon: 'music.png', side: 'right' },
    { time: '21:30', title: 'Cake Cutting', icon: 'cake.png', side: 'left' },
    { time: '22:00', title: 'Sparkler Send-off', icon: 'exit.png', side: 'right' },
  ],
  countdown: {
    targetDate: '2025-09-12T18:00:00-04:00',
  },
  poem: {
    image: 'poem2.jpg',
    texts: [
      { class: 'line', text: 'Our laughter met like morning light,' },
      { class: 'line', text: 'Two wanderers resting side by side.' },
      { class: 'comma', text: '⋯' },
      { class: 'line', text: 'Now every breath is promise bright,' },
      { class: 'line', text: 'And home is anywhere you reside.' },
    ],
  },
  venue: {
    addressLabel: 'Reception Venue',
    navigationLabel: 'Directions',
    address: 'Willow Park Conservatory, 215 Lakeview Drive, Asheville, NC 28801',
    mapLinks: [
      {
        label: 'Google Maps',
        icon: 'google-maps.webp',
        url: 'https://maps.app.goo.gl/sampleWillowPark',
      },
      {
        label: 'Neshan',
        icon: 'neshan.webp',
        url: 'https://nshn.ir/sampleWeddingLocation',
      },
    ],
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.0205825114864!2d-82.5500864!3d35.5950585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f34da3d8e9f5%3A0x4dee8f768f7d3a7e!2sPack%20Square%20Park!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  },
} as const

export type EventConfig = typeof eventConfig
