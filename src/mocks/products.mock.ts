export interface IIncludedAndExtraIngredient {
  id: number;
  title: string;
  price: number;
}
export type IFilter =
  | "agneau"
  | "boeuf"
  | "poulet"
  | "vegetarien"
  | "dessert"
  | "boisson";

export type ProductCategoryType =
  | "entrées"
  | "plats"
  | "grillades"
  | "desserts"
  | "boissons";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  picture: string;
  includedAndExtraIngredients: IIncludedAndExtraIngredient[];
  filter: IFilter;
  category: ProductCategoryType;
}

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    title: "Chorba Saharienne",
    description:
      "Voyagez au cœur du Sahara avec notre Chorba Saharienne, un délicieux bouillon réconfortant aux parfums envoûtants. \n\n Inspirée des traditions culinaires ancestrales du désert, cette soupe est un trésor de saveurs authentiques. Notre Chorba Saharienne est préparée avec soin, en combinant des légumes frais et des épices exotiques, pour une expérience gustative inoubliable. \n\n Chaque cuillère vous transporte dans un monde de chaleur et de convivialité, vous rappelant les délices des repas partagés autour du feu dans le désert. Savourez la générosité du Sahara en Bouche avec cette soupe traditionnelle, qui réchauffe le cœur et apaise l'âme. Que vous soyez à la recherche d'une aventure culinaire ou d'un retour aux racines, notre Chorba Saharienne est un choix réconfortant qui vous enveloppe de l'esprit authentique du désert",
    price: 7,
    picture: "assets/img/entrees/chorbaSaharienne.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Légumes frais",
        price: 0,
      },
      {
        id: 2,
        title: "Mélange d'épices",
        price: 0,
      },
      {
        id: 3,
        title: "Piment grillé",
        price: 2,
      },
      {
        id: 4,
        title: "Vermicelles",
        price: 2,
      },
    ],
    filter: "vegetarien",
    category: "entrées",
  },
  {
    id: 2,
    title: "Salade Méchouia",
    description:
      "La salade méchouia, une explosion de saveurs sahariennes dans chaque bouchée ! Mélange exquis de poivrons grillés, de tomates charnues et d'épices traditionnelles, cette salade vous transporte instantanément au cœur du désert. Savoureuse, colorée et pleine de fraîcheur, elle incarne l'essence même de la cuisine saharienne, un délice qui vous fera succomber dès la première cuillère.",
    price: 6,
    picture: "../assets/img/entrees/saladeMechouia.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Poivrons grillées",
        price: 0,
      },
      {
        id: 2,
        title: "Tomates grillées",
        price: 0,
      },
      {
        id: 3,
        title: "Piment grillé",
        price: 3,
      },
      {
        id: 4,
        title: "Oeufs",
        price: 3,
      },
    ],
    filter: "vegetarien",
    category: "entrées",
  },
  {
    id: 3,
    title: "Salade fraicheur",
    description:
      "Notre Salade Fraîcheur est un véritable oasis gustatif pour les chaudes journées d'été. Un mélange rafraîchissant de légumes croquants, de verdures croustillantes et d'une touche de fraîcheur fruitée. \n\n Cultivée avec soin et présentée avec amour, chaque bouchée est une explosion de saveurs vivifiantes, vous transportant dans une oasis de délices. \n\n Laissez-vous enivrer par l'équilibre parfait des textures et des arômes, tandis que vous savourez chaque ingrédient frais et sain. Que ce soit pour les aventuriers culinaires en quête de nouvelles découvertes ou les fins gourmets soucieux de leur bien-être, notre Salade Fraîcheur incarne l'essence même d'un repas sain, léger et délicieusement satisfaisant. Une pause rafraîchissante qui vous emporte loin du tumulte quotidien et vous apporte la sérénité d'un oasis culinaire.",
    price: 4,
    picture: "../assets/img/entrees/saladeFraicheur.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Légumes croquant de saison",
        price: 0,
      },
      {
        id: 2,
        title: "Sauce huile d'olive",
        price: 0,
      },
      {
        id: 3,
        title: "Aromates frais",
        price: 2,
      },
      {
        id: 4,
        title: "Sauce sucrée",
        price: 2,
      },
    ],
    filter: "vegetarien",
    category: "entrées",
  },
  {
    id: 4,
    title: "Bricks à la viande",
    description:
      "Découvrez l'irrésistible délice de nos Bricks à la Viande, une explosion de saveurs enrobée dans une délicate couche croustillante. \n\n Préparées avec des ingrédients frais et de qualité, ces délicieuses bricks sont garnies d'un savoureux mélange de viande finement assaisonnée, d'oignons caramélisés et d'épices exquises. Chaque bouchée est une harmonie parfaite entre la tendresse de la viande et la légèreté de la feuille de brick, vous transportant dans une aventure culinaire empreinte de tradition. Un véritable voyage pour les papilles, ces Bricks à la Viande combleront les gourmets en quête de plaisirs authentiques. \n\n Laissez-vous séduire par l'explosion de goûts et de textures de notre création culinaire, qui évoque les saveurs du Sahara à chaque dégustation. Une expérience gustative inoubliable qui vous invite à explorer le mariage subtil entre la douceur et le croquant, et à savourer la chaleur de l'authenticité.",
    price: 5,
    picture: "../assets/img/entrees/bricksViande.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Viande hachées",
        price: 0,
      },
      {
        id: 2,
        title: "Epices",
        price: 0,
      },
      {
        id: 3,
        title: "Poulet",
        price: 2,
      },
      {
        id: 4,
        title: "Oeuf",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "entrées",
  },
  {
    id: 5,
    title: "Bricks aux légumes du Sahara",
    description:
      "Découvrez une symphonie de saveurs du Sahara avec nos Bricks aux Légumes. Inspirées des recettes traditionnelles de la région, ces délicieuses bricks combinent une variété de légumes frais et colorés, savamment relevés d'épices sahariennes. Chaque bouchée est un voyage gustatif, vous transportant au cœur du désert avec des arômes envoûtants et des textures délicatement croustillantes. Les légumes soigneusement sélectionnés apportent une fraîcheur incomparable à ce plat, tandis que les épices authentiques ajoutent une touche de chaleur et d'exotisme. \n\n Que vous soyez à la recherche d'un plat végétarien plein de saveurs ou d'une expérience culinaire inspirée des traditions du Sahara, nos Bricks aux Légumes sont une invitation à découvrir l'essence même de la cuisine saharienne. Une véritable oasis de goûts et de couleurs qui ravira vos papilles à chaque dégustation.",
    price: 5,
    picture: "../assets/img/entrees/bricksLegumes.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Légumes frais",
        price: 0,
      },
      {
        id: 2,
        title: "Epices & aromates",
        price: 0,
      },
      {
        id: 3,
        title: "Graine de sésame",
        price: 2,
      },
      {
        id: 4,
        title: "Piment",
        price: 2,
      },
    ],
    filter: "vegetarien",
    category: "entrées",
  },
  {
    id: 6,
    title: "Pastels",
    description:
      "Découvrez nos succulents Pastels, une délicieuse spécialité africaine qui égayera vos papilles avec ses saveurs exotiques. Préparés avec passion et authenticité, nos Pastels sont une invitation à un voyage culinaire inoubliable. Nos Pastels sont de délicieux beignets fourrés d'une savoureuse farce, composée de viande hachée, de légumes et d'épices, le tout soigneusement enveloppé dans une pâte croustillante. Chaque bouchée vous offre un mélange équilibré de textures et de goûts qui éveille vos sens. Que ce soit pour une collation gourmande ou pour accompagner un repas, nos Pastels sont un pur délice qui séduit petits et grands. Venez déguster ces créations culinaires qui célèbrent l'art de la pâtisserie africaine. Nos Pastels sont une invitation à découvrir les saveurs envoûtantes de l'Afrique, à partager entre amis ou en famille pour des moments de convivialité et de plaisir. Une expérience gustative qui vous transporte dans l'univers ensoleillé de la cuisine africaine, où les traditions séculaires se mêlent aux délices sucrés et salés pour un voyage gastronomique inoubliable.",
    price: 6,
    picture: "../assets/img/entrees/pastels.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Viande hachée",
        price: 0,
      },
      {
        id: 2,
        title: "Légume frais",
        price: 0,
      },
      {
        id: 3,
        title: "Piment",
        price: 2,
      },
      {
        id: 4,
        title: "Oeuf",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "entrées",
  },
  {
    id: 7,
    title: "Couscous Royal Saharien",
    description:
      "Le Couscous Royal Saharien est une véritable célébration des saveurs du désert. Préparé avec soin et passion, ce plat emblématique est un festin complet qui rassemble les délices de la cuisine saharienne. Savourez la tendresse des grains de couscous cuits à la perfection, associée à une délicieuse variété de viandes exquises. Agrémenté de légumes frais et de fruits secs, le Couscous Royal Saharien dévoile une palette de textures et d'arômes irrésistibles. Les épices traditionnelles du Sahara rehaussent chaque bouchée, évoquant les parfums envoûtants du désert et transportant vos papilles dans une aventure gustative inoubliable. \n\n Servi avec générosité et convivialité, le Couscous Royal Saharien est bien plus qu'un simple plat, c'est une expérience culinaire qui honore l'essence même de la cuisine saharienne et réunit les convives autour d'un repas mémorable.",
    price: 22,
    picture: "../assets/img/plats/couscousRoyal.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Poulet",
        price: 0,
      },
      {
        id: 2,
        title: "Boeuf",
        price: 0,
      },
      {
        id: 3,
        title: "Merguez",
        price: 2,
      },
      {
        id: 4,
        title: "Supplément fruits secs",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "plats",
  },
  {
    id: 8,
    title: "Couscous Végétarien",
    description:
      "Le Couscous Végétarien est une symphonie de saveurs végétales, une célébration de la cuisine saine et délicieuse. Préparé avec des ingrédients frais et colorés, ce plat délicat est une option gourmande pour les amateurs de légumes et de saveurs exotiques. Les grains de couscous légèrement épicés servent de toile de fond à une variété de légumes croquants tels que les carottes, les courgettes, les poivrons et les pois chiches, le tout agrémenté d'herbes fraîches et d'épices authentiques. Chaque bouchée est une véritable explosion de goûts, vous invitant à un voyage gustatif équilibré et nutritif. Le Couscous Végétarien est plus qu'un simple plat sans viande, c'est une expérience culinaire qui prouve que la cuisine végétarienne peut être tout aussi délicieuse et satisfaisante. Que vous soyez végétarien ou simplement à la recherche d'une alternative saine et savoureuse, notre Couscous Végétarien est une invitation à explorer les délices des légumes du Sahara dans toute leur splendeur.",
    price: 17,
    picture: "../assets/img/plats/couscousVege.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Mélange de légumes du Sahara",
        price: 0,
      },
      {
        id: 2,
        title: "Aromates",
        price: 0,
      },
      {
        id: 3,
        title: "Fruits secs",
        price: 2,
      },
      {
        id: 4,
        title: "Merguez végétarienne",
        price: 2,
      },
    ],
    filter: "vegetarien",
    category: "plats",
  },
  {
    id: 9,
    title: "Tajine Kefta aux oeufs",
    description:
      " Le Tajine Kefta aux œufs est un délice emblématique de la cuisine marocaine, offrant une harmonie parfaite entre des boulettes de viande épicées et des œufs délicatement pochés. C'est un plat réconfortant, plein de saveurs et de textures qui évoquent l'authenticité des traditions culinaires marocaines. Les boulettes de kefta, préparées avec un mélange de viande hachée, d'oignons, d'herbes et d'épices, sont mijotées dans une sauce tomate parfumée. Les œufs sont ensuite ajoutés pour cuire à la perfection dans la sauce, créant une union délicieuse entre la viande et les œufs moelleux. \n\n Chaque bouchée est une expérience gustative mémorable, avec des notes épicées, une douceur veloutée et des parfums envoûtants qui éveillent les sens. Le Tajine Kefta aux œufs est une invitation à se délecter des trésors culinaires du Maroc, un régal chaleureux qui fait honneur à l'art de la cuisine tajine.",
    price: 19,
    picture: "../assets/img/plats/tajineKeftaOeufs.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Kefta",
        price: 0,
      },
      {
        id: 2,
        title: "Oeufs",
        price: 0,
      },
      {
        id: 3,
        title: "Supplément légumes frais",
        price: 2,
      },
      {
        id: 4,
        title: "Supplément kefta",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "plats",
  },
  {
    id: 10,
    title: "Tajine légumes & dattes",
    description:
      "Le Tajine Légumes & Dattes est une fusion enchanteresse entre les saveurs végétales et sucrées du Sahara. Préparé avec amour et créativité, ce plat délicat et équilibré marie harmonieusement une variété de légumes frais et croquants avec la douceur naturelle des dattes. \n\n Les légumes, tels que les carottes, les courgettes, les patates douces et les oignons, sont mijotés dans une sauce aromatique, riche en épices traditionnelles du Sahara. Les dattes succulentes ajoutent une touche de douceur subtile et viennent compléter cette symphonie de saveurs. Chaque bouchée est un voyage gustatif unique, où les textures se rencontrent et les arômes se mêlent pour vous offrir une expérience culinaire inoubliable. \n\n Le Tajine Légumes & Dattes est bien plus qu'un simple plat végétarien, c'est une ode à la diversité des ingrédients du Sahara et à l'art de la cuisine tajine. Un délice qui comblera les palais les plus fins et éveillera en vous le charme exquis de la cuisine saharienne.",
    price: 17,
    picture: "../assets/img/plats/tajineDattes.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Légumes frais",
        price: 0,
      },
      {
        id: 2,
        title: "Dattes",
        price: 0,
      },
      {
        id: 3,
        title: "Amandes effilées",
        price: 2,
      },
      {
        id: 4,
        title: "Miel",
        price: 2,
      },
    ],
    filter: "vegetarien",
    category: "plats",
  },
  {
    id: 11,
    title: "Biryani Saharien",
    description:
      "Le Biryani Saharien est une véritable perle culinaire qui puise son inspiration au cœur du Sahara. Mariant les épices exotiques, le riz basmati parfumé et des ingrédients authentiques, ce plat emblématique vous offre un voyage gustatif captivant. \n\n Savourez la tendresse des morceaux d'agneau fondants, associée à la fraîcheur des légumes et des fruits secs soigneusement choisis. Chaque grain de riz est imprégné d'une symphonie d'arômes, révélant la richesse des traditions sahariennes. Le Biryani Saharien est bien plus qu'un simple plat, c'est un hommage à l'héritage culinaire du Sahara, une véritable célébration de la diversité des saveurs. Une fois que vous aurez goûté à cette merveilleuse harmonie de goûts, vous serez transporté vers des horizons lointains et envoûtants. Un délice qui vous invite à explorer la magie du Sahara à chaque dégustation.",
    price: 22,
    picture: "../assets/img/plats/biryaniSaharien.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Riz parfumé",
        price: 0,
      },
      {
        id: 2,
        title: "Légumes frais",
        price: 0,
      },
      {
        id: 3,
        title: "Piment",
        price: 2,
      },
      {
        id: 4,
        title: "Agneau",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "plats",
  },
  {
    id: 12,
    title: "Boulette de viande au mil",
    description:
      "Les Boulettes de Viande au Mil sont un trésor culinaire unique du Sahara, alliant la chaleur réconfortante des boulettes de viande à la richesse du mil, une céréale précieuse et ancestrale. Ces délicates boulettes sont préparées avec une viande finement hachée, mélangée à des épices savoureuses et des herbes aromatiques. Enrobées de mil, elles offrent une texture délicate et une saveur rustique qui évoquent les traditions culinaires du Sahara. Chaque bouchée est un véritable plaisir, une symphonie de goûts et de sensations qui éveillent les souvenirs des repas partagés dans le désert. Les Boulettes de Viande au Mil sont bien plus qu'un simple plat, elles sont un hommage à l'authenticité et à la générosité de la cuisine saharienne. Laissez-vous emporter par l'essence même du Sahara à chaque dégustation, et savourez cette expérience culinaire traditionnelle, qui marie avec harmonie la viande et le mil dans une danse de saveurs et d'émotions.",
    price: 22,
    picture: "../assets/img/plats/bouletteViandeAuMil.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Mil",
        price: 0,
      },
      {
        id: 2,
        title: "Boeuf",
        price: 0,
      },
      {
        id: 3,
        title: "Olives",
        price: 2,
      },
      {
        id: 4,
        title: "Sauce tomate",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "plats",
  },
  {
    id: 13,
    title: "Brochettes d'agneau grillées",
    description:
      "Les Brochettes d'Agneau Grillées sont un délice irrésistible qui capture l'essence même du Sahara. Préparées avec soin et passion, ces brochettes mettent à l'honneur la tendresse de l'agneau, sublimée par des épices sahariennes qui éveillent les papilles. Chaque morceau d'agneau est mariné pour rehausser sa saveur naturelle et est ensuite enfilé sur une brochette pour une cuisson parfaite sur le gril. Le résultat est une explosion de goûts envoûtants et de textures succulentes, rappelant les festins partagés dans le désert. Les Brochettes d'Agneau Grillées sont bien plus qu'un plat, elles sont une expérience culinaire qui vous transporte au cœur du Sahara à chaque dégustation. Une symphonie de saveurs qui évoque la chaleur du désert et la convivialité des repas partagés entre amis et famille. Laissez-vous séduire par ce trésor culinaire, qui incarne l'authenticité et l'hospitalité sahariennes. Savourez ces brochettes grillées avec enthousiasme et laissez-vous porter par la magie du Sahara à chaque bouchée.",
    price: 17,
    picture: "../assets/img/grillades/brochettesAgneauGrillees.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Agneau",
        price: 0,
      },
      {
        id: 2,
        title: "Poivron",
        price: 0,
      },
      {
        id: 3,
        title: "Thym",
        price: 2,
      },
      {
        id: 4,
        title: "Tomate",
        price: 2,
      },
    ],
    filter: "agneau",
    category: "grillades",
  },
  {
    id: 14,
    title: "Brochettes de boeuf",
    description:
      "Les Brochettes de Bœuf sont un régal de choix qui ravit les papilles à chaque dégustation. Préparées avec des morceaux tendres de bœuf de qualité, ces brochettes sont une explosion de saveurs juteuses et délicieuses. Le bœuf est mariné dans un mélange d'épices savoureuses, d'herbes fraîches et d'huile d'olive, qui lui confèrent une saveur irrésistible. Enfilées sur des brochettes et grillées à la perfection, les brochettes de bœuf dévoilent une texture tendre et une légère touche fumée. Chaque bouchée est une invitation à un voyage culinaire exquis, révélant l'essence même de la viande de qualité et de la cuisine grillée. Les Brochettes de Bœuf sont un choix parfait pour les amateurs de viande qui recherchent une expérience gourmande et satisfaisante. Savourez ces brochettes grillées avec plaisir et partagez-les avec vos proches pour une délicieuse expérience conviviale. Que ce soit pour un repas en famille ou un moment de plaisir entre amis, ces brochettes de bœuf sont un choix sûr pour éveiller les sens et régaler les palais.",
    price: 15,
    picture: "../assets/img/grillades/brochettesBoeuf.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Boeuf",
        price: 0,
      },
      {
        id: 2,
        title: "Persil",
        price: 0,
      },
      {
        id: 3,
        title: "Graines de nigelles",
        price: 2,
      },
      {
        id: 4,
        title: "Poivron",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "grillades",
  },
  {
    id: 15,
    title: "Merguez grillées",
    description:
      " Les Merguez Grillées sont une véritable explosion de saveurs épicées et ensoleillées qui évoquent l'authenticité du Sahara. Préparées avec une combinaison savoureuse de viandes hachées et d'un mélange d'épices sahariennes traditionnelles, ces saucisses sont un incontournable de la cuisine nord-africaine. Leur couleur rouge vif et leur goût épicé, relevé d'une touche de chaleur, font des Merguez Grillées un plaisir irrésistible pour les amateurs de saveurs audacieuses. Une fois grillées à la perfection, elles dégagent des parfums envoûtants qui éveillent les sens et transportent les papilles directement au cœur du désert. Que ce soit accompagnées de légumes grillés, de couscous ou de pain frais, les Merguez Grillées sont une expérience gustative à part entière. Elles sont parfaites pour les moments conviviaux, les rassemblements festifs et pour ceux qui cherchent à découvrir l'essence même de la cuisine saharienne. Savourez ces délices épicés avec enthousiasme, et laissez-vous transporter dans une aventure culinaire où l'exotisme et la générosité des saveurs sahariennes règnent en maîtres.",
    price: 15,
    picture: "../assets/img/grillades/merguezGrillees.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Boeuf",
        price: 0,
      },
      {
        id: 2,
        title: "Persil",
        price: 0,
      },
      {
        id: 3,
        title: "Pomme de terre",
        price: 2,
      },
      {
        id: 4,
        title: "Poivron",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "grillades",
  },
  {
    id: 16,
    title: "Keftas de boeuf grillées",
    description:
      "Les Keftas de Bœuf Grillées sont un vrai délice qui enchantera vos papilles. Préparées avec soin à partir de viande de bœuf hachée et d'épices savoureuses, ces petites boulettes grillées sont une explosion de goûts et de textures. Chaque Kefta est façonnée avec amour, combinant la tendreté du bœuf avec une harmonie d'épices qui révèle l'essence même de la cuisine saharienne. \n\n Grillées à la perfection, les Keftas offrent une surface croustillante et un intérieur juteux qui éveilleront votre appétit dès la première bouchée. Savourez ces délices avec plaisir et laissez-vous transporter dans un voyage culinaire qui vous fera découvrir la richesse des saveurs sahariennes. Les Keftas de Bœuf Grillées sont l'incarnation de la convivialité et de la générosité culinaire du Sahara, une expérience gustative inoubliable à partager avec vos proches.",
    price: 13,
    picture: "../assets/img/grillades/keftaBoeufGrillees.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Boeuf",
        price: 0,
      },
      {
        id: 2,
        title: "Persil",
        price: 0,
      },
      {
        id: 3,
        title: "Pomme de terre",
        price: 2,
      },
      {
        id: 4,
        title: "Piment",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "grillades",
  },
  {
    id: 17,
    title: "Méchoui",
    description:
      "Le Méchoui, c'est bien plus qu'un plat, c'est une expérience gustative et sensorielle qui vous transporte au cœur du désert. Pour cette préparation exceptionnelle, nous sélectionnons méticuleusement des agneaux de première qualité, que nous assaisonnons avec un mélange d'épices et d'herbes exotiques. \n\n Cuisinée lentement à la broche, la viande devient tendre, juteuse et parfumée, tandis que la peau croustillante révèle une explosion de saveurs. Venez partager cette expérience authentique avec vos proches et laissez-vous séduire par les délices du Méchoui. Au restaurant Le Sahara en Bouche, nous sommes fiers de vous offrir une aventure culinaire qui restera gravée dans vos souvenirs.",
    price: 32,
    picture: "../assets/img/grillades/mechoui.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Agneau",
        price: 0,
      },
      {
        id: 2,
        title: "Epices sahariennes",
        price: 0,
      },
      {
        id: 3,
        title: "Accompagnement : salade",
        price: 2,
      },
      {
        id: 4,
        title: "Accompagnement : Légumes grillés",
        price: 2,
      },
    ],
    filter: "agneau",
    category: "grillades",
  },
  {
    id: 18,
    title: "Chawarma Saharien",
    description:
      "Découvrez notre savoureuse Chawarma Sahara, une spécialité qui vous transporte au cœur du Sahara avec ses saveurs exotiques et délicieuses. \n\n Préparée avec soin et passion, notre Chawarma Sahara est un véritable régal pour les amateurs de cuisine saharienne. Notre Chawarma Sahara est composée de fines tranches de viande marinée qui sont grillées à la broche jusqu'à atteindre une texture tendre et juteuse. La viande est ensuite accompagnée d'une variété de légumes frais, de sauces savoureuses et d'herbes parfumées. Chaque bouchée est une symphonie de saveurs, où les épices sahariennes envoûtantes se mêlent à la fraîcheur des légumes pour créer une expérience gustative exceptionnelle, inspirée des traditions culinaires du Sahara. Venez déguster cette délicieuse spécialité qui célèbre la générosité de la cuisine saharienne. \n\n Notre Chawarma Sahara est une invitation à un voyage culinaire exquis, à partager avec vos proches pour des moments conviviaux et gourmands. Une expérience gustative qui vous transporte dans un univers de saveurs authentiques, où les délices culinaires du Sahara vous offrent une aventure culinaire inoubliable.",
    price: 32,
    picture: "../assets/img/grillades/chawarma.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Chawarma",
        price: 0,
      },
      {
        id: 2,
        title: "Légumes frais",
        price: 0,
      },
      {
        id: 3,
        title: "Accompagnement : Pain Saharien",
        price: 2,
      },
      {
        id: 4,
        title: "Piment",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "grillades",
  },
  {
    id: 19,
    title: "Makrout",
    description:
      "Le Makrout est une délicieuse pâtisserie emblématique de la cuisine du Maghreb. Préparé avec amour et tradition, le Makrout est un véritable trésor sucré qui ravit les palais avec sa douceur et ses arômes envoûtants. Cette pâtisserie est composée d'une pâte à base de semoule fine et de beurre, qui est façonnée en petits losanges ou en cylindres. La pâte est ensuite garnie d'une délicieuse pâte de dattes sucrée et parfumée, le tout étant cuit jusqu'à ce qu'il atteigne une belle teinte dorée. \n\n Chaque bouchée de Makrout est une expérience gustative inoubliable, évoquant les traditions familiales et les festivités du Maghreb. Cette pâtisserie sucrée est un symbole de générosité et de partage, invitant à la convivialité autour d'une douceur délicate qui réunit les générations et les cœurs.",
    price: 6,
    picture: "../assets/img/desserts/makrout.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Pâte de dattes du Sahara",
        price: 0,
      },
      {
        id: 2,
        title: "Miel",
        price: 0,
      },
      {
        id: 3,
        title: "Pâte d'amande",
        price: 2,
      },
      {
        id: 4,
        title: "Amandes effilées",
        price: 2,
      },
    ],
    filter: "dessert",
    category: "desserts",
  },
  {
    id: 20,
    title: "Baklawa",
    description:
      "Découvrez notre délicieuse Baklawa, une pâtisserie exquise qui vous transporte au cœur du Moyen-Orient. Préparée avec soin et authenticité, chaque bouchée de cette douceur est une invitation à un voyage gustatif envoûtant. Notre Baklawa est un savant mélange de fines couches de pâte phyllo, enrobées de pistache hachées, le tout parfumé avec notre sirop sucré et délicatement parfumé à l'eau de fleur d'oranger. Chaque morceau est un mariage parfait entre la croustillance de la pâte et la douceur des fruits secs, vous offrant une expérience sucrée à la fois riche en saveurs et délicate en texture. Que ce soit pour terminer un délicieux repas ou pour un moment gourmand à partager, notre Baklawa est une pâtisserie raffinée qui éveille les sens et enchante les papilles. \n\n Venez déguster cette douceur incontournable, symbole de convivialité et d'hospitalité orientale, qui vous fera voyager à travers les traditions séculaires du Moyen-Orient et les délices sucrés de l'art de la pâtisserie orientale.",
    price: 6,
    picture: "../assets/img/desserts/baklawa.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Pistache",
        price: 0,
      },
      {
        id: 2,
        title: "Cannelle",
        price: 0,
      },
      {
        id: 3,
        title: "Supplément pistache",
        price: 2,
      },
      {
        id: 4,
        title: "Amandes",
        price: 2,
      },
    ],
    filter: "dessert",
    category: "desserts",
  },
  {
    id: 21,
    title: "Cornes de gazelle",
    description:
      "Découvrez nos Cornes de Gazelle, une délicieuse pâtisserie qui incarne l'art et la finesse de la cuisine saharienne. Préparées avec passion et savoir-faire, ces douceurs sont une invitation à un voyage gustatif envoûtant. Nos Cornes de Gazelle sont façonnées avec une pâte délicate et parfumée, garnie d'une délicieuse pâte d'amandes subtilement parfumée à l'eau de fleur d'oranger.\n\n Chaque bouchée offre une symphonie de textures croustillantes et de saveurs sucrées. Ces pâtisseries sont soigneusement préparées pour capturer la tradition et l'authenticité de ce dessert emblématique. Un trésor sucré qui ravit les palais et révèle le charme délicat des traditions culinaires. Venez déguster ces délices raffinés, qui combleront vos papilles de douceur et vous enchanteront par leur élégance. Les Cornes de Gazelle sont bien plus qu'une simple pâtisserie, c'est une expérience culinaire qui vous transporte dans un univers de saveurs et d'émotions.",
    price: 7,
    picture: "../assets/img/desserts/corneGazelle.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Amande",
        price: 0,
      },
      {
        id: 2,
        title: "Sucre glace",
        price: 0,
      },
      {
        id: 3,
        title: "Sirop de rose",
        price: 2,
      },
      {
        id: 4,
        title: "Miel",
        price: 2,
      },
    ],
    filter: "dessert",
    category: "desserts",
  },
  {
    id: 22,
    title: "Douceurs de dattes choco",
    description:
      "Découvrez nos irrésistibles Douceurs de Dattes Choco, une délicate fusion entre les saveurs sucrées des dattes et l'intensité du chocolat. Préparées avec créativité et passion, ces douceurs sont un enchantement pour les papilles. Chaque bouchée est une harmonie parfaite entre la douceur naturelle des dattes et la richesse du chocolat, créant une expérience gustative unique et délicieuse. Nos Douceurs de Dattes Choco sont confectionnées à partir de dattes succulentes, fourrées d'une ganache au chocolat fondante et enrobées d'un délicat nappage chocolaté. Que ce soit pour combler une envie de sucré ou pour clôturer un repas en beauté, nos Douceurs de Dattes Choco sont une invitation à savourer un moment de gourmandise et de plaisir. \n\n Venez déguster ces créations exquises qui réunissent le meilleur des deux mondes : la douceur ensoleillée des dattes et l'intensité réconfortante du chocolat. Une symphonie de saveurs qui vous transportera dans un voyage sucré inoubliable.",
    price: 6,
    picture: "../assets/img/desserts/douceursDattesChoco.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Dattes du Sahara",
        price: 0,
      },
      {
        id: 2,
        title: "Chocolat",
        price: 0,
      },
      {
        id: 3,
        title: "Pistache",
        price: 2,
      },
      {
        id: 4,
        title: "Amande",
        price: 2,
      },
    ],
    filter: "dessert",
    category: "desserts",
  },
  {
    id: 23,
    title: "Douceurs de dattes amandes",
    description:
      "Laissez-vous séduire par nos irrésistibles Douceurs de Dattes Amandes, une fusion subtile entre la douceur sucrée des dattes et la richesse croquante des amandes. Préparées avec délicatesse et passion, ces douceurs sont un véritable délice pour les amateurs de saveurs fines. Chaque bouchée est un équilibre parfait entre la tendresse naturelle des dattes et le croquant délicieux des amandes, créant une symphonie de textures et de goûts qui éveille les sens. Nos Douceurs de Dattes Amandes sont soigneusement façonnées à partir de dattes savoureuses, garnies d'une généreuse amande, puis délicatement enrobées pour une expérience gustative incomparable. Que ce soit pour se faire plaisir ou pour offrir un cadeau gourmand à vos proches, nos Douceurs de Dattes Amandes sont une invitation à savourer un moment de douceur et d'exotisme. \n\n Venez déguster ces créations raffinées qui révèlent la beauté de la nature ensoleillée des dattes associée à la délicatesse des amandes. Une expérience sucrée qui vous transportera dans un univers de plaisir et d'émerveillement.",
    price: 6,
    picture: "../assets/img/desserts/douceursDattesChoco.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Dattes du Sahara",
        price: 0,
      },
      {
        id: 2,
        title: "Amandes",
        price: 0,
      },
      {
        id: 3,
        title: "Pistache",
        price: 2,
      },
      {
        id: 4,
        title: "Miel",
        price: 2,
      },
    ],
    filter: "dessert",
    category: "desserts",
  },
  {
    id: 24,
    title: "Bricks sucrées",
    description:
      "Découvrez nos Bricks Sucrées, une gourmandise raffinée qui marie subtilement la croustillance des feuilles de brick avec des saveurs sucrées et délicates. Préparées avec créativité et passion, ces délices sucrés sont une invitation à une expérience gustative envoûtante. Nos Bricks Sucrées sont confectionnées avec des feuilles de brick légèrement croustillantes, garnies d'une délicieuse farce sucrée. Que ce soit des fruits frais, des amandes caramélisées, du chocolat fondant ou des fruits secs, chaque bouchée offre une symphonie de textures et de saveurs qui éveillent les papilles. Que ce soit pour satisfaire une envie de dessert délicat ou pour clore un repas sur une note sucrée, nos Bricks Sucrées sont une expérience gourmande à partager ou à savourer en solitaire. Venez déguster ces créations sucrées qui révèlent l'art de la pâtisserie dans toute sa splendeur. Une invitation à découvrir un univers de douceurs, où la croustillance des feuilles de brick rencontre l'exquise suavité des ingrédients sucrés pour un moment de plaisir inoubliable.",
    price: 6,
    picture: "../assets/img/desserts/bricksSucree.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Pâte d'amande",
        price: 0,
      },
      {
        id: 2,
        title: "Miel",
        price: 0,
      },
      {
        id: 3,
        title: "Pistache",
        price: 2,
      },
      {
        id: 4,
        title: "Noisette",
        price: 2,
      },
    ],
    filter: "dessert",
    category: "desserts",
  },
  {
    id: 25,
    title: "Thé à la menthe",
    description:
      "Découvrez notre authentique Thé à la Menthe, une boisson emblématique de la cuisine Saharienne qui incarne la tradition de l'hospitalité et de la convivialité. Préparé avec soin et raffinement, notre thé à la menthe est un voyage gustatif qui réveillera vos sens. Notre thé à la menthe est préparé à partir de thé vert de qualité, infusé avec des feuilles de menthe fraîche. La préparation minutieuse et le savoir-faire traditionnel donnent à notre thé une saveur équilibrée et rafraîchissante. Chaque tasse est une invitation à la détente et au partage, où les parfums envoûtants de la menthe se mêlent délicatement aux arômes subtils du thé vert. \n\n C'est une boisson qui apaise l'esprit et égaye le cœur. Venez déguster notre Thé à la Menthe et laissez-vous transporter au cœur du Maghreb, où les traditions séculaires et les valeurs d'accueil se reflètent dans chaque tasse. Une expérience authentique qui vous offrira un moment de sérénité et de plaisir, à partager en toute convivialité.",
    price: 6,
    picture: "../assets/img/boissons/theMenthe.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Thé vert",
        price: 0,
      },
      {
        id: 2,
        title: "Menthe",
        price: 0,
      },
      {
        id: 3,
        title: "Miel",
        price: 2,
      },
      {
        id: 4,
        title: "Eau de fleur d'oranger",
        price: 2,
      },
    ],
    filter: "boisson",
    category: "boissons",
  },
  {
    id: 26,
    title: "Citronnade",
    description:
      "Découvrez notre rafraîchissante Citronnade, une boisson désaltérante qui allie la vivacité des citrons fraîchement pressés à une douceur subtile. Préparée avec soin et fraîcheur, notre citronnade est l'option idéale pour se désaltérer et se rafraîchir par temps chaud. \n\n Notre Citronnade est préparée à partir de citrons juteux, pressés à la main pour en extraire leur délicieux nectar. Nous y ajoutons une touche de sucre de dattes, pour équilibrer l'acidité des citrons et créer une boisson énergisante et revitalisante. Chaque gorgée est une explosion de saveurs citronnées qui vous transporte dans un univers de fraîcheur et de vitalité. Que ce soit pour accompagner un repas ou pour se désaltérer en toute simplicité, notre Citronnade est un pur délice à savourer à tout moment de la journée. \n\n Venez déguster cette boisson pétillante qui ravira vos papilles et réveillera vos sens. Une expérience gustative vivifiante qui vous apportera une touche de légèreté et de douceur, à partager en toute convivialité avec vos proches.",
    price: 6,
    picture: "../assets/img/boissons/citronnade.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Citrons jaune",
        price: 0,
      },
      {
        id: 2,
        title: "Sucre de dattes",
        price: 0,
      },
      {
        id: 3,
        title: "Miel",
        price: 2,
      },
      {
        id: 4,
        title: "Sirop d'agave",
        price: 2,
      },
    ],
    filter: "boisson",
    category: "boissons",
  },
  {
    id: 27,
    title: "Jasminade",
    description:
      "Découvrez notre enchanteresse Jasminade, une boisson parfumée qui célèbre la délicatesse et la beauté du jasmin. Préparée avec finesse et passion, notre Jasminade vous offre une expérience gustative envoûtante. \n\n Notre Jasminade est élaborée à partir de fleurs de jasmin soigneusement sélectionnées, infusées dans de l'eau fraîche. Le résultat est une boisson aromatique aux notes florales subtiles, créant une ambiance raffinée et apaisante à chaque gorgée. Chaque délicieuse gorgée de notre Jasminade vous transporte dans un jardin de senteurs délicates, vous invitant à vous détendre et à vous ressourcer. Venez déguster cette boisson élégante qui éveille les sens et vous enveloppe de douceur. Notre Jasminade est une invitation à découvrir le charme envoûtant du jasmin et à vous laisser séduire par son parfum enivrant. Une expérience gustative qui vous emmènera dans un univers de raffinement et de sérénité, à partager avec vos proches pour des moments inoubliables.",
    price: 4,
    picture: "../assets/img/boissons/jasminade.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Fleurs de jasmin",
        price: 0,
      },
      {
        id: 2,
        title: "Miel",
        price: 0,
      },
      {
        id: 3,
        title: "Menthe",
        price: 2,
      },
      {
        id: 4,
        title: "Sirop d'agave",
        price: 2,
      },
    ],
    filter: "boisson",
    category: "boissons",
  },
  {
    id: 28,
    title: "Jus de Baobab",
    description:
      "Découvrez notre rafraîchissant Jus de Baobab, une boisson exotique qui vous invite à explorer les délices du continent africain. Préparé avec soin et authenticité, notre jus de baobab est une véritable source de vitalité et de bien-être. Notre Jus de Baobab est élaboré à partir du fruit du baobab, souvent appelé 'l'arbre de vie'. Les fruits du baobab sont récoltés de manière responsable, séchés et leur pulpe est transformée en une délicieuse boisson riche en vitamines et en antioxydants. Chaque gorgée vous offre une expérience gustative unique, avec une douceur légèrement acidulée et des notes exotiques qui éveillent vos sens. Notre jus de baobab est une véritable boisson revitalisante, parfaite pour se désaltérer et faire le plein d'énergie. \n\n Venez déguster cette boisson authentique qui vous transporte au cœur de l'Afrique, vous invitant à explorer les saveurs uniques et les bienfaits naturels du baobab. Une expérience gustative qui vous reconnecte à la nature et vous offre un voyage délicieux à travers les richesses du continent africain.",
    price: 5,
    picture: "../assets/img/boissons/jusBaobab.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Baobab",
        price: 0,
      },
      {
        id: 2,
        title: "Sucre de dattes",
        price: 0,
      },
      {
        id: 3,
        title: "Vanille",
        price: 2,
      },
      {
        id: 4,
        title: "Sirop d'agave",
        price: 2,
      },
    ],
    filter: "boisson",
    category: "boissons",
  },
  {
    id: 29,
    title: "Bissap",
    description:
      "Découvrez notre envoûtant Bissap, une boisson traditionnelle africaine qui éveillera vos sens avec ses arômes exotiques et rafraîchissants. Préparé avec passion et authenticité, notre Bissap vous offre une expérience gustative inoubliable. Notre Bissap est élaboré à partir des fleurs d'hibiscus séchées, aussi connues sous le nom de fleurs de Bissap. Infusées dans de l'eau fraîche et sucrée, les fleurs d'hibiscus donnent à cette boisson une couleur rouge éclatante et des saveurs fruitées et légèrement acidulées. Chaque gorgée de notre Bissap vous transporte dans un voyage gustatif au cœur de l'Afrique, vous invitant à découvrir les délices de cette boisson traditionnelle, appréciée pour ses bienfaits rafraîchissants et hydratants. \n\n Venez déguster cette boisson authentique qui incarne l'essence même du continent africain. Notre Bissap est une invitation à l'évasion et à la découverte de nouvelles saveurs. Une expérience gustative qui vous laissera des souvenirs inoubliables et vous fera voyager à travers les traditions et les richesses de l'Afrique.",
    price: 5,
    picture: "../assets/img/boissons/bissap.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Fleur d'hibiscus",
        price: 0,
      },
      {
        id: 2,
        title: "Sucre de dattes",
        price: 0,
      },
      {
        id: 3,
        title: "Fleurs d'oranger bio",
        price: 2,
      },
      {
        id: 4,
        title: "Gimgembre séché",
        price: 2,
      },
    ],
    filter: "boisson",
    category: "boissons",
  },
  {
    id: 30,
    title: "Jus de gingembre",
    description:
      "Découvrez notre stimulant Jus de Gingembre, une boisson revigorante qui éveillera vos sens avec ses arômes puissants et ses bienfaits pour la santé. Préparé avec soin et fraîcheur, notre jus de gingembre est un véritable élixir de vitalité. Notre Jus de Gingembre est élaboré à partir de racines de gingembre frais, pressées pour en extraire leur jus intense. Cette boisson vous offre une expérience gustative intense avec une pointe de piquant, qui réveille agréablement vos papilles. Le gingembre est reconnu pour ses propriétés stimulantes et ses bienfaits pour la digestion et le système immunitaire. Notre jus de gingembre est un choix parfait pour se dynamiser et renforcer votre bien-être. \n\n Venez déguster cette boisson énergisante qui vous offre un voyage gustatif vibrant et revigorant. Notre Jus de Gingembre est une invitation à savourer la fraîcheur et la vitalité de cette racine exotique, à partager ou à déguster en solo pour un moment de vivacité et de plaisir.",
    price: 5,
    picture: "../assets/img/boissons/jusGingembre.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Gingembre frais",
        price: 0,
      },
      {
        id: 2,
        title: "Sucre de dattes",
        price: 0,
      },
      {
        id: 3,
        title: "Fleurs d'oranger bio",
        price: 2,
      },
      {
        id: 4,
        title: "Menthe",
        price: 2,
      },
    ],
    filter: "boisson",
    category: "boissons",
  },
];
