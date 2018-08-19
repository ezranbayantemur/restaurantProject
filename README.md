# restaurantProject
(Türkçe için)[https://github.com/ezranbayantemur/restaurantProject/blob/master/README.tr.md]
## Info
This project just for an practice example of **React Native**

A prototype of a restaurant menu project. Customer can see all foods and categories, foods price, foods description (like checking ingredients for allergens) from this app. Owner can add multiple categories and foods for showing his customers on tablet. For food info, owner can add (from Admin Panel) food description, food photo, food price. Along with that owner can show any food on showcase.

## Used Packages
- `react-native-router-flux` for routing on project. All app has three views(screen) `src/pages`.
- `react-native-swiper` for showcase.
- `firebase` for database support.

I used Firestore for data storage because it's faster and supports almost free for data storage ( [for Firebase pricing](https://firebase.google.com/pricing) ). 
For this project Firestore contains all data on two collections like "categories" and "foods" by NoSQL data type. All foods kept on "foods" collection with specific id. On very begining of application all category and showcase datas are pulling from Firestore. When a category has selected all related foods -*which is contains same category id with selected category's id*- are rendered on the screen. And if customer click on a food, detail page shows selected foods info to customer.

It's really basic practice for React Natvie, but it can be improved. I removed data configuration for privacy but data structure still stays there. Also I added comment lines as much as i can for explain data structure.

### Note
I used Google Firebase (Cloud Firestore and Cloud Storage) version 5.0.3. Latest version has error for React Native 0.55.4 version. I make this app on Windows for right now React Native latest version doesn't work on Windows.

(Admin Panel will be added)

More feature will be added on soon.

If you have any question or suggestion, feel free to [open an issue](https://github.com/ezranbayantemur/restaurantProject/issues/new).

**See y'all !**
