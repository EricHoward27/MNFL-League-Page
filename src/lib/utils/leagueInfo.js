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
  


  <h3>Playoffs Bracket Divsional Round</h3>
  <h4>AFC Playoffs Standings</h4>
  <div>
  <img src="/retired.png" alt="MNFL bracket" style="width:500px; height:600px;" />
  </div>

    <li>BREAKING NEWS</li>
    <h5>Wild Card matchups takesoff Week 14!! Only 1 weeks away!!</h5>
    <h5>Bengals, Dolphins, and Bills are fighting for the AFC bye week!</h5>
    <h5>49ers and Eagles clash to claim the NFC!!</h5>
    <h5>Other news...week 13 the playoffs bracket will be live on the Sleeper App and website. Stay tuned.</h5>
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
      "managerID": "67823407936716800",
      "name": "imurfather",
      "photo": "https://sleepercdn.com/uploads/5c47f67919331eadde3305716609b193.jpg"
     },
   {
      "managerID": "337720842697842688",
      "name": "donovini",
      "photo": "https://sleepercdn.com/uploads/748e9f4dca1108c75d61598392708660.jpg"
   },
   {
    "managerID": "459580478010159104",
    "name": "NotSoLilRicky",
    "photo": "https://sleepercdn.com/uploads/276fde90f0e6f93642637e32a5f1324a.jpg"
  },
  {
    "managerID": "467828055394480128",
    "name": "buzzard77",
    "photo": "https://sleepercdn.com/uploads/68ef044aeb84dcb9c4d88a3c723e57e8.jpg"
  },
  {
    "managerID": "474350710301913088",
    "name": "Versace-Lemonade",
    "photo": "https://sleepercdn.com/uploads/6a15a06ca38d3e170a0a5b31a2e1fe60"
  },
  {
    "managerID": "545701002129784832",
    "name": "TagMeIfNeeded",
    "photo": "https://sleepercdn.com/uploads/6fd60418ab05bb99436e38a12cd57110"
  },
  {
    "managerID": "601477012971913216",
    "name": "JJ2K2K23",
    "photo": "https://sleepercdn.com/uploads/cc73bbfec2462f1556e5672348274f50.jpg"
  },
  {
    "managerID": "606184270179938304",
    "name": "Bredmon08",
    "photo": "https://sleepercdn.com/uploads/f5c0336df604b8f69db9bb51f81cb5e5.jpg"
  },
  {
    "managerID": "647877856835231744",
    "name": "AllstarIsaac",
    "photo": "https://sleepercdn.com/uploads/1e27066c58ccd6800bd33c26555fdafd.jpg"
  },
  {
    "managerID": "731530802571100160",
    "name": "mitchell0315",
    "photo": "https://sleepercdn.com/uploads/c030db8c22a6c6603a6510b72f397b93.jpg"
  },
  {
    "managerID": "732098151896453120",
    "name": "fivewayrack",
    "photo": "https://sleepercdn.com/uploads/314132fe35fe7868ee241c404edab64a.jpg"
  },
  {
    "managerID": "735274165455704064",
    "name": "Seahawks2025",
    "photo": "https://sleepercdn.com/uploads/7d1c7c1f088c965bb15d7177fdd3ae52.jpg"
  },
  {
    "managerID": "741071870824185856",
    "name": "bot5",
    "photo": "https://sleepercdn.com/uploads/4cd04ca05ae7d850242b6defe88095ed.jpg"
  },
  {
    "managerID": "796947177220988928",
    "name": "Greatsslr123",
    "photo": "https://sleepercdn.com/uploads/b319fdf8b7b5b0359d3c78622ba4d70c.jpg"
  },
  {
    "managerID": "851519530114101248",
    "name": "barcoboom",
    "photo": "https://sleepercdn.com/uploads/33ef0d54f89cfe80ab1c5c6d2ccd31de.jpg"
  },
  {
    "managerID": "851713558554202112",
    "name": "MicahDPOY",
    "photo": "https://sleepercdn.com/uploads/3e4c498d2f360e7badcf1eb8a28f8b98.jpg"
  },
  {
    "managerID": "862067444699762688",
    "name": "n284",
    "photo": "https://sleepercdn.com/uploads/e3948975226f2e2d3f96c094be5d1dd3.jpg"
  },
  {
    "managerID": "867529328643276800",
    "name": "A1Saucy",
    "photo": "https://sleepercdn.com/uploads/a213ff5091f1a81065abe71cfb12ec3d.jpg"
  },
  {
    "managerID": "871827653521510400",
    "name": "cybersp78",
    "photo": "https://sleepercdn.com/uploads/faecd8d1554b11f50e93f17a85258c62.jpg"
  },
  {
    "managerID": "872697633389662208",
    "name": "OrderlyEric1",
    "photo": "https://sleepercdn.com/uploads/507cc8704a111c303bb004d272a60882"
  },
  {
    "managerID": "874379628322734080",
    "name": "baseball1314",
    "photo": "https://sleepercdn.com/uploads/b3338675f635c2c1f42b469621d38ec6"
  },
  {
    "managerID": "886769326932336640",
    "name": "judepalmer",
    "photo": "https://sleepercdn.com/uploads/87920b81e247368cade4d4b093d12f0f.jpg"
  },
  {
    "managerID": "887393546485948416",
    "name": "elijahdriesenga",
    "photo": "https://sleepercdn.com/uploads/dc0019e4c28e1a1e3b5259339c364e12"
  },
  {
    "managerID": "934195091051245568",
    "name": "3Goldfish",
    "photo": "https://sleepercdn.com/uploads/f92eac8190b0225d36a1e58390fc5301.jpg"
  },
  {
    "managerID": "949138306212651008",
    "name": "markblank1293",
    "photo": "https://sleepercdn.com/uploads/4f4090e5e9c3941414db40a871e3e909"
  },
  {
    "managerID": "982512161635246080",
    "name": "LORDVADERSFOOTBALL",
    "photo": "https://sleepercdn.com/uploads/c082e97ee76492ef2fcc8bb96eff721a.jpg"
  },
  {
    "managerID": "984492154535895040",
    "name": "Wasatch79",
    "photo": "https://sleepercdn.com/uploads/a34117ca21492d5153adf17a463c0b51.jpg"
  },
  {
    "managerID": "991793222705840128",
    "name": "Bears4Life2",
    "photo": "https://sleepercdn.com/uploads/c17c9982fda43240a209e4861cf24d61.jpg"
  },
  {
    "managerID": "994031351319875584",
    "name": "Emilauskas10",
    "photo": "https://sleepercdn.com/uploads/146261b7a7185f91afa0e0e0a2c6b1a6.jpg"
  },
  {
    "managerID": "994347160739131392",
    "name": "Dknutsonyoface",
    "photo": "https://sleepercdn.com/uploads/f027bfd0d449d996cbf4d1d99b3f5943.jpg"
  },
  {
    "managerID": "995748655250350080",
    "name": "🥷🏿BILLS MAFIA🥷🏿",
    "photo": "https://sleepercdn.com/uploads/635b7e31160231c4f7cd2da0cbb66ccc.jpg"
  },



    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
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
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
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
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
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
    