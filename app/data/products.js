export const products = [
  {
    id: '1',
    name: 'iPad Pro',
    description:
      'The iPad experience. Designed to connect with everything Apple.',
    price: {
      original: 1199.95,
      current: 999.98,
    },
    features: [
      'The ultimate iPad experience. With next-level M1 performance, a breathtaking XDR display and fast wireless. Buckle up. Supercharged by the M1 Chip. Mindblowing Performance. XDR, liquid retina to the extreme.',
      'The 11-inch display gives you an immersive and portable experience. And the 12.9-inch XDR display is a stunning and expansive way to view HDR content.',
      "60-day price protection Enjoy price protection for 60 days from your delivery date. If we drop the price of a physical product or you find it lower at an eligible retailer, contact us and we'll honor a one-time price adjustment. Exclusions apply.",
    ],
    colors: [
      {
        color: 'silver',
        image: '/assets/images/ipadsilver.png',
      },
      {
        color: 'black',
        image: '/assets/images/ipadblack.png',
      },
    ],
  },
  {
    id: '2',
    name: 'MacBook Air',
    description:
      'The Mac experience. Designed to connect with everything Apple.',
    price: {
      original: 1399.95,
      current: 1195.98,
    },
    features: [
      'Strikingly thin design so you can work, play, or create just about anything — anywhere.',
      'Get more done faster with the blazing-fast Apple M2 chip',
      'Go all day with up to 18 hours of battery life.',
      'The brilliant 13.6-inch Liquid Retina display features 500 nits of brightness, P3 wide color, and support for one billion colors.',
      'Look sharp and sound great with a 1080p FaceTime HD camera, three-mic array, and four-speaker sound system with Spatial Audio.',
    ],
    colors: [
      {
        color: 'black',
        image: '/assets/images/mac.png',
      },
    ],
  },
];
