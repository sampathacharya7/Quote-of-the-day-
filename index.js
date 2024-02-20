const quotes = {
    'happy': [
        { text: "Happiness is not out there, it's in you.", author: "Unknown" },
        { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
        { text: "The most important thing is to enjoy your life—to be happy—it's all that matters.", author: "Audrey Hepburn" },
        { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    ],
    'sad': [
        { text: "Tears are words that need to be written.", author: "Paulo Coelho" },
        { text: "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.", author: "Henry Wadsworth Longfellow" },
        { text: "Tears come from the heart and not from the brain.", author: "Leonardo da Vinci" },
        { text: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" },
    ],
    'motivational': [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text:  "Don't watch the clock; do what it does. Keep going." , author: " Sam Levenson" },
        { text: "The only way to achieve the impossible is to believe it is possible." , author: "Charles Kingsleigh" },
        { text: "Believe you can and you're halfway there." ,author: "Theodore Roosevelt" },
    ],
    'funny': [
        { text: "I'm not lazy. I'm just on my energy saving mode.", author: "Unknown" },
        { text: "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.", author: "Groucho Marx" },
        { text: "I'm an idealist. I don't know where I'm going, but I'm on my way." , author: "Carl Sandburg" },
        { text: "I didn't fail the test. I just found 100 ways to do it wrong. ", author: "Benjamin Franklin" },
    ], 
'inspirational': [
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    ],
    'calm': [
        { text: "Calm mind brings inner strength and self-confidence, so that's very important for good health.", author: "Dalai Lama" },
        { text: "In the midst of movement and chaos, keep stillness inside of you.", author: "Deepak Chopra" },
        { text: "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.", author: "Hermann Hesse" },
        { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James" },
    ],
    'excited': [
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    ],
    'grateful': [
        { text: "Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for.", author: "Zig Ziglar" },
        { text: "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.", author: "Oprah Winfrey" },
        { text: "When I started counting my blessings, my whole life turned around.", author: "Willie Nelson" },
        { text: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.", author: "Melody Beattie" },
    ],
    'uplifting': [
        { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" },
        { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    ],
   'Success':[
    {text:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",author:"Albert Schweitzer"},
    {text:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},
    {text:"Success is not in what you have, but who you are.",author:"Bo Bennett"},
   ],
   'Life':[
    {text:"The purpose of our lives is to be happy.",author:"Dalai Lama"},
    {text:"Life is what happens when you're busy making other plans.",author:"John Lennon"},
    {text:"Life is either a daring adventure or nothing at all.",author:"Helen Keller"},
   ],
   'Friendship':[
    {text:"Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.",author:"C.S. Lewis"},
    {text:"A real friend is one who walks in when the rest of the world walks out.",author:"Walter Winchell"},
    {text:"True friendship comes when the silence between two people is comfortable",author:"David Tyson Gentry"},
    {text:"A friend is someone who knows all about you and still loves you.",author:"Elbert Hubbard"},
   ],
   'Love':[
    {text:"I have found the one whom my soul loves.",author:"Song of Solomon "},
    {text:"Love is composed of a single soul inhabiting two bodies.",author:"Aristotle"},
    {text:"The best thing to hold onto in life is each other",author:"Audrey Hepburn"},
   ],
   'Wisdom':[
    {text:"The only true wisdom is in knowing you know nothing.",author:"Socrates"},
    {text:"The journey of a thousand miles begins with one step.",author:" Lao Tzu"},
    {text:"The only way to do great work is to love what you do.",author:"steve jobs"},
   ],
   'Philosophical':[
    {text:"The unexamined life is not worth living.",author:"Socrates"},
    {text:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",author:" Aristotle"},
    {text:"I think, therefore I am.",author:"René Descartes"},
   ],
   'Hope':[
    {text:"Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.",author:" Emily Dickinson"},
    {text:"Hope is being able to see that there is light despite all of the darkness.",author:" Desmond Tutu"},
    {text:"Hope is a waking dream.",author:"aristole"},
    {text:"When you have lost hope, you have lost everything. And when you think all is lost, when all is dire and bleak, there is always hope",author:"Pittacus Lore"},

   ],
};

    


/*it is used for making popups */
var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        window.onload = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }




let currentCategory = 'happy'; // Default category

function getCategoryQuote(category) {
    currentCategory = category; // Remember the selected category
    const categoryQuotes = quotes[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.textContent = categoryQuotes[randomIndex].text;
    authorElement.textContent = categoryQuotes[randomIndex].author;
}

function getRandomQuote() {
    getCategoryQuote(currentCategory); // Use the last selected category
}

// Initial quote display
getRandomQuote();