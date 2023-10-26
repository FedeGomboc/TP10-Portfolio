/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Federico",
    lastName: "Gomboc",
    initials: "fg", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: "", // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Nacido en Argentina'
        },
        {
            emoji: "💼",
            text: "Analista de sistemas en Google"
        },
        {
            emoji: "📧",
            text: "federicogomboc@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/fedegomboc",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/FedeGomboc",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/federico-gomboc-b68333279/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hola! Mi nombre es Federico, trabajo de analista en sistemas en Google. Estudié Ingeniería Informatica en Harvard, disfruto de pasear por la ciudad, y opino que el futuro del mundo es la inteligencia artificial. ¡Deberías contratarme!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'libros',
            emoji: '📖'
        },
        {
            label: 'series',
            emoji: '🎭'
        },
        {
            label: 'peliculas',
            emoji: '🎥'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ]        
}