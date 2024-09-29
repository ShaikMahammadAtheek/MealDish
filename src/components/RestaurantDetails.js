import React from 'react';
import { useParams } from 'react-router-dom';
import top1 from '../image/top1.avif';
import top2 from '../image/top2.avif';
import top3 from '../image/top3.avif';
import top4 from '../image/top4.avif';
import top5 from '../image/top5.avif';
import top6 from '../image/top6.avif';
import top7 from '../image/top7.avif';
import top8 from '../image/top8.avif';
import top9 from '../image/top9.avif';
import top10 from '../image/top10.avif';
import top11 from '../image/top11.avif';
import top12 from '../image/top12.avif';
import top13 from '../image/top13.avif';
import top14 from '../image/top14.avif';
import top15 from '../image/top15.avif';
import top16 from '../image/top16.avif';
import top17 from '../image/top17.avif';
import top18 from '../image/top18.avif';
import top19 from '../image/top19.avif';
// import top20 from '../image/top20.avif';

// Importing Menu Images in Restaurents Details
import pizza1 from '../image/MenuImages/Margherita Pizza.jpeg'
import pizza2 from '../image/MenuImages/Pepperoni Pizza.jpeg'
import pizza3 from '../image/MenuImages/BBQ Chicken Pizza.jpeg'
import pizza4 from '../image/MenuImages/Veggie Supreme Pizza.jpeg'
import pizza5 from '../image/MenuImages/Paneer Tikka Pizza.jpeg'
import bar1 from '../image/MenuImages/Mango Mojito.jpeg'
import bar2 from '../image/MenuImages/Blue Lagoon.jpeg'
import bar3 from '../image/MenuImages/Virgin Pina Colada.jpeg'
import bar4 from '../image/MenuImages/Strawberry Lemonade.jpeg'
import bar5 from '../image/MenuImages/Cucumber Cooler.jpeg'
import pizza6 from '../image/MenuImages/Veg Hakka Noodles.jpeg'
import pizza7 from '../image/MenuImages/Chicken Hakka Noodles.jpeg'
import pizza8 from '../image/MenuImages/Schezwan Noodles.jpeg'
import pizza9 from '../image/MenuImages/Egg Hakka Noodles.jpeg'
import pizza10 from '../image/MenuImages/Paneer Hakka Noodles.jpeg'
import pizza11 from '../image/MenuImages/Classic Sev Mixture.jpeg'
import pizza12 from '../image/MenuImages/Spicy Sev Mixture.jpeg'
import pizza13 from '../image/MenuImages/Sweet and Sour Sev Mixture.jpeg'
import pizza14 from '../image/MenuImages/Chutney Sev Mixture.jpeg'
import pizza15 from '../image/MenuImages/Peanut Sev Mixture.jpeg'
import pizza16 from '../image/MenuImages/Chicken Manchurian Dry.jpeg'
import pizza17 from '../image/MenuImages/Chicken Manchurian Gravy.jpeg'
import pizza18 from '../image/MenuImages/Garlic Chicken.jpeg'
import pizza19 from '../image/MenuImages/Chili Chicken.jpeg'
import pizza20 from '../image/MenuImages/Chicken Lollipop.jpeg'
import pizza21 from '../image/MenuImages/Butter Paneer Masala.jpeg'
import pizza22 from '../image/MenuImages/Paneer Tikka.jpeg'
import pizza23 from '../image/MenuImages/Shahi Paneer.jpeg'
import pizza24 from '../image/MenuImages/Paneer Bhurji.jpeg'
import pizza25 from '../image/MenuImages/Paneer Butter Naan Combo.jpeg'
import pizza26 from '../image/MenuImages/Creamy Alfredo Pasta.jpeg'
import pizza27 from '../image/MenuImages/Cheesy Penne Pasta.jpeg'
import pizza28 from '../image/MenuImages/Spicy Arrabbiata Pasta.jpeg'
import pizza29 from '../image/MenuImages/Cheese Burst Macaroni.jpeg'
import pizza30 from '../image/MenuImages/Four Cheese Baked Pasta.jpeg'
import pizza31 from '../image/MenuImages/Shaahi Paneer Masala.jpeg'
import pizza32 from '../image/MenuImages/Paneer Butter Masala.jpeg'
import pizza33 from '../image/MenuImages/Kadai Paneer.jpeg'
import pizza34 from '../image/MenuImages/Paneer Tikka Masala.jpeg'
import pizza35 from '../image/MenuImages/Mughlai Paneer.jpeg'
import pizza36 from '../image/MenuImages/Butter Naan.jpeg'
import pizza37 from '../image/MenuImages/Garlic Butter Naan.jpeg'
import pizza38 from '../image/MenuImages/Cheese Naan.jpeg'
import pizza39 from '../image/MenuImages/Pudina Naan.jpeg'
import pizza40 from '../image/MenuImages/Stuffed Paneer Naan.jpeg'
import pizza41 from '../image/MenuImages/Chicken Biryani.jpeg'
import pizza42 from '../image/MenuImages/Mutton Biryani.jpeg'
import pizza43 from '../image/MenuImages/Vegetable Biryani.jpeg'
import pizza44 from '../image/MenuImages/Paneer Biryani.jpeg'
import pizza45 from '../image/MenuImages/Hyderabadi Biryani.jpeg'
import pizza46 from '../image/MenuImages/Classic Kesar Pista Kulfi.jpeg'
import pizza47 from '../image/MenuImages/Malai Kulfi.jpeg'
import pizza48 from '../image/MenuImages/Mango Kulfi.jpeg'
import pizza49 from '../image/MenuImages/Pistachio Kulfi.jpeg'
import pizza50 from '../image/MenuImages/Kesar Pista Combo Kulfi.jpeg'
import pizza51 from '../image/MenuImages/Chocolate Truffle Cake.jpeg'
import pizza52 from '../image/MenuImages/Vanilla Buttercream Cake.jpeg'
import pizza53 from '../image/MenuImages/Red Velvet Cake.jpeg'
import pizza54 from '../image/MenuImages/Fruit Cake.jpeg'
import pizza55 from '../image/MenuImages/Lemon Drizzle Cake.jpeg'
import pizza56 from '../image/MenuImages/Chicken Biryani2.jpeg'
import pizza57 from '../image/MenuImages/Mutton Biryani.jpeg'
import pizza58 from '../image/MenuImages/Vegetable Biryani.jpeg'
import pizza59 from '../image/MenuImages/Paneer Biryani.jpeg'
import pizza60 from '../image/MenuImages/Hyderabadi Biryani.jpeg'
import pizza61 from '../image/MenuImages/Tandoori Chicken.jpeg'
import pizza62 from '../image/MenuImages/Paneer Tikka 2.jpeg'
import pizza63 from '../image/MenuImages/Seekh Kebabs.jpeg'
import pizza64 from '../image/MenuImages/Tandoori Fish.jpeg'
import pizza65 from '../image/MenuImages/Vegetable Grill Platter.jpeg'
import pizza66 from '../image/MenuImages/Chocolate Lava Cake.jpeg'
import pizza67 from '../image/MenuImages/Fruit Tart.jpeg'
import pizza68 from '../image/MenuImages/Cheesecake.jpeg'
import pizza69 from '../image/MenuImages/Mango Mojito.jpeg'
import pizza70 from '../image/MenuImages/Pistachio Kulfi2.jpeg'
import pizza71 from '../image/MenuImages/California Roll.jpeg'
import pizza72 from '../image/MenuImages/Spicy Tuna Roll.jpeg'
import pizza73 from '../image/MenuImages/Salmon Nigiri.jpeg'
import pizza74 from '../image/MenuImages/Eel Avocado Roll.jpeg'
import pizza75 from '../image/MenuImages/Vegetable Tempura Roll.jpeg'
import pizza76 from '../image/MenuImages/Ribeye Steak.jpeg'
import pizza77 from '../image/MenuImages/Filet Mignon.jpeg'
import pizza78 from '../image/MenuImages/T-Bone Steak.jpeg'
import pizza79 from '../image/MenuImages/New York Strip.jpeg'
import pizza80 from '../image/MenuImages/Sirloin Steak.jpeg'
import pizza81 from '../image/MenuImages/Falafel Wrap.jpeg'
import pizza82 from '../image/MenuImages/Grilled Lamb Chops.jpeg'
import pizza83 from '../image/MenuImages/Hummus Platter.jpeg'
import pizza84 from '../image/MenuImages/download (1).jpeg'
import pizza85 from '../image/MenuImages/Baklava.jpeg'
import pizza86 from '../image/MenuImages/Quinoa Salad Bowl.jpeg'
import pizza87 from '../image/MenuImages/Chickpea Curry.jpeg'
import pizza88 from '../image/MenuImages/Stuffed Bell Peppers.jpeg'
import pizza89 from '../image/MenuImages/Vegetable Tempura Roll.jpeg'
import pizza90 from '../image/MenuImages/Chocolate Avocado Mousse.jpeg'
import '../Styles/RestaurantDetails.css'

