import { Horse, Rescue, JournalPost, SiteSettings, ContactMessage } from '../types/database';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  id: 'estate_settings',
  business_name: 'Sterling Horse Sales',
  tagline: 'Exceptional Horses. Thoughtfully Bred.',
  logo_url: '/images/dressage.jpg',
  email: 'concierge@sterlinghorsesales.com',
  phone: '+33 2 31 88 42 10',
  whatsapp: '+33 6 45 20 19 88',
  address: 'Route du Haras 14, 14800 Deauville',
  country: 'France',
  visiting_hours: "Saturday and Sunday 1pm to 5pm",
  instagram_url: 'https://instagram.com/sterlinghorsesales',
  facebook_url: 'https://facebook.com/sterlinghorsesales',
  youtube_url: 'https://youtube.com/@sterlinghorsesales',
  about_text:
    "Founded on the enduring principle of respectful horsemanship and generational lineage, Sterling operates across 180 hectares of protected pasture in the Pays d'Auge. We combine classical French training traditions with modern equine sports medicine and biomechanics to produce Warmbloods capable of competing at the highest international levels, while remaining calm, sound, and noble in temperament.",
  footer_text: 'Breeding exceptional horses with patience, purpose and respect.',
  about_heading: 'Sterling Horse Sales',
  about_subtitle: 'Quality Horses. Honest Service. Thoughtful Matching.',
  about_lead_1: 'Based in Houston, Texas, Sterling Horse Sales is dedicated to connecting buyers with quality horses while providing a professional, transparent, and straightforward purchasing experience.',
  about_lead_2: 'We believe finding the right horse starts with understanding both the horse and the buyer. Our approach is centered on responsible horse handling, accurate information, and helping each buyer find a horse that fits their experience, goals, and lifestyle.',
  about_story_heading: 'A personal, informed, and trustworthy experience.',
  about_story_text_1: 'Sterling Horse Sales was established with a simple vision: to make buying a horse a more personal, informed, and trustworthy experience.',
  about_story_text_2: 'We offer horses from our own network as well as horses listed on behalf of trusted family members, friends, and other horse owners. Because of this, you may sometimes see horses located in different cities or states. The location shown on each listing represents where that particular horse is currently located.',
  about_story_text_3: 'We provide prospective buyers with relevant information about each horse, including its age, breed, height, training, temperament, abilities, experience, and location.',
  about_story_text_4: 'Whether you are searching for a dependable trail horse, family horse, ranch partner, or performance prospect, we take the time to understand what you are looking for.',
  about_values_heading: 'The principles that guide our work.',
  about_value_1_title: 'Responsible Horsemanship',
  about_value_1_text: 'We believe every horse should be treated with patience, care, and respect.',
  about_value_2_title: 'Honest Representation',
  about_value_2_text: 'We aim to provide clear and accurate information about the horses we offer, including their current location.',
  about_value_3_title: 'The Right Match',
  about_value_3_text: "We consider the buyer's experience, intended use, and expectations when helping them select a horse.",
  about_value_4_title: 'Professional Service',
  about_value_4_text: 'From the initial inquiry through viewing, purchase, and transportation, we strive to keep the process organized and clearly communicated.',
  about_location_heading: 'Based in Houston, Texas',
  about_location_text_1: 'Our base is in Houston, Texas, but our listings may come from different locations because we also help family, friends, and trusted horse owners market their horses.',
  about_location_text_2: "For buyers who cannot personally pick up their horse, transportation assistance can be arranged to help coordinate the horse's journey to its new home.",
  about_commitment_heading: 'More than just a transaction.',
  about_commitment_text_1: 'At Sterling Horse Sales, we believe a successful sale is more than completing a transaction. It is about helping place the right horse with the right person and creating an experience that is professional, respectful, and centered around the horse.',
  about_commitment_quote: 'Sterling Horse Sales \nExceptional Horses. Thoughtfully Matched.',
  about_cta_heading: 'Find your perfect match.',
  about_cta_text: 'We welcome prospective owners to browse our available horses or contact us directly to discuss your specific needs.',
  rescue_page_title: 'Every Horse Deserves Another Chance.',
  rescue_page_intro: 'Our rescue work is driven by a simple belief: horses deserve safety, care, patience, and the opportunity to have a better life.\n\nHorse rescue is not a profit-making part of our work. When a horse needs help, our priority is its welfare—not the financial return.',
  rescue_page_mission: 'We help horses that may have been neglected, abandoned, surrendered, displaced, or simply found themselves without a safe home. Whenever possible, we provide them with proper care, rehabilitation, training, and time to recover.\n\nWe believe a difficult past does not have to define a horse\'s future.',
  rescue_page_second_chance: 'Some horses arrive needing more than food and shelter. They may need veterinary attention, rehabilitation, patience, retraining, or simply time to learn to trust people again.\n\nOur goal is to give each horse the opportunity to heal, rebuild confidence, and move toward a safe and suitable future home.',
  rescue_page_rehoming: 'When a rescued horse is ready for a new home, we take the time to consider whether the home is appropriate for that individual horse. Our goal is not simply to move a horse on—it is to give that horse a lasting second chance.',
  rescue_page_help_title: 'Help Us Give Horses a Second Chance',
  rescue_page_help_text: 'Every rescue takes time, resources, patience, and commitment. Support from people who care about horses helps us continue providing these animals with the care they need.',
  updated_at: new Date().toISOString(),
};

