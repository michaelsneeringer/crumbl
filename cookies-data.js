const COOKIES = [
  {
    id: "dubai-chocolate-brownie",
    name: "Dubai-Style Chocolate Brownie",
    desc: "A soft fudgy brownie with a crunchy Kataifi and pistachio filling topped with a layer of milk chocolate and drizzled with even more pistachio cream.",
    img: "https://crumbl.video/4d8f989a-f339-4812-a626-c3f58af19d7b_DubaiBrownie_FlyingAerial_TECH.png",
    category: "top25",
    rank: 1,
    nutrition: { calories: 1010, fat: 56, carbs: 118, sugar: null, protein: 17, confidence: "medium" },
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Cocoa", "Kataifi (shredded phyllo pastry)", "Pistachio cream", "Milk chocolate"]
  },
  {
    id: "milk-chocolate-chip-cookie",
    name: "Milk Chocolate Chip Cookie",
    desc: "A classic milk chocolate chip cookie, baked thick, soft, and satisfying.",
    img: "https://crumbl.video/a5479faa-b292-4f8b-b35a-393fa7ebff3c_MilkChocolateChip_OverheadAerial_NoShadow_TECH.png",
    category: "classic",
    rank: 2,
    nutrition: { calories: 680, fat: 31, carbs: 94, sugar: null, protein: 5, confidence: "medium" },
    ingredients: ["Flour", "Butter", "Brown sugar", "Granulated sugar", "Eggs", "Milk chocolate chips", "Baking soda", "Vanilla extract", "Salt"]
  },
  {
    id: "smores-skillet-cookie",
    name: "S'mores Skillet Cookie ft. HERSHEY'S",
    desc: "A gooey graham cookie baked with melty pieces of HERSHEY'S Chocolate, topped with fluffy marshmallow mousse, a drizzle of melted chocolate, and a crunch of graham cracker streusel.",
    img: "https://crumbl.video/c41dfb2a-8797-4b64-9d10-eff20b0698a0_SmoresSkilletCookie_OverheadAerial_NoShadow_TECH.png",
    category: "classic",
    rank: 3,
    nutrition: { calories: 600, fat: 28, carbs: 84, sugar: null, protein: 4, confidence: "low" },
    ingredients: ["Graham cracker crumbs", "Flour", "Butter", "Sugar", "HERSHEY'S chocolate pieces", "Marshmallow mousse (marshmallow, cream)", "Chocolate drizzle", "Graham cracker streusel"]
  },
  {
    id: "cookies-cream-milkshake",
    name: "Cookies & Cream Milkshake Cookie ft. MINI OREO®",
    desc: "A chilly cookies & cream milkshake-inspired cookie bursting with OREO® cookie pieces from the base to the creamy vanilla buttercream, and finished with a MINI OREO® cookie.",
    img: "https://crumbl.video/3964c617-ce20-4546-add2-a6f42e8d6d4c_CookiesCreamMilkshakeFtMiniOreo_OverheadAerial_NoShadowTech.png",
    category: "top25",
    rank: 4,
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "OREO® cookie pieces", "Vanilla buttercream (butter, powdered sugar, vanilla)", "MINI OREO® cookie"]
  },
  {
    id: "semi-sweet-chocolate-chunk",
    name: "Semi-Sweet Chocolate Chunk Cookie",
    desc: "A classic cookie filled with irresistible semi-sweet chocolate chunks and a sprinkle of flaky sea salt.",
    img: null,
    category: "top25",
    rank: 5,
    nutrition: { calories: 600, fat: 30, carbs: 90, sugar: null, protein: 5, confidence: "low" },
    ingredients: ["Flour", "Butter", "Brown sugar", "Semi-sweet chocolate chunks", "Eggs", "Vanilla extract", "Flaky sea salt"]
  },
  {
    id: "strawberry-ice-cream-bar",
    name: "Strawberry Ice Cream Bar Cookie",
    desc: "A chilled cookie packed with strawberry and vanilla, layered with whipped white drop buttercream, and topped with a strawberry and vanilla streusel crunch.",
    img: "https://crumbl.video/1d467b99-bb37-4996-bca9-a743c7b07aec_StrawberryIceCreamBar_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 6,
    nutrition: { calories: 960, fat: 48, carbs: 124, sugar: null, protein: 12, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Freeze-dried strawberry", "Vanilla extract", "White drop buttercream (butter, powdered sugar)", "Strawberry & vanilla streusel"]
  },
  {
    id: "pink-sugar-cookie",
    name: "Pink Sugar Cookie",
    desc: "A classic almond sugar cookie topped with a silky pink swoop of real almond frosting.",
    img: "https://crumbl.video/568d7e50-71f9-4223-826a-72672312ddbb_ClassicPinkSugar_FlyingAerial_TECH.png",
    category: "classic",
    rank: 7,
    nutrition: { calories: 680, fat: 34, carbs: 92, sugar: 58, protein: 5, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Almond extract", "Almond frosting (butter, powdered sugar, almond extract)", "Pink food coloring"]
  },
  {
    id: "brownie-batter-cookie",
    name: "Brownie Batter Cookie",
    desc: "A gooey chocolate cookie packed with semi-sweet chocolate chips and topped with delectable brownie batter.",
    img: "https://crumbl.video/4ead7000-644b-4bd4-938a-622ec3194846_BrownieBatter_FlyingAerial_TECH.png",
    category: "classic",
    rank: 8,
    nutrition: { calories: 720, fat: 32, carbs: 96, sugar: null, protein: 8, confidence: "low" },
    ingredients: ["Flour", "Butter", "Brown sugar", "Cocoa powder", "Semi-sweet chocolate chips", "Eggs", "Brownie batter topping (cocoa, butter, sugar)"]
  },
  {
    id: "banana-pudding",
    name: "Banana Pudding",
    desc: "Creamy banana-packed layers of velvety vanilla pudding and vanilla wafers topped off with fresh whipped cream and wafer crumbs.",
    img: "https://crumbl.video/defb8841-61bd-4558-8ffa-aa9093d7db31_BananaPudding_CutAerial_TECH.png",
    category: "top25",
    rank: 9,
    nutrition: { calories: 640, fat: 44, carbs: 68, sugar: null, protein: null, confidence: "low" },
    ingredients: ["Vanilla wafers", "Fresh banana", "Vanilla pudding (milk, sugar, cornstarch, vanilla)", "Whipped cream", "Wafer crumbs"]
  },
  {
    id: "kentucky-butter-cake",
    name: "Kentucky Butter Cake Cookie",
    desc: "A warm yellow butter cake cookie smothered with a melt-in-your-mouth buttery glaze and topped with a sprinkle of powdered sugar.",
    img: "https://crumbl.video/0d63aa66-55e2-4833-8ef3-ef3941f3f2a9_KentuckyButterCake_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 10,
    nutrition: { calories: 640, fat: 25, carbs: 90, sugar: 40, protein: 10, confidence: "medium" },
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Buttermilk", "Vanilla extract", "Butter glaze (butter, sugar)", "Powdered sugar"]
  },
  {
    id: "biscoff-tres-leches",
    name: "Biscoff® Tres Leches Cake",
    desc: "A lightly spiced cake soaked in a classic tres leches sauce, topped with Lotus Biscoff® cookie butter, fresh whipped cream, Lotus Biscoff® cookie pieces, and a drizzle of melted cookie butter.",
    img: null,
    category: "top25",
    rank: 11,
    nutrition: { calories: 1080, fat: 64, carbs: null, sugar: 88, protein: null, confidence: "low" },
    ingredients: ["Flour", "Sugar", "Eggs", "Cinnamon", "Tres leches sauce (evaporated milk, condensed milk, whole milk)", "Lotus Biscoff® cookie butter", "Lotus Biscoff® cookie pieces", "Whipped cream"]
  },
  {
    id: "peanut-butter-cup-reeses",
    name: "Peanut Butter Cup Cookie ft. REESE'S",
    desc: "A classic peanut butter cookie topped with a pool of melted peanut butter chips, drizzled with gooey milk chocolate, and sprinkled with REESE'S Peanut Butter Cups.",
    img: null,
    category: "top25",
    rank: 12,
    nutrition: { calories: 434, fat: 24, carbs: 47, sugar: 29, protein: 10, confidence: "low" },
    ingredients: ["Flour", "Peanut butter", "Butter", "Sugar", "Eggs", "Peanut butter chips", "Milk chocolate drizzle", "REESE'S Peanut Butter Cups"]
  },
  {
    id: "churro-cookie",
    name: "Churro Cookie",
    desc: "A warm cinnamon cookie topped with a swirl of smooth cinnamon buttercream and a dusting of cinnamon sugar.",
    img: "https://crumbl.video/52a14b1a-89de-490d-8f18-137d69d7fc61_ChurroCookie_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 13,
    nutrition: { calories: 290, fat: 12, carbs: 43, sugar: 24, protein: 3, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Cinnamon", "Cinnamon buttercream (butter, powdered sugar, cinnamon)", "Cinnamon sugar dusting"]
  },
  {
    id: "chocolate-hazelnut-cheesecake",
    name: "Chocolate Hazelnut Cheesecake ft. NUTELLA®",
    desc: "A decadent chocolate and hazelnut cheesecake nestled on a cookies & cream crust, then crowned with smooth NUTELLA® and fluffy whipped cream.",
    img: "https://crumbl.video/71d04456-3118-4a05-859b-f465c0726c1a_HazelnutCheesecakeDessert_FlyingAerial_TECH.png",
    category: "top25",
    rank: 14,
    nutrition: { calories: 980, fat: 61, carbs: 83, sugar: null, protein: 13, confidence: "medium" },
    ingredients: ["Cream cheese", "Sugar", "Eggs", "Cookies & cream crust (chocolate cookie crumbs, butter)", "NUTELLA® hazelnut spread", "Whipped cream"]
  },
  {
    id: "pink-velvet-cake-cookie",
    name: "Pink Velvet Cake Cookie",
    desc: "A velvety cake batter cookie topped with smooth vanilla cream cheese frosting and a delicate sprinkle of pink velvet cookie crumbs.",
    img: "https://crumbl.video/94efc6a8-346c-4aa5-a69f-ead7c369bd72__PinkVelvetCake_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 15,
    nutrition: { calories: 730, fat: 28, carbs: 101, sugar: 52, protein: 6, confidence: "medium" },
    ingredients: ["Flour", "Butter", "Sugar", "Buttermilk", "Pink food coloring", "Vanilla cream cheese frosting (cream cheese, butter, powdered sugar, vanilla)", "Pink velvet cookie crumbs"]
  },
  {
    id: "cookie-dough-cookie",
    name: "Cookie Dough Cookie",
    desc: "A brown sugar cookie topped with creamy cookie dough buttercream and finished with chunks of cookie dough.",
    img: "https://crumbl.video/307d8893-0148-4853-b502-635e5e8b30fc_CookieDough_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 16,
    nutrition: null,
    ingredients: ["Flour", "Brown sugar", "Butter", "Eggs", "Cookie dough buttercream (butter, powdered sugar, brown sugar, heat-treated flour)", "Edible cookie dough chunks (heat-treated flour, chocolate chips)"]
  },
  {
    id: "molten-lava-cookie",
    name: "Molten Lava Cookie",
    desc: "A scrumptious dark chocolate cookie oozing with hot fudge and sprinkled with powdered sugar.",
    img: "https://crumbl.video/8717000c-4cb9-4695-adf1-55ecf85ce7f7_MoltenLavaCookie_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 17,
    nutrition: { calories: 820, fat: 32, carbs: 100, sugar: 48, protein: 8, confidence: "low" },
    ingredients: ["Flour", "Dark cocoa powder", "Butter", "Sugar", "Eggs", "Hot fudge filling (chocolate, cream, butter)", "Powdered sugar"]
  },
  {
    id: "french-toast-cookie",
    name: "French Toast Cookie",
    desc: "A fluffy, buttery cookie topped with cinnamon egg wash, a dollop of buttercream, a sweet syrup drizzle, and a sprinkle of powdered sugar.",
    img: "https://crumbl.video/33a8d652-2b23-4e10-84f3-3b50a231e9e5_FrenchToastCookie_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 18,
    nutrition: { calories: 810, fat: 35, carbs: 112, sugar: null, protein: 4, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Cinnamon egg wash (eggs, milk, cinnamon)", "Vanilla buttercream", "Syrup drizzle", "Powdered sugar"]
  },
  {
    id: "red-velvet-cupcake-cookie",
    name: "Red Velvet Cupcake Cookie",
    desc: "A red velvet cookie topped with a swirl of delicious vanilla cream cheese frosting and a sprinkle of crumbly red velvet cookie crumbs.",
    img: "https://crumbl.video/e0403610-1b07-4df9-87a5-975547a505a2_RedVelvetCupcake_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 19,
    nutrition: { calories: 880, fat: 41, carbs: 122, sugar: null, protein: 7, confidence: "medium" },
    ingredients: ["Flour", "Cocoa powder", "Red food coloring", "Buttermilk", "Butter", "Sugar", "Vanilla cream cheese frosting", "Red velvet cookie crumbs"]
  },
  {
    id: "salted-caramel-cheesecake",
    name: "Salted Caramel Cheesecake",
    desc: "A caramel cheesecake baked over a buttery graham cracker crust, then topped with a drizzle of caramel, a sprinkle of sea salt, and a dollop of whipped cream.",
    img: "https://crumbl.video/71b559c7-f68c-4a12-9239-093a62a63cfc_SaltedCaramelCheesecakeDessert_FlyingAerial_TECH.png",
    category: "top25",
    rank: 20,
    nutrition: null,
    ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham cracker crust (graham crumbs, butter)", "Caramel sauce", "Sea salt", "Whipped cream"]
  },
  {
    id: "waffle-cookie",
    name: "Waffle Cookie",
    desc: "A waffle cookie topped with a dollop of buttercream frosting and served with a side of syrup.",
    img: "https://crumbl.video/655d6603-7abc-45f7-909a-849e05c2c6c9_Waffle_OverheadAerial_NoShadow_Tech.png",
    category: "top25",
    rank: 21,
    nutrition: { calories: 920, fat: 36, carbs: 144, sugar: 76, protein: 8, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Buttermilk", "Vanilla buttercream frosting", "Syrup (served on the side)"]
  },
  {
    id: "snickerdoodle-cookie",
    name: "Snickerdoodle Cookie",
    desc: "A classic vanilla sugar cookie rolled in a sparkly cinnamon sugar coating.",
    img: "https://crumbl.video/59e8277d-8802-4371-a35a-25e31e3fc747_Snickerdoodle_OverheadAerial_NoShadow_TECH.png",
    category: "top25",
    rank: 22,
    nutrition: { calories: 630, fat: 24, carbs: 87, sugar: 39, protein: 5, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Cream of tartar", "Vanilla extract", "Cinnamon sugar coating"]
  },
  {
    id: "key-lime-pie-cookie",
    name: "Key Lime Pie Cookie",
    desc: "A refreshing chilled graham cookie layered with zesty lime filling, then topped with whipped cream, graham cracker crumbs, and a fresh lime wedge.",
    img: "https://crumbl.video/1e6ad007-a75d-4ad4-837e-3fbd4dd7be21_KeyLimePie_OverheadAerial_NoShadow.png",
    category: "top25",
    rank: 23,
    nutrition: { calories: 670, fat: 43, carbs: 73, sugar: null, protein: 6, confidence: "medium" },
    ingredients: ["Graham cracker crumbs", "Butter", "Sugar", "Lime juice & zest", "Sweetened condensed milk filling", "Whipped cream", "Fresh lime wedge"]
  },
  {
    id: "brookie-cookie",
    name: "Brookie Cookie",
    desc: "A semi-sweet chocolate chip cookie and a rich chocolate cookie perfectly baked together.",
    img: "https://crumbl.video/9cfa4aa7-4512-44a7-ba07-63807cc1c45b_Brookie_OverheadAerial_TECH.png",
    category: "top25",
    rank: 24,
    nutrition: { calories: 600, fat: 30, carbs: 80, sugar: null, protein: 6, confidence: "medium" },
    ingredients: ["Flour", "Butter", "Brown sugar", "Semi-sweet chocolate chips", "Cocoa powder", "Eggs", "Vanilla extract"]
  },
  {
    id: "celebration-cake-cookie",
    name: "Celebration Cake Cookie",
    desc: "A fluffy cake batter cookie with cake batter cream cheese frosting and a splash of rainbow sprinkles.",
    img: null,
    category: "top25",
    rank: 25,
    nutrition: { calories: 810, fat: null, carbs: null, sugar: null, protein: null, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Vanilla extract", "Cake batter cream cheese frosting (cream cheese, butter, powdered sugar)", "Rainbow sprinkles"]
  },
  // ── Classics (always available) ──
  {
    id: "chocolate-chip-cookie",
    name: "Chocolate Chip Cookie",
    desc: "A classic warm brown sugar cookie loaded with melty milk chocolate chips and rich semi-sweet chocolate chunks.",
    img: "https://crumbl.video/b79a9d21-35de-44d4-9916-7ec91d54cdb6_ChocolateChipCookie_OverheadAerial_NoShadow_TECH.png",
    category: "classic",
    nutrition: { calories: 550, fat: 30, carbs: 72, sugar: null, protein: 4, confidence: "medium" },
    ingredients: ["Flour", "Brown sugar", "Butter", "Eggs", "Milk chocolate chips", "Semi-sweet chocolate chunks", "Baking soda", "Vanilla extract", "Salt"]
  },
  // ── Rotating Weekly Menu (recent weeks) ──
  // ── Week of Jun 21–27 ──
  {
    id: "caramel-apple-cookie",
    name: "Caramel Apple Cookie",
    desc: "A warm cinnamon apple cookie topped with caramel cream cheese frosting, chopped Granny Smith apples, a drizzle of caramel, and a house-made streusel.",
    img: "https://crumbl.video/7b5f2317-63b8-4f4a-bc93-7c7657b1b247_CaramelApple_OverheadAerial_NoSHadow_TECH.png",
    category: "weekly",
    nutrition: { calories: 680, fat: 32, carbs: 92, sugar: null, protein: 4, confidence: "medium" },
    ingredients: ["Flour", "Butter", "Sugar", "Cinnamon", "Chopped Granny Smith apples", "Caramel cream cheese frosting", "Caramel drizzle", "Streusel topping"]
  },
  {
    id: "cotton-candy-cookie",
    name: "Cotton Candy Cookie",
    desc: "A fluffy vanilla cookie covered in cotton candy cream cheese frosting, with a sprinkle of popping candy.",
    img: "https://crumbl.video/36c7c6c5-2f22-4fe7-84a5-eac7175f753b_CottonCandyCookie_FlyingAerial_TECH.png",
    category: "weekly",
    nutrition: { calories: 680, fat: 44, carbs: 72, sugar: 40, protein: 4, confidence: "medium" },
    ingredients: ["Flour", "Butter", "Sugar", "Vanilla extract", "Cotton candy flavoring", "Cream cheese frosting", "Popping candy"]
  },
  {
    id: "strawberry-lemonade-cookie",
    name: "Strawberry Lemonade Cookie",
    desc: "A lemon sugar cookie topped with a swirl of lemon and strawberry buttercream and finished with slices of fresh lemon and fresh strawberry.",
    img: "https://crumbl.video/f6e7abf9-fc2a-4465-9fb1-5af76b878e9b_StrawberryLemonadeCookie_OverheadAerial_NoShadow_TECH.png",
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "Lemon zest & juice", "Lemon buttercream", "Strawberry buttercream", "Fresh lemon slice", "Fresh strawberry"]
  },
  {
    id: "fried-cookies-cream-cookie",
    name: "Fried Cookies & Cream Cookie",
    desc: "A buttery cookie stuffed with a whole cookies & cream cookie, rolled in a golden streusel, topped with a sweet butter glaze and extra streusel, then finished with a drizzle of cookies & cream glaze.",
    img: "https://crumbl.video/7c0d0834-3a4b-48f5-b08e-167081c5ed20_FriedCookiesCreamCookie_OverheadAerial_TECH.png",
    category: "weekly",
    nutrition: { calories: 620, fat: 31, carbs: 82, sugar: null, protein: 5, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Whole cookies & cream sandwich cookie", "Golden streusel coating", "Butter glaze", "Cookies & cream glaze drizzle"]
  },
  {
    id: "funnel-cake-cookie",
    name: "Funnel Cake Cookie",
    desc: "A buttery cookie baked with sweetened condensed milk and cookie crumbs, topped with a buttery glaze, then finished with a generous dusting of powdered sugar.",
    img: "https://crumbl.video/71e7a38b-5ef7-4d3f-b2c8-ff36f2364a4b_FunnelCakeCookie_OverheadAerial_NoShadow_TECH.png",
    category: "weekly",
    nutrition: { calories: null, fat: 35, carbs: 86, sugar: 52, protein: 6, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sweetened condensed milk", "Cookie crumbs", "Butter glaze", "Powdered sugar"]
  },
  {
    id: "cake-batter-cookie-thins",
    name: "Cake Batter Cookie Thins (Set of 2)",
    desc: "Two thin cake batter cookies complete with rainbow sprinkles, crisp edges, and chewy centers.",
    img: "https://crumbl.video/4a0da65d-edae-4e3b-8fee-eda8e17a782b_CakeBatterCookieThins_FlyingAerial_TECH_1.png",
    category: "weekly",
    nutrition: { calories: 390, fat: null, carbs: null, sugar: null, protein: null, confidence: "low" },
    ingredients: ["Flour", "Butter", "Sugar", "Cake batter flavoring", "Vanilla extract", "Rainbow sprinkles"]
  },
  {
    id: "dubai-chocolate-strawberry-cup",
    name: "Dubai-Style Chocolate Strawberry Cup",
    desc: "Layers of smooth milk chocolate, pistachio cream, crunchy toasted Kataifi pieces, and fresh strawberries.",
    img: "https://crumbl.video/1e8b3704-9076-4025-b356-5299f807e2a9_Dubai-StyleStrawberryCup_Aerial_TECH.png",
    category: "weekly",
    nutrition: null,
    ingredients: ["Milk chocolate", "Pistachio cream", "Toasted Kataifi (shredded phyllo pastry)", "Fresh strawberries"]
  },
  {
    id: "chocolate-strawberry-cup-gf",
    name: "Chocolate Strawberry Cup (Gluten-Friendly)",
    desc: "A gluten-friendly treat layered with chocolate and fresh strawberries — all the indulgence, none of the gluten.",
    img: "https://crumbl.video/4470bf6b-3b2a-4ccf-9f24-9b95c2e2f3bc_ChocolateStrawberryCup_GlutenFriendly_Aerial_TECH.png",
    category: "weekly",
    nutrition: null,
    ingredients: ["Chocolate (gluten-friendly)", "Fresh strawberries", "Gluten-friendly base (rice flour or almond flour blend)"]
  },
  // ── Week of Jul 6–11 ("Fan Favorites Week") ──
  {
    id: "marbled-stuffed-cheesecake-cookie",
    name: "Marbled Stuffed Cheesecake Cookie",
    desc: "A warm, marbled cookie made with brownie and vanilla cream cheese dough, stuffed with a rich cheesecake filling.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "Cocoa powder", "Cream cheese filling", "Eggs", "Vanilla extract"]
  },
  {
    id: "biscoff-skillet-cookie",
    name: "Biscoff® Skillet Cookie",
    desc: "A warm, spiced Biscoff® skillet cookie topped with mousse, Biscoff® cookie pieces, and a drizzle of melty Biscoff® cookie butter.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Brown sugar", "Cinnamon & spices", "Biscoff® cookie butter", "Biscoff® cookie pieces", "Mousse topping (cream, sugar)"]
  },
  {
    id: "birthday-cake-cookie-oreo",
    name: "Birthday Cake Cookie ft. OREO®",
    desc: "A warm cookie made with OREO® cookie pieces, covered in cake batter cream cheese frosting and topped with more OREO® pieces and rainbow sprinkles.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "OREO® cookie pieces", "Cake batter cream cheese frosting", "Rainbow sprinkles"]
  },
  {
    id: "caramel-shortbread-twix",
    name: "Caramel Shortbread Cookie ft. TWIX®",
    desc: "A chilled, shortbread-inspired cookie filled with TWIX® pieces, topped with caramel, milk chocolate, and chopped TWIX®.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "TWIX® pieces", "Caramel", "Milk chocolate"]
  },
  // ── Week of Jul 13–18 ("Beach Week") ──
  {
    id: "sandy-beach-banana-pudding-cup",
    name: "Sandy Beach Banana Pudding Cup",
    desc: "Banana pudding layered with vanilla pudding and vanilla wafers, topped with whipped cream and crushed vanilla wafers, served with a mini beach shovel.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Fresh banana", "Vanilla pudding (milk, sugar, cornstarch, vanilla)", "Vanilla wafers", "Whipped cream", "Crushed wafer crumbs"]
  },
  {
    id: "beach-bum-cookie",
    name: "Beach Bum Cookie",
    desc: "A graham cookie topped with blue honey cream cheese frosting, graham cracker crumbs, a peach ring \"float,\" and a teddy graham cracker lounging under a decorative parasol.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Graham cracker crumbs", "Flour", "Butter", "Sugar", "Blue honey cream cheese frosting (cream cheese, butter, honey)", "Peach ring candy", "Teddy graham cracker"]
  },
  {
    id: "key-lime-cheesecake",
    name: "Key Lime Cheesecake",
    desc: "Key lime cheesecake filling on a graham cracker crust, finished with a ring of whipped cream rosettes, graham crumbs, and fresh lime.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Cream cheese", "Sugar", "Eggs", "Key lime juice & zest", "Graham cracker crust (graham crumbs, butter)", "Whipped cream", "Fresh lime"]
  },
  {
    id: "molten-lava-cake",
    name: "Molten Lava Cake",
    desc: "A rich chocolate cake with a warm, molten center and a dollop of smooth vanilla mousse.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Dark chocolate", "Butter", "Sugar", "Eggs", "Vanilla mousse (cream, sugar, vanilla)"]
  },
  {
    id: "hawaiian-coconut-cookie",
    name: "Hawaiian Coconut Cookie",
    desc: "A soft cake batter cookie crowned with a colorful zig-zag of green, pink, purple, and yellow coconut cream cheese frosting.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Vanilla extract", "Coconut cream cheese frosting (cream cheese, butter, powdered sugar, coconut)", "Food coloring"]
  },
  {
    id: "pineapple-whip-cookie",
    name: "Pineapple Whip Cookie",
    desc: "A pineapple sugar cookie crowned with a whipped pineapple-flavored topping, inspired by the classic frozen pineapple dessert.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "Pineapple flavoring", "Whipped pineapple topping (cream, powdered sugar, pineapple)"]
  },
  {
    id: "chocolate-chip-cookie-thins",
    name: "Chocolate Chip Cookie Thins",
    desc: "A crispy, thin take on the classic chocolate chip cookie.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Brown sugar", "Milk chocolate chips", "Semi-sweet chocolate chunks", "Vanilla extract"]
  },
  // ── Week of Jul 20–25 ("All-Cookie-Thins Week") ──
  {
    id: "biscoff-cookie-thins",
    name: "Biscoff® Cookie Thins",
    desc: "Two thin cookie butter cookies rolled and baked with crunchy Biscoff® cookie pieces.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "Biscoff® cookie butter", "Biscoff® cookie pieces"]
  },
  {
    id: "dubai-chocolate-sandwich-cookie",
    name: "Dubai-Style Chocolate Sandwich Cookie",
    desc: "Two thin cocoa-based wafer cookies sandwiching a filling of pistachio cream and crispy kataifi, inspired by the viral Dubai chocolate trend.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Cocoa powder", "Butter", "Sugar", "Pistachio cream", "Kataifi (shredded phyllo pastry)"]
  },
  {
    id: "brownie-batter-cookie-thins",
    name: "Brownie Batter Cookie Thins",
    desc: "Two thin chocolate cookies packed with semi-sweet chocolate chips, topped with brownie batter.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Brown sugar", "Cocoa powder", "Semi-sweet chocolate chips", "Brownie batter topping"]
  },
  {
    id: "smores-cookie-thins",
    name: "S'mores Cookie Thins",
    desc: "Two thin, buttery graham cookies baked with melty marshmallow, topped with a drizzle of milk chocolate.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Graham cracker crumbs", "Flour", "Butter", "Sugar", "Marshmallow", "Milk chocolate drizzle"]
  },
  {
    id: "strawberry-crinkle-cookie-thins",
    name: "Strawberry Crinkle Cookie Thins",
    desc: "A thin strawberry cookie with a sweet powdered sugar crinkle finish.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "Freeze-dried strawberry", "Powdered sugar coating"]
  },
  {
    id: "mallow-sandwich-cookie-thins",
    name: "Mallow Sandwich Cookie Thins",
    desc: "Marshmallow cookies & cream mousse with gooey brownie pieces sandwiched between two thin cookies.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "Marshmallow cookies & cream mousse", "Brownie pieces"]
  },
  {
    id: "mms-cookie-thins",
    name: "M&M'S® Cookie Thins",
    desc: "Two delicately crisp thin cookies with caramelized edges, chewy centers, and M&M'S® Minis candies.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Brown sugar", "Eggs", "M&M'S® Minis candies"]
  },
  {
    id: "pink-sugar-cookie-thins",
    name: "Pink Sugar Cookie Thins",
    desc: "A thin take on the classic almond pink sugar cookie, topped with a swoop of pink almond frosting.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Butter", "Sugar", "Almond extract", "Pink almond frosting (butter, powdered sugar, almond extract)", "Pink food coloring"]
  },
  {
    id: "red-velvet-cookie-thins",
    name: "Red Velvet Cookie Thins",
    desc: "Thin red velvet cookies loaded with white chips and finished with a smooth white drizzle.",
    img: null,
    category: "weekly",
    nutrition: null,
    ingredients: ["Flour", "Cocoa powder", "Red food coloring", "Buttermilk", "Butter", "Sugar", "White chocolate chips", "White chocolate drizzle"]
  }
];
