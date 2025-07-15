const blogs = [
  {
    id: 1,
    title: "Mastering JavaScript Closures",
    category: "Programming",
    previewDescription: "Closures are a powerful concept in JavaScript",
    content:
      "Closures allow JavaScript functions to access variables from an outer scope even after that scope has closed. They’re essential for data privacy, callbacks, and function factories. In this blog, we dive deep into how closures work, common patterns, and real-world use cases like memoization and currying.",
  },
  {
    id: 2,
    title: "Hiking the Himalayas",
    category: "Travelling",
    previewDescription:
      "Trekking through the Himalayas is a breathtaking adventure filled",
    content:
      "The Himalayas offer some of the world’s most spectacular treks, from the Annapurna Circuit to the Everest Base Camp. This blog covers route details, gear checklist, altitude sickness tips, and personal stories from hikers who experienced both the beauty and challenges of this high-altitude adventure.",
  },
  {
    id: 3,
    title: "10-Minute Healthy Breakfasts",
    category: "Cooking",
    previewDescription:
      "Preparing a nutritious breakfast doesn’t have to take long",
    content:
      "Discover quick and healthy breakfast ideas like Greek yogurt parfaits, oatmeal smoothies, avocado toast, and chia seed puddings. These meals are high in nutrients, low in prep time, and perfect for busy mornings without sacrificing your health.",
  },
  {
    id: 4,
    title: "Building Muscle with Bodyweight",
    category: "Workouts",
    previewDescription:
      "Bodyweight training is a highly effective way to build",
    content:
      "Push-ups, squats, planks, and burpees can build muscle and strength without equipment. This guide explains progressive overload using bodyweight, proper form, and sample workout plans for beginners to advanced athletes.",
  },
  {
    id: 5,
    title: "Understanding Gut Health",
    category: "Health",
    previewDescription:
      "Gut health plays a critical role in overall well-being",
    content:
      "Your gut microbiome influences digestion, immunity, and even mental health. Learn about prebiotics, probiotics, foods to include, and lifestyle changes that promote a healthy gut. Backed by science and practical tips.",
  },
  {
    id: 6,
    title: "Async Await in JavaScript Simplified",
    category: "Programming",
    previewDescription:
      "Async/await is a modern approach to handling asynchronous",
    content:
      "Asynchronous programming doesn't have to be difficult. This tutorial explains how async/await simplifies promises, error handling with try/catch, and how to refactor old callback code to be cleaner and easier to read.",
  },
  {
    id: 7,
    title: "Backpacking Through Europe",
    category: "Travelling",
    previewDescription: "Backpacking through Europe offers a rich blend of",
    content:
      "Explore must-visit cities like Prague, Amsterdam, and Rome on a backpacker's budget. This blog offers tips on Eurail passes, hostel stays, cultural etiquette, and maximizing experiences with minimal expense.",
  },
  {
    id: 8,
    title: "One-Pot Meals for Busy Nights",
    category: "Cooking",
    previewDescription:
      "One-pot meals are a lifesaver for busy individuals who",
    content:
      "From creamy pasta to hearty stews, discover recipes you can make with minimal cleanup and ingredients. Perfect for students, professionals, or parents juggling a busy schedule but still wanting a warm meal.",
  },
  {
    id: 9,
    title: "Daily Mobility Routines",
    category: "Workouts",
    previewDescription:
      "Mobility training improves joint function, flexibility, and overall",
    content:
      "Daily mobility drills like hip openers, shoulder rolls, and dynamic stretches help prevent injury and improve posture. This guide includes 10-minute routines to keep your joints healthy and body limber.",
  },
  {
    id: 10,
    title: "The Science of Sleep",
    category: "Health",
    previewDescription:
      "Sleep is essential for cognitive function, emotional regulation",
    content:
      "Understand sleep cycles, the role of REM and deep sleep, and how to improve your sleep hygiene. Learn about circadian rhythms and how poor sleep impacts physical and mental health.",
  },
  {
    id: 11,
    title: "React Props and State Demystified",
    category: "Programming",
    previewDescription:
      "Props and state are fundamental concepts in React",
    content:
      "Learn the difference between props and state in React, how data flows in components, and when to use each. Includes code samples and best practices for building dynamic UIs.",
  },
  {
    id: 12,
    title: "Exploring Kerala's Backwaters",
    category: "Travelling",
    previewDescription:
      "Kerala's backwaters offer a tranquil escape into nature's",
    content:
      "Cruising through Kerala’s palm-lined canals on a houseboat is a must-do. Learn about Alleppey’s routes, culture, food, and eco-tourism initiatives that make this region a traveler’s paradise.",
  },
  {
    id: 13,
    title: "High-Protein Vegetarian Meals",
    category: "Cooking",
    previewDescription: "Eating vegetarian doesn't mean missing out on protein",
    content:
      "Get protein-rich recipes using lentils, tofu, quinoa, chickpeas, and paneer. These meals support muscle growth and balanced nutrition without relying on meat.",
  },
  {
    id: 14,
    title: "Full-Body Home Workouts",
    category: "Workouts",
    previewDescription: "Home workouts can be just as effective as gym",
    content:
      "No gym? No problem. This blog includes circuits that target every major muscle group using minimal or no equipment. Plus, warm-up and cool-down routines.",
  },
  {
    id: 15,
    title: "The Power of Preventive Healthcare",
    category: "Health",
    previewDescription:
      "Preventive healthcare focuses on avoiding illness rather than",
    content:
      "From regular screenings to lifestyle changes, learn how prevention can reduce medical costs and improve quality of life. Covers diet, exercise, and vaccination.",
  },
  {
    id: 16,
    title: "Effective HIIT Routines for Fat Loss",
    category: "Workouts",
    previewDescription:
      "High-Intensity Interval Training (HIIT) burns fat quickly and boosts metabolism.",
    content:
      "HIIT alternates short bursts of intense activity with rest. This blog includes sample routines, the science behind fat burning, and how to tailor workouts to your fitness level.",
  },
  {
    id: 17,
    title: "Stretching Exercises to Prevent Injury",
    category: "Workouts",
    previewDescription:
      "Proper stretching improves flexibility and reduces the risk of workout-related injuries.",
    content:
      "Static and dynamic stretching routines for pre- and post-workout, along with common mistakes to avoid. Ideal for athletes and casual fitness enthusiasts.",
  },
  {
    id: 18,
    title: "Beginner’s Guide to Pencil Shading",
    category: "Drawing",
    previewDescription:
      "Master basic pencil shading techniques to add depth and realism to your sketches.",
    content:
      "Learn how to control pressure, blend tones, and use tools like tortillons. This beginner’s guide explains hatching, cross-hatching, and smooth shading with step-by-step examples.",
  },
  {
    id: 19,
    title: "How to Draw Human Anatomy Proportionally",
    category: "Drawing",
    previewDescription:
      "Learn step-by-step methods to sketch accurate human body proportions for figure drawing.",
    content:
      "Understand the head-to-body ratio, landmarks of the human figure, and how to sketch front, side, and dynamic poses using proportional guides.",
  },
  {
    id: 20,
    title: "Exploring Color Theory in Art",
    category: "Drawing",
    previewDescription:
      "Understand how to use complementary colors and color harmony to enhance your artwork.",
    content:
      "Learn about primary, secondary, and tertiary colors, warm vs cool tones, and how artists use contrast and color schemes to create mood and focus in compositions.",
  },
  {
    id: 21,
    title: "Inking Techniques for Comic Art",
    category: "Drawing",
    previewDescription:
      "Discover essential inking tools and line work styles used by professional comic artists.",
    content:
      "This guide covers brush pens, dip pens, line weights, and crosshatching. Plus tips for clean line art, adding shadows, and enhancing dramatic effects.",
  },
  {
    id: 22,
    title: "Top 5 Open-World Games You Must Play",
    category: "Gaming",
    previewDescription:
      "Explore vast, immersive worlds with our list of the best open-world games available today.",
    content:
      "Games like The Witcher 3, Red Dead Redemption 2, and Breath of the Wild redefine exploration. Read our breakdown of story, gameplay, and graphics for each.",
  },
  {
    id: 23,
    title: "How Esports is Changing Modern Gaming",
    category: "Gaming",
    previewDescription:
      "Esports is transforming casual gaming into a global competitive phenomenon.",
    content:
      "From League of Legends to Valorant, learn how esports is creating careers, stadium events, and a billion-dollar industry. Explore its impact on youth and digital culture.",
  },
  {
    id: 24,
    title: "Beginner's Guide to Building a Gaming PC",
    category: "Gaming",
    previewDescription:
      "Learn what components you need and how to build a high-performance gaming rig from scratch.",
    content:
      "We cover the CPU, GPU, motherboard, RAM, power supply, and how to balance performance and budget. Includes compatibility tips and building resources.",
  },
  {
    id: 25,
    title: "Mobile Games That Are Actually Worth Playing",
    category: "Gaming",
    previewDescription:
      "Not all mobile games are shallow — here are titles that deliver console-quality fun on your phone.",
    content:
      "From Genshin Impact to Call of Duty Mobile, explore mobile games with rich gameplay, graphics, and replay value that rival PC and console titles.",
  },
  
  {
    id: 26,
    title: "Understanding REST APIs with Real-Life Examples",
    category: "Programming",
    previewDescription: "Learn how REST APIs work and how to integrate them into your web applications with practical examples.",
    content:
      "This article explains HTTP methods (GET, POST, PUT, DELETE), endpoints, status codes, and how to test APIs using Postman. Includes examples using JavaScript fetch and Express.js."
  }
];

export default blogs;