export const INITIAL_HORSES: Horse[] = [
  {
    id: 'e2d3f4a1-1111-4444-9999-000000000001',
    name: 'Artemis',
    slug: 'artemis',
    breed: 'KWPN Dutch Warmblood',
    registration_number: 'KWPN-2018-0941',
    sex: 'Mare',
    date_of_birth: '2018-04-12',
    age: 8,
    height: '16.3 hh (170 cm)',
    color: 'Dark Bay',
    discipline: 'Dressage',
    training_level: 'Prix St. Georges / Inter I Preparation',
    sire: 'Vivaldi',
    dam: 'Zara van Sterling',
    grand_sire_paternal: 'Krack C',
    grand_dam_paternal: 'Renate-Utopia',
    grand_sire_maternal: 'Gribaldi',
    grand_dam_maternal: 'Odessa',
    location: 'Normandy Main Barn',
    price: 145000,
    currency: 'EUR',
    status: 'Available',
    short_description:
      'A mare of singular poise and natural cadence, demonstrating effortless lateral work and exceptional elasticity through the back.',
    description:
      'Artemis represents the absolute pinnacle of our breeding vision. Sired by the renowned Dutch sire Vivaldi out of our keur dam Zara, she inherits an unshakeable work ethic paired with natural collection and rhythm.\n\nHer walk is clean and sweeping with significant overtrack, her trot possesses genuine uphill suspension, and her canter is exceptionally balanced. Under saddle, Artemis proves both sensitive to the aids and extraordinarily generous. She learns new movements with poise, never rushing or showing resistance. Her radiographs and clinical veterinary examinations are immaculate, documented comprehensively by the Deauville Equine Clinic.',
    personality:
      'Intelligent, poised, and deeply affectionate in the stable. She bonds closely with her handler and approaches training with quiet enthusiasm and focus.',
    training:
      'Solidified in all Prix St. Georges movements: confirmed flying changes through every two strides, half-passes at trot and canter with fluid rhythm, and beginning development toward piaffe/passage transitions.',
    competition_history:
      'Competed successfully in regional Young Horse championships as a 5 and 6-year-old with consistent marks above 78%.',
    bloodline:
      'Vivaldi x Gribaldi foundation, consolidating superior biomechanics, trainable character, and classical European elegance.',
    suitability:
      'Ideal for an ambitious amateur looking for a Grand Prix partner or a professional rider seeking a top-tier international prospect.',
    featured: true,
    published: true,
    created_at: new Date(Date.now() - 30 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    images: [
      {
        id: 'img-101',
        horse_id: 'e2d3f4a1-1111-4444-9999-000000000001',
        url: '/images/dressage.jpg',
        caption: 'Artemis at liberty in the morning pastures',
        display_order: 1,
        is_cover: true,
      },
      {
        id: 'img-102',
        horse_id: 'e2d3f4a1-1111-4444-9999-000000000001',
        url: '/images/dressage.jpg',
        caption: 'Uphill cadence and collection under saddle',
        display_order: 2,
        is_cover: false,
      },
      {
        id: 'img-103',
        horse_id: 'e2d3f4a1-1111-4444-9999-000000000001',
        url: '/images/dressage.jpg',
        caption: 'Noble head and throatlatch detail',
        display_order: 3,
        is_cover: false,
      },
    ],
  },
  {
    id: 'e2d3f4a1-2222-4444-9999-000000000002',
    name: 'Valentino',
    slug: 'valentino',
    breed: 'Hanoverian',
    registration_number: 'HAN-2019-1428',
    sex: 'Stallion',
    date_of_birth: '2019-05-20',
    age: 7,
    height: '17.0 hh (173 cm)',
    color: 'Chestnut with Flaxen Highlights',
    discipline: 'Dressage',
    training_level: 'Medium / Advanced Medium',
    sire: 'Vitalis',
    dam: 'Florencia M',
    grand_sire_paternal: 'Vivaldi',
    grand_dam_paternal: 'Tolivia',
    grand_sire_maternal: 'Florencio I',
    grand_dam_maternal: 'Donna Clara',
    location: 'Normandy Stallion Yard',
    price: 180000,
    currency: 'EUR',
    status: 'Available',
    short_description:
      'An imposing licensed stallion with boundless uphill expression, exceptional hindleg engagement, and a gentle, gentlemanly demeanor.',
    description:
      'Valentino is a licensed Hanoverian stallion whose presence commands immediate attention in the arena. His mechanics are characterized by tremendous shoulder freedom and active, spring-like hocks. Despite his physical power and expressive movement, he possesses an exemplary temperament, hackable on the buckle and calm around other horses in all settings.\n\nHe has completed his performance testing with high marks for rideability (9.0) and temperament (9.5). He shows tremendous potential for the highest levels of the sport while also proving to be an exceptional breeding prospect for selective programs.',
    personality:
      'Exemplary stallion manners. Honest, calm under pressure, affectionate with grooms, and always attentive to the rider.',
    training:
      'Confirmed in shoulder-in, travers, half-pass, simple changes, and working clean single flying changes. Naturally balanced canter pirouette beginnings.',
    competition_history: 'Winner of the Normandy 6-Year-Old Dressage Showcase with scores exceeding 81%.',
    bloodline: 'Vitalis x Florencio I x Donnerhall lineage representing proven German dressage dynasties.',
    suitability: 'Suitable for high-performance international dressage or as a foundation sire for a refined breeding program.',
    featured: true,
    published: true,
    created_at: new Date(Date.now() - 45 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    images: [
      {
        id: 'img-201',
        horse_id: 'e2d3f4a1-2222-4444-9999-000000000002',
        url: '/images/dressage.jpg',
        caption: 'Valentino during morning schooling in the indoor arena',
        display_order: 1,
        is_cover: true,
      },
      {
        id: 'img-202',
        horse_id: 'e2d3f4a1-2222-4444-9999-000000000002',
        url: '/images/dressage.jpg',
        caption: 'Extended trot showing active hindquarter propulsion',
        display_order: 2,
        is_cover: false,
      },
    ],
  },
  {
    id: 'e2d3f4a1-3333-4444-9999-000000000003',
    name: 'Eleanor',
    slug: 'eleanor',
    breed: 'Oldenburg',
    registration_number: 'OLD-2020-0382',
    sex: 'Filly',
    date_of_birth: '2020-03-15',
    age: 6,
    height: '16.1 hh (165 cm)',
    color: 'Black / Raven',
    discipline: 'Dressage / Breeding',
    training_level: 'Elementary / Novice',
    sire: 'Secret',
    dam: 'Belle Epoque',
    grand_sire_paternal: 'Sezuan',
    grand_dam_paternal: 'Seline',
    grand_sire_maternal: 'Belissimo M',
    grand_dam_maternal: 'Caprice',
    location: 'Normandy Main Barn',
    price: 95000,
    currency: 'EUR',
    status: 'Reserved',
    short_description:
      'A striking black filly with classical proportions, refined bone, and light-footed, rhythmic ground-covering strides.',
    description:
      'Eleanor represents modern Oldenburg breeding at its most refined. With a pitch-black coat and noble feminine head, she turns heads wherever she walks. Her uphill balance is natural and relaxed, making her a pleasure to train even in early development phases.',
    personality: 'Cooperative, gentle, and quiet. Extremely well-mannered for shoeing, clipping, and transport.',
    training: 'Solid walk-trot-canter fundamentals, steady contact in snaffle, starting leg-yields and transitions within the gaits.',
    competition_history: 'Lightly shown in young horse classes with first-place ribbons.',
    bloodline: 'Secret x Belissimo M. Exceptional rhythm and temperament.',
    suitability: 'Fabulous future mount for a skilled rider or a cornerstone broodmare for a boutique stud.',
    featured: false,
    published: true,
    created_at: new Date(Date.now() - 60 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    images: [
      {
        id: 'img-301',
        horse_id: 'e2d3f4a1-3333-4444-9999-000000000003',
        url: '/images/dressage.jpg',
        caption: 'Eleanor in the tranquil estate paddocks',
        display_order: 1,
        is_cover: true,
      },
    ],
  },
  {
    id: 'e2d3f4a1-4444-4444-9999-000000000004',
    name: 'Sterling Atlas',
    slug: 'sterling-atlas',
    breed: 'Trakehner',
    registration_number: 'TRAK-2017-8821',
    sex: 'Gelding',
    date_of_birth: '2017-06-02',
    age: 9,
    height: '16.2 hh (168 cm)',
    color: 'Dapple Grey',
    discipline: 'All-Round / Hunter / Dressage',
    training_level: 'Advanced Medium',
    sire: 'Millennium',
    dam: 'Aura de Sterling',
    grand_sire_paternal: 'Easy Game',
    grand_dam_paternal: 'Merle',
    grand_sire_maternal: 'Caprimond',
    grand_dam_maternal: 'Astoria',
    location: 'Normandy Guest Barn',
    price: 110000,
    currency: 'EUR',
    status: 'Available',
    short_description:
      'A noble grey gelding possessing classic Trakehner nobility, exceptional ground manners, and light feather-soft contact.',
    description:
      'Sterling Atlas has been brought along with exemplary patience in our classical system. His movement is floaty, light on the ground, and wonderfully comfortable to sit. He has also been schooled over small natural fences and enjoys trail riding through the Normandy countryside.',
    personality: 'Patient, curious, and deeply trustworthy. An old soul with great wisdom.',
    training: 'Solid flying changes, established lateral work, quiet jumping style with excellent technique.',
    competition_history: 'Successful in regional dressage and working equitation competitions.',
    bloodline: 'Millennium x Caprimond, embodying pure Trakehner nobility and stamina.',
    suitability: 'The ultimate gentleman’s or lady’s horse for competition and peaceful hacking.',
    featured: true,
    published: true,
    created_at: new Date(Date.now() - 15 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    images: [
      {
        id: 'img-401',
        horse_id: 'e2d3f4a1-4444-4444-9999-000000000004',
        url: '/images/dressage.jpg',
        caption: 'Sterling Atlas in the courtyard',
        display_order: 1,
        is_cover: true,
      },
    ],
  },
];

export const INITIAL_RESCUES: Rescue[] = [
  {
    id: 'c1b2a3d4-1111-4444-8888-000000000001',
    name: 'Hope',
    slug: 'hope',
    rescue_date: '2022-10-14',
    status: 'Sanctuary',
    short_description:
      'A French Trotter mare surrendered from neglect, rehabilitated over two years into our gentlest therapy and companion mare.',
    story:
      'Hope arrived at Sterling on an overcast morning in October 2022, severely underweight, dehydrated, and deeply fearful of human contact. She had spent five years in substandard housing without veterinary care or appropriate forage. Through patient, quiet presence and custom nutrition designed by equine gastroenterologists, she slowly shed her fear and rediscovered the joy of companionship.',
    rehabilitation:
      'Months of specialized ulcer treatment, tailored physiotherapy, corrective barefoot trimming, and hundreds of gentle hours of positive reinforcement training.',
    current_status:
      'Hope now lives peacefully in our senior herd, enjoying daily grass turnout, apple treats, and visits from visiting apprentice grooms who learn gentleness from her.',
    location: 'Sterling Sanctuary Pastures, Normandy',
    featured: true,
    published: true,
    created_at: new Date(Date.now() - 120 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    images: [
      {
        id: 'res-img-1',
        rescue_id: 'c1b2a3d4-1111-4444-8888-000000000001',
        url: '/images/dressage.jpg',
        caption: 'Hope grazing peacefully under the Normandy apple orchards',
        display_order: 1,
        is_cover: true,
      },
    ],
    story_sections: [
      {
        id: 'sec-1',
        rescue_id: 'c1b2a3d4-1111-4444-8888-000000000001',
        title: 'Arrival',
        content:
          'Transported in an emergency trailer, Hope stepped onto Sterling soil with eyes wide with anxiety and a body condition score of 1.5 out of 9.',
        date_label: 'October 2022',
        display_order: 1,
      },
      {
        id: 'sec-2',
        rescue_id: 'c1b2a3d4-1111-4444-8888-000000000001',
        title: 'Recovery',
        content:
          'Under constant veterinary monitoring, a slow re-feeding protocol was implemented alongside daily grooming rituals to rebuild trust.',
        date_label: 'Winter 2022 – Spring 2023',
        display_order: 2,
      },
      {
        id: 'sec-3',
        rescue_id: 'c1b2a3d4-1111-4444-8888-000000000001',
        title: 'Training & Connection',
        content:
          'She began ground obstacle work and gentle liberty play, learning that a human hand carries kindness and security.',
        date_label: 'Summer 2023',
        display_order: 3,
      },
      {
        id: 'sec-4',
        rescue_id: 'c1b2a3d4-1111-4444-8888-000000000001',
        title: 'Permanent Sanctuary',
        content:
          'Hope was welcomed into our permanent sanctuary program, where she will spend the rest of her days protected and cherished.',
        date_label: 'Present Day',
        display_order: 4,
      },
    ],
  },
  {
    id: 'c1b2a3d4-2222-4444-8888-000000000002',
    name: 'Rowan',
    slug: 'rowan',
    rescue_date: '2023-06-01',
    status: 'Looking for a Home',
    short_description:
      'A young Warmblood cross who suffered an early pasture fracture, now fully sound and seeking a devoted forever home for light pleasure and groundwork.',
    story:
      'Rowan was destined for an uncertain fate after suffering a severe pasture injury as a yearling that his previous owners could not afford to treat. Our estate veterinary team performed non-invasive rehabilitation, hydrotherapy, and stem-cell support over fourteen months. Today, he trots soundly, plays freely in the paddock, and possesses the most affectionate character on the estate.',
    rehabilitation:
      'Controlled stall rest with medical vibration therapy, graduated hand-walking, and targeted strengthening of the stifle ligaments.',
    current_status:
      'Fully rehabilitated and sound for flatwork, long-reining, trail riding, and loving companionship.',
    location: 'Sterling Rehab Barn, Normandy',
    featured: true,
    published: true,
    created_at: new Date(Date.now() - 90 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    images: [
      {
        id: 'res-img-2',
        rescue_id: 'c1b2a3d4-2222-4444-8888-000000000002',
        url: '/images/dressage.jpg',
        caption: 'Rowan enjoying liberty work in the outdoor arena',
        display_order: 1,
        is_cover: true,
      },
    ],
    story_sections: [
      {
        id: 'sec-21',
        rescue_id: 'c1b2a3d4-2222-4444-8888-000000000002',
        title: 'Arrival',
        content: 'Arrived on estate transport with non-weight-bearing lameness on the right hindlimb.',
        date_label: 'June 2023',
        display_order: 1,
      },
      {
        id: 'sec-22',
        rescue_id: 'c1b2a3d4-2222-4444-8888-000000000002',
        title: 'Rehabilitation Journey',
        content: 'Underwent specialized regenerative therapy and hydro-treadmill sessions under equine veterinary care.',
        date_label: 'Autumn 2023',
        display_order: 2,
      },
      {
        id: 'sec-23',
        rescue_id: 'c1b2a3d4-2222-4444-8888-000000000002',
        title: 'New Beginning',
        content: 'Declared 100% sound on clinical exam. Now ready for a dedicated companion home.',
        date_label: 'Current',
        display_order: 3,
      },
    ],
  },
];

export const INITIAL_JOURNAL: JournalPost[] = [
  {
    id: 'a1b2c3d4-1111-4444-7777-000000000001',
    title: 'On the Philosophy of Generational Breeding',
    slug: 'philosophy-of-generational-breeding',
    excerpt:
      'True horsemanship does not rush. An exploration into our criteria for selecting broodmares that unite sovereign temperament with athletic elasticity.',
    content: `In an age dominated by immediate gratification and quick commercial turnover, the breeding of classical sport horses demands an almost forgotten virtue: **patience**.

A great horse is never an accident of fortune. It is the culmination of generations of disciplined observation, an intimate understanding of equine biomechanics, and, above all, an unyielding respect for the mare family.

### The Sacred Role of the Dam Line

While stallion brochures command the highest fees and the brightest headlines, seasoned breeders understand that more than sixty percent of a foal's character, courage, and constitutional durability descends through the motherline.

At Sterling, we do not breed from mares who merely possess famous paperwork. A candidate for our broodmare band must satisfy three non-negotiable standards:

1. **A Calm, Sovereign Nervous System:** A high-performance horse must possess fire under saddle, yet remain peaceful and rational in the stall.
2. **Soundness of Bone and Hoof:** We breed for longevity. A horse that cannot stay sound through fifteen years of training represents a flaw in breeding judgment.
3. **Natural Elasticity in the Walk:** The four-beat purity of the walk reveals the true tension or freedom of the equine spine.

> "To breed a horse is to make a promise to the animal for its entire lifetime. We are responsible not merely for the foal in the paddock, but for the partner it becomes twenty years hence."

### Modern Science in Harmony with Nature

While our philosophy remains rooted in 18th-century French classical traditions, our veterinary protocols embrace the frontier of modern sports medicine. Advanced gait analysis, custom nutritional profiling based on soil minerality in the Pays d'Auge, and early natural socialization form the bedrock of each foal's upbringing.

Our horses grow up in large, undulating herds. They navigate slopes, negotiate social hierarchies with older mares, and develop cardiovascular depth naturally before ever seeing a saddle.

This is breeding with purpose.`,
    category: 'Breeding',
    featured_image: '/images/hero.jpg',
    author: 'Henri Sterling',
    published: true,
    published_at: new Date(Date.now() - 14 * 86400000).toISOString(),
    seo_title: 'The Philosophy of Generational Breeding | Sterling Horse Sales',
    seo_description: 'Discover how Sterling breeds world-class Warmbloods with focus on temperament, biomechanics, and European heritage.',
    featured: true,
    created_at: new Date(Date.now() - 14 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'a1b2c3d4-2222-4444-7777-000000000002',
    title: 'Developing the Young Horse: The Art of Unhurried Cadence',
    slug: 'developing-the-young-horse-unhurried-cadence',
    excerpt: 'Why the first twelve months under saddle determine the athletic longevity of the modern dressage partner.',
    content: `There is no shortcut to correct collection. The physical structure of a 4-year-old horse is still ossifying, with the cervical vertebrae and sacroiliac joint among the last skeletal structures to fully mature.

At Sterling, our youngsters spend their fourth year primarily learning forward desire, straightness, and light acceptance of the bit through hacking, cavaletti work, and light lunging in long lines.

### The German Scale of Training: Re-examined

1. **Takt (Rhythm)**: Without steady, undisturbed rhythm, true relaxation is impossible.
2. **Losgelassenheit (Suppleness)**: Both mental and physical letting-go.
3. **Anlehnung (Contact)**: A trusting invitation into the rider's quietly listening hands.

When these three foundation stones are built without force, the horse offers collection as a natural consequence of strength, rather than as a posture of submission.`,
    category: 'Training',
    featured_image: '/images/hero.jpg',
    author: 'Claire Laurent (Head Trainer)',
    published: true,
    published_at: new Date(Date.now() - 28 * 86400000).toISOString(),
    seo_title: 'Developing the Young Horse | Sterling Horse Sales Journal',
    seo_description: 'A masterclass on training young dressage horses with patience, biomechanics, and longevity.',
    featured: false,
    created_at: new Date(Date.now() - 28 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'a1b2c3d4-3333-4444-7777-000000000003',
    title: 'Sanctuary and Sport: The Two Pillars of Sterling',
    slug: 'sanctuary-and-sport-two-pillars',
    excerpt: 'How our rehabilitation program for vulnerable horses enriches the emotional culture of our entire competition barn.',
    content: `Many in the equestrian industry see competitive sport breeding and equine rescue as polar opposites. At Sterling, we believe they are essential mirrors of one another.

The same acute sensitivity required to pilot an international Grand Prix test is born from understanding the fragile psychology of a rescued horse.

When our young riders and grooms spend their mornings tending to rescue horses like Hope and Rowan, they learn an indispensable truth: horses do not exist to serve human ambition. They are partners granted into our stewardship.

Every sale from our breeding barn directly funds our 40-hectare sanctuary wing, ensuring that our commitment to equine welfare is woven into every stride we take.`,
    category: 'Rescue',
    featured_image: '/images/hero.jpg',
    author: 'Henri Sterling',
    published: true,
    published_at: new Date(Date.now() - 45 * 86400000).toISOString(),
    seo_title: 'Sanctuary & Sport | Sterling Horse Sales Journal',
    seo_description: 'Why equine rescue and high-level breeding belong side-by-side in modern horsemanship.',
    featured: false,
    created_at: new Date(Date.now() - 45 * 86400000).toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const INITIAL_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Baroness Beatrice von Linden',
    email: 'beatrice.linden@vienna-equine.at',
    phone: '+43 664 123 4567',
    subject: 'Private Viewing Request for Artemis',
    message:
      'Dear Sterling Estate Concierge, I have been following the development of your Vivaldi lines with great admiration. I would like to arrange a private viewing of Artemis next month, including a veterinary inspection with our private team. We look forward to hearing from you.',
    horse_name: 'Artemis',
    horse_id: 'e2d3f4a1-1111-4444-9999-000000000001',
    status: 'new',
    created_at: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
];

export default {
  INITIAL_SITE_SETTINGS,
  INITIAL_HORSES,
  INITIAL_RESCUES,
  INITIAL_JOURNAL,
  INITIAL_MESSAGES,
};

