export interface IIncludedAndExtraIngredient {
  id: number;
  title: string;
  price: number;
}
export type Filter = "agneau" | "boeuf" | "poulet" | "vegetarien";

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
  filter: Filter;
  category: ProductCategoryType;
}

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    title: "Chorba Saharienne",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 7,
    picture: "assets/img/entrees/chorbaSaharienne.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "poivrons",
        price: 0,
      },
      {
        id: 2,
        title: "tomates",
        price: 0,
      },
      {
        id: 3,
        title: "piment grillé",
        price: 2,
      },
      {
        id: 4,
        title: "oeufs",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 6,
    picture: "../assets/img/entrees/saladeMechouia.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "poivrons",
        price: 0,
      },
      {
        id: 2,
        title: "tomates",
        price: 0,
      },
      {
        id: 3,
        title: "piment grillé",
        price: 3,
      },
      {
        id: 4,
        title: "oeufs",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 4,
    picture: "../assets/img/entrees/saladeFraicheur.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "salade verte",
        price: 0,
      },
      {
        id: 2,
        title: "tomates",
        price: 0,
      },
      {
        id: 3,
        title: "coriandre",
        price: 2,
      },
      {
        id: 4,
        title: "persil",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 5,
    picture: "../assets/img/entrees/bricksViande.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "boeuf",
        price: 0,
      },
      {
        id: 2,
        title: "poivron",
        price: 0,
      },
      {
        id: 3,
        title: "coriandre",
        price: 2,
      },
      {
        id: 4,
        title: "emmental",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 5,
    picture: "../assets/img/entrees/bricksLegumes.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "carotte",
        price: 0,
      },
      {
        id: 2,
        title: "courgette",
        price: 0,
      },
      {
        id: 3,
        title: "tomate",
        price: 2,
      },
      {
        id: 4,
        title: "aubergine",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 6,
    picture: "../assets/img/entrees/pastels.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "poulet",
        price: 0,
      },
      {
        id: 2,
        title: "poivron",
        price: 0,
      },
      {
        id: 3,
        title: "piment",
        price: 2,
      },
      {
        id: 4,
        title: "vermicelle",
        price: 2,
      },
    ],
    filter: "poulet",
    category: "entrées",
  },
  {
    id: 7,
    title: "Couscous Royal Saharien",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 22,
    picture: "../assets/img/plats/couscousRoyal.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "semoule de blé",
        price: 0,
      },
      {
        id: 2,
        title: "courgette",
        price: 0,
      },
      {
        id: 3,
        title: "merguez",
        price: 2,
      },
      {
        id: 4,
        title: "pois chiche",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 17,
    picture: "../assets/img/plats/couscousVege.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "semoule de blé",
        price: 0,
      },
      {
        id: 2,
        title: "navet",
        price: 0,
      },
      {
        id: 3,
        title: "carotte Saharienne",
        price: 2,
      },
      {
        id: 4,
        title: "pois chiche",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
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
        title: "Epices Saharienne",
        price: 2,
      },
      {
        id: 4,
        title: "Coriandre",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 17,
    picture: "../assets/img/plats/tajineDattes.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Dattes",
        price: 0,
      },
      {
        id: 2,
        title: "Sésame",
        price: 0,
      },
      {
        id: 3,
        title: "Amandes effilées",
        price: 2,
      },
      {
        id: 4,
        title: "Pruneaux",
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
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
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
        title: "Boeuf",
        price: 0,
      },
      {
        id: 3,
        title: "Pomme de terre",
        price: 2,
      },
      {
        id: 4,
        title: "Petits pois",
        price: 2,
      },
    ],
    filter: "boeuf",
    category: "plats",
  },
  {
    id: 11,
    title: "Boulette de viande au mil",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
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
    id: 12,
    title: "Brochettes d'agneau grillées",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
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
    id: 13,
    title: "Brochettes de boeuf",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
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
    id: 14,
    title: "Merguez grillées",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
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
    id: 15,
    title: "Keftas de boeuf grillées",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
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
    id: 16,
    title: "Méchoui",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
    price: 32,
    picture: "../assets/img/grillades/mechoui.png",
    includedAndExtraIngredients: [
      {
        id: 1,
        title: "Boeuf",
        price: 0,
      },
      {
        id: 2,
        title: "Pomme de terre",
        price: 0,
      },
      {
        id: 3,
        title: "Poivron",
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
    id: 16,
    title: "Chawarma",
    description:
      "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as",
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
        title: "Persil",
        price: 0,
      },
      {
        id: 3,
        title: "Poivron",
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
];
