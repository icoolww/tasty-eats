INSERT INTO categories (name) VALUES ('Breakfast');
INSERT INTO categories (name) VALUES ('Lunch');
INSERT INTO categories (name) VALUES ('Dinner');

INSERT INTO users (user_name) VALUES ('user1');
INSERT INTO users (user_name) VALUES ('user2');
INSERT INTO users (user_name) VALUES ('user3');

INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (1, 2, 'Tiramisu', 
    'Ingredients:
    1 cup espresso
    40 ladyfingers
    6 egg yolks
    3/4 cup sugar
    16 oz cream cheese
    2 cups heavy whipping cream
    rum
    3 tbsp cocoa powder',
    'Directions:
    1. Stir together 1 cups of espresso and 2 tbsp rum, quickly dip 20 ladyfingers, arrange them in a layer of casserole dish
    2. Whisk 10 minutes together 6 egg yolks and sugar on low heat (on a pot with simmering water) until slightly thickened
    3. Add 16 oz cream cheese, 2 tbsp rum
    4. Beat whipping cream in a separate bowl, then gently fold into the cream cheese mixture
    5. Spread half of the cream to the ladyfinger, then dip remaining ladyfingers, spread the cream, refigerate overnight
    6. Dust with cocoa powder before serving',
    'https://firebasestorage.googleapis.com/v0/b/tasty-eats-bc9d5.appspot.com/o/tiramisu.jpg?alt=media&token=7b5f8159-4da1-4ad1-aaa6-3ea90e6278a8',
    '30 minutes',
    '12 slices',
    'easy'
    );

INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (1, 2, 'Apple Pie', 
    'Ingredients:
    1/2 cup unsalted butter
    3 tbsp all purpose flour
    1/4 cup water
    1/2 cup sugar
    1/2 cup brown sugar
    8 apples',
    'Directions:
    1. Preheat oven to 425 degrees F (220 degrees C). Melt the butter in a saucepan. Stir in flour to form a paste
    2. Add water, white sugar and brown sugar, and bring to a boil. Reduce temperature and let simmer
    3. Place the bottom crust in your pan. Fill with apples, mounded slightly. Cover with a lattice work crust
    4. Gently pour the sugar and butter liquid over the crust. Pour slowly so that it does not run off
    5. Bake 15 minutes in the preheated oven. Reduce the temperature to 350 degrees F (175 degrees C)
    6. Continue baking for 35 to 45 minutes, until apples are soft',
    'https://firebasestorage.googleapis.com/v0/b/tasty-eats-bc9d5.appspot.com/o/apple_pie.jpg?alt=media&token=b0766ec4-285c-40c3-8922-fce60522c51d',
    '30 minutes',
    '9 slices',
    'easy'
    );

  INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (2, 2, 'Pesto Basil Pasta', 
    'Ingredients:
    2 1/2 cups fresh basil leaves, washed and dried thoroughly
    2 tbsp grated Parmesan cheese
    3 cloves garlic, roughly chopped
    2 tbsp pine nuts, toasted and cooled
    1 pinch black pepper
    1/4 cup extra virgin olive oil
    200 gr of pasta',
    'Directions:
    1. Combine the basil leaves, parmesan cheese, garlic, toasted pine nuts, kosher salt and pepper in a blender until well blended
    2. Drizzle in the olive oil and continue blending, scraping down the sides as needed, until the pesto is puréed
    3. Taste and season it with salt and pepper
    4. Cook pasta in a boiling water for 6 1/2 minutes
    5. Toast the cooked pasta in a frying pan together with the basil pesto until it is coated evenly
    6. Put grated parmesan on the top and ready to eat',
    'https://firebasestorage.googleapis.com/v0/b/tasty-eats-bc9d5.appspot.com/o/pesto_pasta.jpeg?alt=media&token=ab3243b2-663c-4fd8-9307-669696d0f3bb',
    '90 minutes',
    '1 serving',
    'medium'
    );

  INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (3, 2, 'BBQ Brisket', 
    'Ingredients:
    3 lbs brisket (marinated overnight before will be better)
    3 tbsp onion powder
    3 tbsp chili powder
    3 tbsp garlic powder
    3 tbsp mustard powder
    3 tbsp brown sugar powder
    salt as needed
    1 tbsp Worcestershire sauce
    1 tsp apple cider vinegar',
    'Directions:
    1. Heat grill to 350 degrees. Trim fat cap of brisket so there is just a thin, even layer. 
    2. Combine 2 tablespoons each onion powder, garlic powder, sugar, mustard powder, chili powder, and 2 teaspoons salt in a small bowl
    3. Rub evenly over the entire surface of the meat. Let sit at room temperature, uncovered, for 20 minutes
    4. Place the brisket fat-cap-side down over a direct flame and cook until spices are browned, about 10 minutes.
    5. Flip and grill the other side for about another 10 minutes
    6. Adjust ther frill to 250 degrees, rest the brisket for half hour, then put it back to the grill for 1 hour
    7. Transfer to cutting board and thent with aluminum foil, rest it for 30 minutes
    8. Combine ketchup, Worcestershire sauce, onion powder, chili powder, garlic powder in it
    9. Microwave for 1 minutes and ready to serve',
    'https://firebasestorage.googleapis.com/v0/b/tasty-eats-bc9d5.appspot.com/o/brisket.jpg?alt=media&token=cc4ccead-2115-42e1-8b3a-4e24482525c8',
    '4 hours',
    '8 servings',
    'advance'
  );

INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (3, 2, 'Mac n Cheese', 
    'Ingredients:
    16 oz macaroni
    1 tbsp olive oil
    6 tbsp unsalted butter
    1/3 tbsp olive oil
    3 cups milk
    1 cup heavy whipping cream
    4 cups cheddar cheese
    1 1/2  cups Panko crumbs
    1/2 cup Parmesan cheese
    1/4 tsp paprika
    4 tbsp butter',
    'Directions:
    1. Preheat oven to 350 degrees. Lightly grease a large 3 qt or 4 qt baking dish and set aside
    2. Cook the macaroni one minute shy of al dente according to the package instructions. Remove from heat, drain, and place in a large bowl
    3. Drizzle pasta with olive oil and stir to coat pasta. Set aside to cool while preparing cheese sauce
    4. Melt butter in a deep saucepan, dutch oven, or stock pot, whisk in flour over medium heat and continue whisking for about 1 minute until bubbly and golden
    5. Gradually whisk in the milk and heavy cream until nice and smooth, keep whisking until you see bubbles on the surface and then continue cooking and whisking for another 2 minutes
    6. Add two cups of shredded cheese and whisk until smooth
    7. Stir in the cooled macaroni until combined and pasta is fully coated with the cheese sauce
    8. In a small bowl, combine panko crumbs, Parmesan cheese, melted butter and paprika
    9. Sprinkle over the top and bake until bubbly and golden brown, about 30 minutes',
    'https://firebasestorage.googleapis.com/v0/b/tasty-eats-bc9d5.appspot.com/o/mac_and_cheese.jpeg?alt=media&token=6d8b9e14-9133-4b29-b655-fd36f2a96182',
    '60 minutes',
    '12 servings',
    'medium'
    );


    INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (1, 2, 'Tuna Tacos', 
    'Ingredients:
    2 canned tuna(8oz)
    2 sour cream
    2 tbsp cream
    1 tsp lemon juice
    1/4 cup chopped cilantro
    1/4 cup chopped onion
    4 cups cheddar cheese
    1 tsp olive oil
    4 pcs corn tortillas
    2 tbsp mayonaise',
    'Directions:
    1. Whisk together the mayonnaise, sour cream, cream, and lemon juice
    2. In a separate bowl, stir together the onions and cilantro. Set this garnish and the cream sauce aside for the moment
    3. Heat oil in a small pan and sauté the tuna, stirring often, until the tuna is heated through and very slightly browned
    4. If using soft tortillas, heat a griddle over high heat and place them on it. Heat the tortillas, turning once or twice in the process, until they are very hot 
    5. For hard taco shells, place them on a baking sheet and heat until crispy
    6. Place 1/4 of the tuna mixture onto each tortilla, then top each with some of the onion-cilantro mix, and a drizzle of cream sauce',
    'https://firebasestorage.googleapis.com/v0/b/tasty-eats-bc9d5.appspot.com/o/tuna_tacos.jpeg?alt=media&token=5761d90e-b797-485b-9c6f-622a1cd13b10',
    '60 minutes',
    '12 servings',
    'easy'
    );

      INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (2, 2, 'Strawberry Spinach Salad', 
    'Ingredients:
    1/2 cup white sugar
    1/2 cup olive oil
    1/4 cup distilled white vinegar
    2 tbsp sesame seeds
    1 tbsp poppy seeds
    1 tbsp minced onion
    4 cups cheddar cheese
    1/4 tsp paprika
    1/4 tsp Worcestershire sauce
    1 quart strawberries
    10 ounces spinach
    1/4 cup almonds',
    'Directions:
    1. Whisk together sugar, oil, vinegar, sesame seeds, poppy seeds, onion, paprika, and Worcestershire in a medium bowl. Cover and chill for 1 hour
    2. Combine strawberries, spinach, and almonds in a large bowl
    3. Pour dressing over salad; toss to coat. Refrigerate for 10 to 15 minutes before serving',
    'https://firebasestorage.googleapis.com/v0/b/tasty-eats-bc9d5.appspot.com/o/strawberry_salad.jpg?alt=media&token=875b56ad-b615-4b91-b409-486022b0d0ce',
    '80 minutes',
    '4 servings',
    'easy'
    );


    INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (2, 2, 'Egg Fried Rice', 
    'Ingredients:
    4 eggs
    3 tbsp vegetable oil
    1 cup diced onion
    2 cups diced mixed vegetables
    1/2 cup sliced scallions
    pinch of salt0
    4 cups cooked jasmine rice (overnight)
    2 1/2 tbsp soy sauce
    2 tsp toasted sesame oil',
    'Directions:
    1. Crack the eggs into a small bowl and beat them together
    2. Heat a skillet with 1 tablespoon of the oil over medium-high heat. Once the pan is hot, add the beaten eggs and scramble them for about a minute
    3. Heat oil in a small pan and sauté the tuna, stirring often, until the tuna is heated through and very slightly browned
    4. Drizzle the remaining 2 tablespoons of oil into a wok over high heat. Add the onions and cook them for about 1 to 2 minutes, stirring constantly
    5. Add the mixed vegetables and white parts of the scallions and cook for 2 minutes
    6. Add the cooked rice into the pan or wok and cook for several minutes, until the rice is heated through
    7. Add the soy sauce, five-spice powder, dash of white pepper (if using) and sesame oil and stir to distribute the seasonings
    8. Add the scrambled eggs and stir to mix again, garnish with remaining sliced scallions',
    'https://firebasestorage.googleapis.com/v0/b/tasty-eats-bc9d5.appspot.com/o/fried_rice.jpeg?alt=media&token=f3b7f6bb-6003-49eb-9d9f-efc663f18e5e',
    '45 minutes',
    '4 servings',
    'medium'
    );



    INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (3, 2, 'Bagel and Lox', 
    'Ingredients:
    Everything Bagel – toasted to your liking. I like it lightly toasted, so there is a little crunch with a whole lotta chew
    Cream Cheese – I use whipped for easy spreading
    Lox – or smoked salmon, if preferred I go into more detail below about the differences between lox and smoked salmon
    Cucumber – adds an amazing light, fresh flavor to balance out the richness of the cream cheese and lox
    Red Onion – provides crunch and a nice “bite” to contrast the rich lox
    Capers – adds a “pop” of texture and ultra brine-y flavor
    Salt and Pepper – enhances other flavors
    Lemon Juice and Fresh Dill – to garnish Add delicious tang, sweetness, and earthy flavor',
    'Directions:
    Spread each toasted bagel half with 2 tablespoons whipped cream cheese.
    Top each half with 2 oz smoked salmon or lox, 3 cucumber slices, 1 slice red onion, and 1-2 teaspoons capers.
    Season with salt, pepper, lemon juice, and fresh dill, to taste.
    Enjoy!
    Take 5 seconds to rate this recipe below. We greatly appreciate it!',
    'URL',
    '40 minutes',
    '4 servings',
    'medium'
    );


    INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (1, 2, 'Butter Tarts', 
    'Ingredients:
      3 cups (375g) all-purpose flour, plus more for dusting
      1/2 tsp (2.5ml) baking powder
      1/2 tsp (2.5ml) salt
      1/2 cup (114g) lard
      1/2 cup (114g) unsalted butter
      1 large egg
      1 tsp (5ml) white vinegar
      1 cup (250ml) cold water',
    'Directions:
    Roll the dough to about 1/8″ thick. Cut as many 4″ circles as you can. Re-roll the scraps and cut out more circles to make 12.
    Fit the pastry circles into a muffin pan and place back in the fridge until ready to fill.
    In a small saucepan over medium heat, melt the butter and brown sugar until combined. Whisk in a splash of cream and vanilla extract. Let cool for 5 minutes and whisk in an egg.
    Divide any add-ins like pecans or raisins if using among the pastry.
    Pour in the butter tart filling just until half full.
    Bake at 375F for 13-15 minutes or until crust is lightly golden and filling is bubbling',
    'URL',
    '65 minutes',
    '5 servings',
    'medium'
    );




    INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (2, 2, 'Sphagetti Carbonara', 
    'Ingredients:
      8 ounces spaghetti
      2 large eggs
      1/2 cup freshly grated Parmesan
      4 slices bacon, diced
      4 cloves garlic, minced
      Kosher salt and freshly ground black pepper, to taste
      2 tablespoons chopped fresh parsley leaves',
    'Directions:
    In a large pot of boiling salted water, cook pasta according to package instructions; reserve 1/2 cup water and drain well.
    In a small bowl, whisk together eggs and Parmesan; set aside.
    Heat a large skillet over medium high heat. Add bacon and cook until brown and crispy, about 6-8 minutes; reserve excess fat.
    Stir in garlic until fragrant, about 1 minute. Reduce heat to low.
    Working quickly, stir in pasta and egg mixture, and gently toss to combine; season with salt and pepper, to taste. Add reserved pasta water, one tablespoon at a time, until desired consistency is reached.
    Serve immediately, garnished with parsley, if desired',
    'URL',
    '20 minutes',
    '1 serving',
    'medium'
    );



    INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (1, 2, 'Lobster Roll', 
    'Ingredients:
    1 1/2 pounds cooked lobster meat approximately 3 1/2 cups, cut into 3/4 inch pieces
    1/4 cup mayonnaise
    1 1/2 tablespoons lemon juice
    1/4 cup celery finely chopped, use the tender inner stalks
    1 tablespoon chives thinly sliced, plus more for garnish if desire salt and pepper to taste
    4 split top hot dog buns
    2 tablespoons butter softened',
    'Directions:
    Place the lobster meat, mayonnaise, lemon juice, celery, chives, salt and pepper in a bowl.
    Stir gently to combine.
    Spread the butter onto the outer sides of each bun. Place the buns in a pan or on a griddle over medium heat. Cook for 2-3 minutes per side or until golden brown.
    Divide the lobster mixture among the buns. Serve immediately, garnished with additional chives if desired.',
    'URL',
    '30 minutes',
    '2 servings',
    'easy'
    );

      INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (3, 2, 'Poutine', 
    'Ingredients:
    1 quart vegetable oil for frying
    1 (10.25 ounce) can beef gravy
    5 medium potatoes, cut into fries
    2 cups cheese curds',
    'Directions:
    Heat oil in a deep fryer or deep heavy skillet to 365 degrees F (185 degrees C).
    While the oil is heating, you can begin to warm your gravy.
    Place the fries into the hot oil, and cook until light brown, about 5 minutes. Make the fries in batches if necessary to allow them room to move a little in the oil.
    Remove to a paper towel lined plate to drain
    Place the fries on a serving platter, and sprinkle the cheese over them.
    Ladle gravy over the fries and cheese, and serve immediately.',
    'URL',
    '45 minutes',
    '2 servings',
    'easy'
    );

      INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (2, 2, 'Beavertails', 
    'Ingredients:
    yeast, sugar and warm Water
    warm milk
    melted butter
    vanilla
    salt
    egg',
    'Directions:
    In a large bowl, mix the yeast, warm water, and ¼ teaspoon of sugar. Allow the water mixture to stand for a couple of minutes to allow the yeast to swell and dissolve.
    Depending on various factors (temperature, humidity, etc.) this could take as long as 10 minutes.
    Add the ⅓ Cup of sugar, milk, vanilla, eggs, oil, salt, and most of the flour to the yeast mixture. Knead for 5 to 8 minutes using a dough hook, adding flour as needed to form a firm smooth, elastic dough.
    Place dough in a lightly greased bowl. Place a warm towel on top of the bowl and "seal". If you are not going to use the dough right away, you can refrigerate the dough at this point.
    Let rise for about 30 to 40 minutes.',
    'URL',
    '75 minutes',
    '6 servings',
    'medium'
    );


      INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
  VALUES (2, 2, 'Lasagna', 
    'Ingredients:
    2 tablespoons white sugar
    1 1/2 teaspoons dried basil leaves
    1/2 teaspoon fennel seeds
    1 teaspoon Italian seasoning
    1 1/2 teaspoons salt, divided, or to taste
    1/4 teaspoon ground black pepper
    4 tablespoons chopped fresh parsley
    12 lasagna noodles
    16 ounces ricotta cheese
    1 egg
    3/4 pound mozzarella cheese, sliced
    3/4 cup grated Parmesan cheese',
    'Directions:
    In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned.
    Stir in crushed tomatoes, tomato paste, tomato sauce, and water.
    Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley.
    Simmer, covered, for about 1 1/2 hours, stirring occasionally.
    To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce.
    Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices.
    Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese',
    'URL',
    '45 minutes',
    '4 servings',
    'medium'
    );