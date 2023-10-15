/*   STEP 1   */
export const leagueID = "994623282387169280"; // your league ID
export const leagueName = "MNFL"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to MNFL!</p>
  <p>Welcome to the most thrilling and immersive fantasy football league experience you'll ever be a part of! We're excited to introduce you to our unique 32-team PPR/IDP league, where we go the extra yard to replicate the NFL in every way possible. We follow the NFL schedule, its divisions, and teams, ensuring you're right in the heart of the action.</p>
  <p>What sets us apart is our commitment to recognizing our managers. Weekly awards, season awards, and a supportive, mature, and fun league environment make this a fantastic long-term dynasty league. With our front page, we aim to get every manager's heart racing with excitement. Whether you're a seasoned pro or a rookie, you're about to embark on a journey filled with camaraderie, rivalry, and, most importantly, fun. Get ready for a league that's as passionate about the sport as you are!</p>
  <p>Our league isn't just about drafting players; it's about building lasting memories. So, lace up those virtual cleats, dive into the stats, and prepare for a fantasy football adventure like no other. Let's make this season a touchdown!</p>
  

  <h2>Weekly Awards</h2>
  <span>Week 6</span>
  <ul>
    <li>Skip Bayless Medal - worst decision award by starting a player that should have been benched</li>
    <li>Dolphins Eats Broncos Award - team that scores the most points in a week</li>
    <li>The Help Me Award - team that scores the least points in a week</li>
    <li>"L" Award - team with a long stretch of losing</li>
    <li>Patriots Way Award - team with the longest current win streak</li>
  </ul>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [

    {
      "managerID": "337720842697842688",
      "name": "imurfather",
      "photo": "https://sleepercdn.com/uploads/748e9f4dca1108c75d61598392708660.jpg"
    },
   {
      "managerID": "459580478010159104",
      "name": "NotSoLilRicky",
      "photo": "https://sleepercdn.com/uploads/276fde90f0e6f93642637e32a5f1324a.jpg"
   },
   {
    "memberID": "313878383924963840",
    "name": "Enzur",
    "photo": "https://sleepercdn.com/uploads/f366ea5d0b25ec13eac88d05e2c87498.jpg"
  },
  {
    "memberID": "346752096832393984",
    "name": "Dtrain",
    "photo": "https://sleepercdn.com/uploads/d78e48a733a2f89132d0ea2dd4cd9116.jpg"
  },
  {
    "memberID": "366722798425075712",
    "name": "Joe",
    "photo": "https://sleepercdn.com/uploads/11f5ad7c19da1081a5a5e1ca888f4ef7.jpg"
  },
  {
    "memberID": "390823810862159104",
    "name": "Xman",
    "photo": "https://sleepercdn.com/uploads/8c09ea824192a2d8a73c1e842c1c2c31.jpg"
  },
  {
    "memberID": "423820030508255744",
    "name": "Jacob A.",
    "photo": "https://sleepercdn.com/uploads/19f7d306f81daa6ecfd29e0c7d74e722.jpg"
  },
  {
    "memberID": "467828055394480128",
    "name": "buzzard77",
    "photo": "https://sleepercdn.com/uploads/68ef044aeb84dcb9c4d88a3c723e57e8.jpg"
  },
  {
    "memberID": "474350710301913088",
    "name": "Versace-Lemonade",
    "photo": "https://sleepercdn.com/uploads/6a15a06ca38d3e170a0a5b31a2e1fe60"
  },
  {
    "memberID": "545701002129784832",
    "name": "TagMeIfNeeded",
    "photo": "6fd60418ab05bb99436e38a12cd57110"
  },
  {
    "memberID": "601477012971913216",
    "name": "JJ2K2K23",
    "photo": "https://sleepercdn.com/uploads/cc73bbfec2462f1556e5672348274f50.jpg"
  },
  {
    "memberID": "606184270179938304",
    "name": "Bredmon08",
    "photo": "https://sleepercdn.com/uploads/cc73bbfec2462f1556e5672348274f50.jpg"
  },
  {
    "memberID": "647877856835231744",
    "name": "AllstarIsaac",
    "photo": "https://sleepercdn.com/uploads/1e27066c58ccd6800bd33c26555fdafd.jpg"
  },
  {
    "memberID": "731530802571100160",
    "name": "mitchell0315",
    "photo": "https://sleepercdn.com/uploads/c030db8c22a6c6603a6510b72f397b93.jpg"
  },
  {
    "memberID": "732098151896453120",
    "name": "fivewayrack",
    "photo": "https://sleepercdn.com/uploads/314132fe35fe7868ee241c404edab64a.jpg"
  },
  {
    "memberID": "735274165455704064",
    "name": "Seahawks2025",
    "photo": "https://sleepercdn.com/uploads/7d1c7c1f088c965bb15d7177fdd3ae52.jpg"
  },
  {
    "memberID": "741071870824185856",
    "name": "LlamaGod5413",
    "photo": "https://sleepercdn.com/uploads/6115f7510bf36b22ce7e89dbd4437524.jpg"
  },
  {
    "memberID": "745720717651390464",
    "name": "bot5",
    "photo": "https://sleepercdn.com/uploads/4cd04ca05ae7d850242b6defe88095ed.jpg"
  },
  {
    "memberID": "796947177220988928",
    "name": "Greatsslr123",
    "photo": "https://sleepercdn.com/uploads/b319fdf8b7b5b0359d3c78622ba4d70c.jpg"
  },
  {
    "memberID": "851519530114101248",
    "name": "barcoboom",
    "photo": "https://sleepercdn.com/uploads/33ef0d54f89cfe80ab1c5c6d2ccd31de.jpg"
  },
  {
    "memberID": "851713558554202112",
    "name": "MicahDPOY",
    "photo": "https://sleepercdn.com/uploads/3e4c498d2f360e7badcf1eb8a28f8b98.jpg"
  },
  {
    "memberID": "862067444699762688",
    "name": "n284",
    "photo": "https://sleepercdn.com/uploads/e3948975226f2e2d3f96c094be5d1dd3.jpg"
  },
  {
    "memberID": "867529328643276800",
    "name": "A1Saucy",
    "photo": "https://sleepercdn.com/uploads/a213ff5091f1a81065abe71cfb12ec3d.jpg"
  },
  {
    "memberID": "871827653521510400",
    "name": "cybersp78",
    "photo": "https://sleepercdn.com/uploads/faecd8d1554b11f50e93f17a85258c62.jpg"
  },
  {
    "memberID": "872697633389662208",
    "name": "OrderlyEric1",
    "photo": "https://sleepercdn.com/uploads/507cc8704a111c303bb004d272a60882"
  },
  {
    "memberID": "874379628322734080",
    "name": "baseball1314",
    "photo": "https://sleepercdn.com/uploads/b3338675f635c2c1f42b469621d38ec6.jpg"
  },
  {
    "memberID": "886769326932336640",
    "name": "judepalmer",
    "photo": "https://sleepercdn.com/uploads/87920b81e247368cade4d4b093d12f0f.jpg"
  },
  {
    "memberID": "887393546485948416",
    "name": "elijahdriesenga",
    "photo": "https://sleepercdn.com/uploads/dc0019e4c28e1a1e3b5259339c364e12.jpg"
  },
  {
    "memberID": "934195091051245568",
    "name": "3Goldfish",
    "photo": "https://sleepercdn.com/uploads/f92eac8190b0225d36a1e58390fc5301.jpg"
  },
  {
    "memberID": "949138306212651008",
    "name": "markblank1293",
    "photo": "https://sleepercdn.com/uploads/4f4090e5e9c3941414db40a871e3e909.jpg"
  },
  {
    "memberID": "982512161635246080",
    "name": "LORDVADERSFOOTBALL",
    "photo": "https://sleepercdn.com/uploads/c082e97ee76492ef2fcc8bb96eff721a.jpg"
  },
  {
    "memberID": "984492154535895040",
    "name": "Wasatch79",
    "photo": "https://sleepercdn.com/uploads/a34117ca21492d5153adf17a463c0b51.jpg"
  },
  {
    "memberID": "991793222705840128",
    "name": "Bears4Life2",
    "photo": "https://sleepercdn.com/uploads/c17c9982fda43240a209e4861cf24d61.jpg"
  },
  {
    "memberID": "994031351319875584",
    "name": "Emilauskas10",
    "photo": "https://sleepercdn.com/uploads/146261b7a7185f91afa0e0e0a2c6b1a6.jpg"
  },
  {
    "memberID": "994347160739131392",
    "name": "Dknutsonyoface",
    "photo": "https://sleepercdn.com/uploads/f027bfd0d449d996cbf4d1d99b3f5943.jpg"
  },
  {
    "memberID": "995748655250350080",
    "name": "bingB0NGbutta",
    "photo": "https://sleepercdn.com/uploads/635b7e31160231c4f7cd2da0cbb66ccc.jpg"
  },
  
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    