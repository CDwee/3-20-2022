// Started at 3:30 3-20-2022

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ukraine war</title>
    <link rel="stylesheet" href="Ukraine.css">
</head>
<body>
    <div class="header">
        <header>
            <h1>
                🇺🇦 Current Ukraine situaion and how many family is involved 🇺🇦
            </h1>
        </header>
    </div>
    <div>
    <section class="story">
        <p>
            Currently in Ukraine, there is a war going on between Ukraine and Russia. Because Russia invaded Ukraine. Russia invaded Ukraine so Ukraine won't join NATO (the North Atlantic Treaty Organization). Companies such as, gold belly, Airbnb, and many others are donating the proceeds they get from their customers to Ukraine. My stepmom, (Megan) and I bought the food from gold belly to support the crisis currently happening in Ukraine because my stepmom owns a cyber security tech company (<a href="https://violetx.com/">violetX</a>) that has software developers, software engineers, and designers that work for her company that live in Ukraine. Tech is in my life everyday, because I am a coder and in order to code I have to use technology to write the code somewhere and in order to see the output, I have to use tech. Us Americans can help Ukraine even though they're far away on a different continent than we are. The ways you can help today is simple by just buying something from <a href="https://www.goldbelly.com/support-ukraine">the goldbelly Ukraine collection</a>
        </p>
    </section>
    </div>

    <div>
        <section class="flag">
            <img src="Ukrain flag.png">
        </section>
    </div>
</body>
</html>

.header {
  text-align: center;
  color: blue;
}

.story {
  font-size: 25px;
}


if(restaurant.openHours && restaurant.openingHours.mon) 
  console.log(restaurant.openingHours.mon.open);

  // console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
};

// Stopped at 8:34 3-20-2022 have to do homework