const RestaurantDetails = () => {
  const { id } = useParams();

  const restaurantData = {
    1: {
      name: 'Pizza Pizza',
      Description: 'Delicious pizza varieties with fresh ingredients.',
      menu: {
        1: {
          Title: 'Margherita Pizza',
          h4: '@120',
          Description: 'Classic Margherita pizza with fresh mozzarella, tomatoes, and basil.',
          subimg: pizza1,
        },
        2: {
          Title: 'Pepperoni Pizza',
          h4: '@150',
          Description: 'Pepperoni pizza topped with slices of spicy pepperoni and mozzarella cheese.',
          subimg: pizza2,
        },
        3: {
          Title: 'BBQ Chicken Pizza',
          h4: '@180',
          Description: 'Pizza with tangy BBQ sauce, grilled chicken, onions, and cheese.',
          subimg: pizza3,
        },
        4: {
          Title: 'Veggie Supreme Pizza',
          h4: '@140',
          Description: 'Loaded with bell peppers, onions, olives, mushrooms, and mozzarella cheese.',
          subimg: pizza4,
        },
        5: {
          Title: 'Paneer Tikka Pizza',
          h4: '@160',
          Description: 'A fusion pizza topped with spicy paneer tikka and cheese.',
          subimg: pizza5,
        }
      },
      rating: 4.8,
      location: 'City Square',
      image: top1,
    },
    2: {
      name: 'Mocktail Bar',
      Description: 'Refreshing mocktails with a fusion of flavors.',
      menu: {
        1: {
          Title: 'Mango Mojito',
          h4: '@90',
          Description: 'A tropical mango mojito with mint leaves and a splash of lime.',
          subimg: bar1,
        },
        2: {
          Title: 'Blue Lagoon',
          h4: '@85',
          Description: 'A sweet and tangy mocktail made with blue curacao, lemon, and soda.',
          subimg: bar2,
        },
        3: {
          Title: 'Virgin Pina Colada',
          h4: '@100',
          Description: 'A creamy blend of coconut and pineapple for a refreshing tropical drink.',
          subimg: bar3,
        },
        4: {
          Title: 'Strawberry Lemonade',
          h4: '@75',
          Description: 'Fresh strawberries and lemon juice mixed with soda for a fruity, tangy taste.',
          subimg: bar4,
        },
        5: {
          Title: 'Cucumber Cooler',
          h4: '@80',
          Description: 'A cooling mix of cucumber, mint, and lemon juice, perfect for hot days.',
          subimg: bar5,
        }
      },
      rating: 4.2,
      location: 'Mohan Nagar',
      image: top2,
    }
    ,
    3: {
      name: 'Hakka Noodles',
      Description: 'Flavorful and aromatic noodle dishes with a perfect blend of spices.',
      menu: {
        1: {
          Title: 'Veg Hakka Noodles',
          h4: '@120',
          Description: 'Stir-fried noodles with fresh vegetables and traditional sauces.',
          subimg: pizza6,
        },
        2: {
          Title: 'Chicken Hakka Noodles',
          h4: '@150',
          Description: 'Spicy chicken tossed with noodles and veggies in a savory sauce.',
          subimg: pizza7,
        },
        3: {
          Title: 'Schezwan Noodles',
          h4: '@130',
          Description: 'A spicy Schezwan noodle dish with bold flavors and crunchy veggies.',
          subimg: pizza8,
        },
        4: {
          Title: 'Egg Hakka Noodles',
          h4: '@140',
          Description: 'Noodles stir-fried with eggs, veggies, and soy-based sauces.',
          subimg: pizza9,
        },
        5: {
          Title: 'Paneer Hakka Noodles',
          h4: '@160',
          Description: 'Crispy paneer cubes with noodles and a mix of colorful vegetables.',
          subimg: pizza10,
        }
      },
      rating: 4.1,
      location: 'Railway Station',
      image: top3,
    }
    ,
    4: {
      name: 'Sev Mixture',
      Description: 'Crispy and spicy sev-based snacks perfect for any occasion.',
      menu: {
        1: {
          Title: 'Classic Sev Mixture',
          h4: '@50',
          Description: 'A crispy mix of sev, peanuts, and spices.',
          subimg: pizza11,
        },
        2: {
          Title: 'Spicy Sev Mixture',
          h4: '@60',
          Description: 'A fiery sev mixture with extra spice for a bold taste.',
          subimg: pizza12,
        },
        3: {
          Title: 'Sweet and Sour Sev Mixture',
          h4: '@65',
          Description: 'A perfect blend of sweet and tangy flavors in a sev mixture.',
          subimg: pizza13,
        },
        4: {
          Title: 'Chutney Sev Mixture',
          h4: '@70',
          Description: 'Crispy sev mixed with tangy chutney for an extra kick.',
          subimg: pizza14,
        },
        5: {
          Title: 'Peanut Sev Mixture',
          h4: '@55',
          Description: 'A crunchy combination of sev and roasted peanuts.',
          subimg: pizza15,
        }
      },
      rating: 3.4,
      location: 'Chhindwara City',
      image: top4,
    }
    ,
    5: {
      name: 'Chicken Manchuria',
      Description: 'Spicy, flavorful chicken dishes for lovers of bold flavors.',
      menu: {
        1: {
          Title: 'Chicken Manchurian Dry',
          h4: '@150',
          Description: 'Crispy chicken tossed in tangy and spicy Manchurian sauce.',
          subimg: pizza16,
        },
        2: {
          Title: 'Chicken Manchurian Gravy',
          h4: '@170',
          Description: 'Tender chicken in a thick, flavorful Manchurian gravy.',
          subimg: pizza17,
        },
        3: {
          Title: 'Garlic Chicken',
          h4: '@160',
          Description: 'Juicy chicken stir-fried with garlic and green chilies.',
          subimg: pizza18,
        },
        4: {
          Title: 'Chili Chicken',
          h4: '@180',
          Description: 'Spicy chili chicken served with onions and bell peppers.',
          subimg: pizza19,
        },
        5: {
          Title: 'Chicken Lollipop',
          h4: '@120',
          Description: 'Deep-fried chicken drumsticks marinated in special spices.',
          subimg: pizza20,
        }
      },
      rating: 4.2,
      location: 'Chhindwara Locality',
      image: top5,
    }
    ,
    6: {
      name: 'Butter Paneer',
      Description: 'Creamy, rich paneer dishes that melt in your mouth.',
      menu: {
        1: {
          Title: 'Butter Paneer Masala',
          h4: '@180',
          Description: 'Paneer cubes cooked in a creamy butter gravy with aromatic spices.',
          subimg: pizza21,
        },
        2: {
          Title: 'Paneer Tikka',
          h4: '@200',
          Description: 'Grilled paneer marinated in spicy yogurt and served with chutney.',
          subimg: pizza22,
        },
        3: {
          Title: 'Shahi Paneer',
          h4: '@220',
          Description: 'A royal dish of paneer cooked in a rich and creamy tomato-based gravy.',
          subimg: pizza23,
        },
        4: {
          Title: 'Paneer Bhurji',
          h4: '@160',
          Description: 'Scrambled paneer stir-fried with onions, tomatoes, and spices.',
          subimg: pizza24,
        },
        5: {
          Title: 'Paneer Butter Naan Combo',
          h4: '@250',
          Description: 'A complete meal with paneer butter masala and naan.',
          subimg: pizza25,
        }
      },
      rating: 4.2,
      location: 'Chhindwara City',
      image: top6,
    }
    ,
    7: {
      name: 'Cheese Pasta',
      Description: 'Creamy and cheesy pasta dishes with a variety of flavors and ingredients.',
      menu: {
        1: {
          Title: 'Creamy Alfredo Pasta',
          h4: '@180',
          Description: 'Rich and creamy Alfredo pasta made with cheese and cream sauce.',
          subimg: pizza26,
        },
        2: {
          Title: 'Cheesy Penne Pasta',
          h4: '@200',
          Description: 'Penne pasta loaded with mozzarella and parmesan cheese in a white sauce.',
          subimg: pizza27,
        },
        3: {
          Title: 'Spicy Arrabbiata Pasta',
          h4: '@170',
          Description: 'Pasta in a tangy and spicy tomato-based Arrabbiata sauce with a cheesy twist.',
          subimg: pizza28,
        },
        4: {
          Title: 'Cheese Burst Macaroni',
          h4: '@190',
          Description: 'Macaroni smothered in a velvety cheese sauce with extra cheese on top.',
          subimg: pizza29,
        },
        5: {
          Title: 'Four Cheese Baked Pasta',
          h4: '@220',
          Description: 'Baked pasta with four types of cheese, perfect for cheese lovers.',
          subimg: pizza30,
        }
      },
      rating: 3.3,
      location: 'Ganesh Chowk',
      image: top7,
    }
    ,
    8: {
      name: 'Shaahi Paneer',
      Description: 'Royal and rich paneer dishes with flavorful gravies and spices.',
      menu: {
        1: {
          Title: 'Shaahi Paneer Masala',
          h4: '@250',
          Description: 'A rich, creamy gravy made with tomatoes, cream, and a royal blend of spices.',
          subimg: pizza31,
        },
        2: {
          Title: 'Paneer Butter Masala',
          h4: '@220',
          Description: 'Paneer cubes cooked in a buttery tomato sauce with creamy flavors.',
          subimg: pizza32,
        },
        3: {
          Title: 'Kadai Paneer',
          h4: '@210',
          Description: 'Spicy Kadai Paneer with bell peppers, onions, and a tangy gravy.',
          subimg: pizza33,
        },
        4: {
          Title: 'Paneer Tikka Masala',
          h4: '@240',
          Description: 'Grilled paneer in a rich and spicy tikka masala sauce.',
          subimg: pizza34,
        },
        5: {
          Title: 'Mughlai Paneer',
          h4: '@260',
          Description: 'Paneer cooked in a royal Mughlai gravy with cashews and a touch of saffron.',
          subimg: pizza35,
        }
      },
      rating: 4.3,
      location: 'Prasia Road',
      image: top8,
    }
    ,
    9: {
      name: 'Butter Naan',
      Description: 'Soft, buttery naans served with delicious side dishes.',
      menu: {
        1: {
          Title: 'Butter Naan',
          h4: '@50',
          Description: 'Soft and fluffy naan brushed with melted butter.',
          subimg: pizza36,
        },
        2: {
          Title: 'Garlic Butter Naan',
          h4: '@60',
          Description: 'Buttery naan infused with fresh garlic flavor.',
          subimg: pizza37,
        },
        3: {
          Title: 'Cheese Naan',
          h4: '@80',
          Description: 'Naan stuffed with a cheesy filling and topped with butter.',
          subimg: pizza38,
        },
        4: {
          Title: 'Pudina Naan',
          h4: '@70',
          Description: 'Naan flavored with mint and butter for a refreshing taste.',
          subimg: pizza39,
        },
        5: {
          Title: 'Stuffed Paneer Naan',
          h4: '@90',
          Description: 'Naan stuffed with spiced paneer and finished with butter.',
          subimg: pizza40,
        }
      },
      rating: 4.5,
      location: 'Downtown Area',
      image: top9,
    }
    ,
    10: {
      name: "Biryani",
      Description: "Aromatic and flavorful rice dish cooked with spices and meat.",
      menu: {
        1: {
          "Title": "Chicken Biryani",
          "h4": "@150",
          Description: "Tender chicken pieces cooked with fragrant basmati rice and spices.",
          subimg: pizza41
        },
        2: {
          "Title": "Mutton Biryani",
          "h4": "@200",
          Description: "Succulent mutton slow-cooked with basmati rice and rich spices.",
          subimg: pizza42
        },
        3: {
          "Title": "Vegetable Biryani",
          "h4": "@120",
          Description: "A mix of seasonal vegetables cooked with aromatic rice and spices.",
          subimg: pizza43
        },
        4: {
          "Title": "Paneer Biryani",
          "h4": "@180",
          Description: "Creamy paneer cooked with basmati rice and a blend of spices.",
          subimg: pizza44
        },
        5: {
          "Title": "Hyderabadi Biryani",
          "h4": "@250",
          Description: "A traditional Hyderabadi style biryani with rich flavors and spices.",
          subimg: pizza45
        }
      },
      rating: 4.7,
      location: "Biryani House",
      image: top10
    }
    ,
    11: {
      name: "Kesar Pista Kulfi",
      Description: "Delicious and creamy kulfi flavored with saffron and pistachios.",
      menu: {
        1: {
          "Title": "Classic Kesar Pista Kulfi",
          "h4": "@80",
          Description: "Creamy kulfi infused with saffron and garnished with crushed pistachios.",
          subimg: pizza46
        },
        2: {
          "Title": "Malai Kulfi",
          "h4": "@70",
          Description: "Rich and creamy kulfi made with full-fat milk and garnished with nuts.",
          subimg: pizza47
        },
        3: {
          "Title": "Mango Kulfi",
          "h4": "@90",
          Description: "Refreshing kulfi made with ripe mangoes and a hint of saffron.",
          subimg: pizza48
        },
        4: {
          "Title": "Pistachio Kulfi",
          "h4": "@85",
          Description: "Rich kulfi loaded with crunchy pistachios and a touch of saffron.",
          subimg: pizza49
        },
        5: {
          "Title": "Kesar Pista Combo Kulfi",
          "h4": "@100",
          Description: "A delightful combination of kesar and pista flavors in one creamy kulfi.",
          subimg: pizza50
        }
      },
      rating: 4.9,
      location: "Dessert Parlor",
      image: top11
    }
    ,
    12: {
      name: "Cakes",
      Description: "Indulge in our delightful selection of cakes for every occasion.",
      menu: {
        1: {
          "Title": "Chocolate Truffle Cake",
          "h4": "@500",
          Description: "Rich and decadent chocolate cake layered with smooth chocolate ganache.",
          subimg: pizza51
        },
        2: {
          "Title": "Vanilla Buttercream Cake",
          "h4": "@450",
          Description: "Classic vanilla cake topped with creamy vanilla buttercream frosting.",
          subimg: pizza52
        },
        3: {
          "Title": "Red Velvet Cake",
          "h4": "@600",
          Description: "Velvety red cake with cream cheese frosting and a hint of cocoa.",
          subimg: pizza53
        },
        4: {
          "Title": "Fruit Cake",
          "h4": "@550",
          Description: "Moist cake studded with mixed dried fruits and nuts, perfect for celebrations.",
          subimg: pizza54
        },
        5: {
          "Title": "Lemon Drizzle Cake",
          "h4": "@480",
          Description: "Zesty lemon cake with a sweet lemon glaze for a refreshing taste.",
          subimg: pizza55
        }
      },
      rating: 4.8,
      location: "Bakery Delights",
      image: top12
    }
    ,
    13: {
      name: "Biryani Hut",
      Description: "Experience the authentic taste of biryani with a blend of spices and flavors.",
      menu: {
        1: {
          "Title": "Chicken Biryani",
          "h4": "@180",
          Description: "Succulent chicken marinated in spices and layered with fragrant basmati rice.",
          subimg: pizza56
        },
        2: {
          "Title": "Mutton Biryani",
          "h4": "@220",
          Description: "Tender mutton slow-cooked with aromatic spices and basmati rice.",
          subimg: pizza57
        },
        3: {
          "Title": "Vegetable Biryani",
          "h4": "@150",
          Description: "A delightful mix of seasonal vegetables cooked with fragrant basmati rice.",
          subimg: pizza58
        },
        4: {
          "Title": "Egg Biryani",
          "h4": "@160",
          Description: "A flavorful biryani made with boiled eggs and aromatic spices.",
          subimg: pizza59
        },
        5: {
          "Title": "Hyderabadi Biryani",
          "h4": "@250",
          Description: "Traditional Hyderabadi biryani made with marinated meat and saffron rice.",
          subimg: pizza60
        }
      },
      rating: 4.7,
      location: "Gourmet Street",
      image: top13
    }
    ,
    14: {
      name: "Tandoor Grill",
      Description: "Savor the smoky flavors of our expertly grilled dishes from the tandoor.",
      menu: {
        1: {
          "Title": "Tandoori Chicken",
          "h4": "@250",
          Description: "Juicy chicken marinated in spices and grilled to perfection in a tandoor.",
          subimg: pizza61
        },
        2: {
          "Title": "Paneer Tikka",
          "h4": "@200",
          Description: "Cubes of marinated paneer grilled with bell peppers and onions.",
          subimg: pizza62
        },
        3: {
          "Title": "Seekh Kebabs",
          "h4": "@300",
          Description: "Minced meat skewers spiced with herbs and grilled on skewers.",
          subimg: pizza63
        },
        4: {
          "Title": "Tandoori Fish",
          "h4": "@350",
          Description: "Marinated fish fillets grilled in the tandoor for a smoky flavor.",
          subimg: pizza64
        },
        5: {
          "Title": "Vegetable Grill Platter",
          "h4": "@220",
          Description: "A mix of seasonal vegetables marinated and grilled to perfection.",
          subimg: pizza65
        }
      },
      rating: 4.6,
      location: "Spice Avenue",
      image: top14
    }
    ,
    15: {
      name: "Dessert Corner",
      Description: "Indulge in our selection of sweet treats and desserts.",
      menu: {
        1: {
          "Title": "Chocolate Lava Cake",
          "h4": "@150",
          Description: "Warm chocolate cake with a gooey molten center, served with ice cream.",
          subimg: pizza66
        },
        2: {
          "Title": "Fruit Tart",
          "h4": "@120",
          Description: "A crispy tart shell filled with creamy custard and topped with fresh fruits.",
          subimg: pizza67
        },
        3: {
          "Title": "Cheesecake",
          "h4": "@180",
          Description: "Rich and creamy cheesecake with a graham cracker crust and berry topping.",
          subimg: pizza68
        },
        4: {
          "Title": "Mango Mousse",
          "h4": "@130",
          Description: "Light and airy mango mousse topped with whipped cream.",
          subimg: pizza69
        },
        5: {
          "Title": "Pistachio Kulfi",
          "h4": "@100",
          Description: "Creamy and rich kulfi flavored with pistachios and cardamom.",
          subimg: pizza70
        }
      },
      rating: 4.9,
      location: "Sweet Treats Avenue",
      image: top15
    }
    ,
    16: {
      name: "Sushi Place",
      Description: "Experience the art of sushi with our fresh and delicious offerings.",
      menu: {
        1: {
          "Title": "California Roll",
          "h4": "@120",
          Description: "A classic sushi roll filled with crab, avocado, and cucumber.",
          subimg: pizza71
        },
        2: {
          "Title": "Spicy Tuna Roll",
          "h4": "@150",
          Description: "Delicious tuna mixed with spicy mayo, rolled with avocado and cucumber.",
          subimg: pizza72
        },
        3: {
          "Title": "Salmon Nigiri",
          "h4": "@180",
          Description: "Fresh salmon on top of seasoned sushi rice, a true delicacy.",
          subimg: pizza73
        },
        4: {
          "Title": "Eel Avocado Roll",
          "h4": "@200",
          Description: "Grilled eel and avocado rolled in sushi rice, topped with eel sauce.",
          subimg: pizza74
        },
        5: {
          "Title": "Vegetable Tempura Roll",
          "h4": "@130",
          Description: "Crispy tempura vegetables rolled with sushi rice and seaweed.",
          subimg: pizza75
        }
      },
      rating: 4.8,
      location: "Sushi Street",
      image: top16
    }
    ,
    17: {
      name: "Steak House",
      Description: "Savor the finest cuts of steak grilled to perfection.",
      menu: {
        1: {
          "Title": "Ribeye Steak",
          "h4": "@350",
          Description: "Juicy ribeye steak with marbled fat for maximum flavor, grilled to your liking.",
          subimg: pizza76
        },
        2: {
          "Title": "Filet Mignon",
          "h4": "@450",
          Description: "Tender filet mignon, known for its buttery texture and rich flavor.",
          subimg: pizza77
        },
        3: {
          "Title": "T-Bone Steak",
          "h4": "@400",
          Description: "A classic T-bone steak with a flavorful strip on one side and tenderloin on the other.",
          subimg: pizza78
        },
        4: {
          "Title": "New York Strip",
          "h4": "@380",
          Description: "Bold and beefy New York strip steak, well-marbled and grilled to perfection.",
          subimg: pizza79
        },
        5: {
          "Title": "Sirloin Steak",
          "h4": "@300",
          Description: "Lean and flavorful sirloin steak, a popular choice for steak lovers.",
          subimg: pizza80
        }
      },
      rating: 4.9,
      location: "Steak Lovers Lane",
      image: top17
    }
    ,
    18: {
      name: "Mediterranean Bistro",
      Description: "Enjoy a taste of the Mediterranean with our vibrant and flavorful dishes.",
      menu: {
        1: {
          "Title": "Falafel Wrap",
          "h4": "@120",
          Description: "Crispy falafel balls wrapped in pita with fresh veggies and tahini sauce.",
          subimg: pizza81
        },
        2: {
          "Title": "Grilled Lamb Chops",
          "h4": "@350",
          Description: "Succulent lamb chops marinated with herbs and grilled to perfection.",
          subimg: pizza82
        },
        3: {
          "Title": "Hummus Platter",
          "h4": "@180",
          Description: "Creamy hummus served with pita, olives, and assorted vegetables.",
          subimg: pizza83
        },
        4: {
          "Title": "Mediterranean Quinoa Salad",
          "h4": "@150",
          Description: "Quinoa mixed with cherry tomatoes, cucumber, feta cheese, and olives.",
          subimg: pizza84
        },
        5: {
          "Title": "Baklava",
          "h4": "@90",
          Description: "A sweet pastry made of layers of filo filled with nuts and honey syrup.",
          subimg: pizza85
        }
      },
      rating: 4.7,
      location: "Mediterranean Square",
      image: top18
    }
    ,
    19: {
      name: "Vegan Delight",
      Description: "Savor our delicious and nutritious vegan dishes, crafted with fresh ingredients.",
      menu: {
        1: {
          "Title": "Quinoa Salad Bowl",
          "h4": "@150",
          Description: "A refreshing mix of quinoa, cherry tomatoes, cucumbers, and a lemon-tahini dressing.",
          subimg: pizza86
        },
        2: {
          "Title": "Chickpea Curry",
          "h4": "@200",
          Description: "A hearty chickpea curry simmered in coconut milk and spices, served with rice.",
          subimg: pizza87
        },
        3: {
          "Title": "Stuffed Bell Peppers",
          "h4": "@180",
          Description: "Bell peppers stuffed with a flavorful mixture of rice, beans, and spices.",
          subimg: pizza88
        },
        4: {
          "Title": "Vegan Tacos",
          "h4": "@120",
          Description: "Soft corn tortillas filled with roasted vegetables, avocado, and fresh salsa.",
          subimg: pizza89
        },
        5: {
          "Title": "Chocolate Avocado Mousse",
          "h4": "@100",
          Description: "A rich and creamy chocolate mousse made from ripe avocados and cocoa.",
          subimg: pizza90
        }
      },
      rating: 4.8,
      location: "Healthy Eats Avenue",
      image: top19
    }

  };


  const restaurant = restaurantData[id];

  if (!restaurant) {
    return <h2>Restaurant details not available.</h2>;
  }

  return (
    <div className="restaurant-details-container">
      <div className="restaurant-info">
        <h1>{restaurant.name}</h1>
        <img src={restaurant.image} alt={restaurant.name} className="menu-restaurant-image" />
        <p>{restaurant.description}</p>
        <p><strong>Rating:</strong> {restaurant.rating}</p>
        <p><strong>Location:</strong> {restaurant.location}</p>
        <h3>Menu</h3>
        {typeof restaurant.menu === 'object' ? (
          Object.values(restaurant.menu).map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-item-info">
                <h4>{item.Title} <span>{item.h4}</span></h4>
                <p>{item.Description}</p>
              </div>
              <div className="menu-item-image">
                <img src={item.subimg} alt={item.Title} />
              </div>
            </div>
          ))
        ) : (
          restaurant.menu.map((dish, index) => <p key={index}>{dish}</p>)
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;




/* <ul>
        {restaurant.menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
</ul> */








// import React from 'react'

// const RestaurantDetails = () => {
//   return (
//     <>
//     <div>
//       <div className="restaurant-grid">
//       {restaurants.map((restaurant) => (
//         <div className="restaurant-card" key={restaurant.id}>
//           <Link to={`/restaurant/${restaurant.id}`}>
//           <img src={restaurant.image}alt={restaurant.name} className="restaurant-image" />
//           <h3>{restaurant.name}</h3>
//           <p>Rating: {restaurant.rating} • {restaurant.time}</p>
//           <p>{restaurant.type}</p>
//           <p>{restaurant.location}</p>
//           </Link>
//         </div>
//       ))}
//     </div>
//     <ul>
//       <li>40-45 MINS</li>
//       <li>Rs. 400 Only</li>
//     </ul>
//     </div>
//     <div className='menuitems'>

//     </div>

//     </>
//   )
// }

// export default RestaurantDetails
