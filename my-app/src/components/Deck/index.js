const cards = [
    {
        id:1,
        name:'Cat Card',
        imageUrl:'https://res.cloudinary.com/dvhdil4k3/image/upload/v1710518742/cat-face-emoji-2048x1821-x3kf878r_xu7m5z.png'
    },{
        id:2,
        name:'Exploding kitten card',
        imageUrl:'https://res.cloudinary.com/dvhdil4k3/image/upload/v1710518730/bomb_k1uzbg.jpg'
    },
    {
        id:3,
        name:'Defuse card',
        imageUrl:'https://res.cloudinary.com/dvhdil4k3/image/upload/v1710518717/defuser_juohnj.jpg'
    },
    {
        id:4,
        name:'Shuffle Card',
        imageUrl:'https://res.cloudinary.com/dvhdil4k3/image/upload/v1710518752/shuffle-tracks-button_dnx7cu.png'
    }
]

const CreateDeckWithRamdomCards = () => {
    let deck = []
    for (let i=0;i<5;i++){
        const randomNum = Math.floor(Math.random()*4)
        if (deck.length > 0 && deck[deck.length - 1].id === 4) {
            const num = Math.floor(Math.random()*3)
            deck.push(cards[num])
          }else{
          deck.push(cards[randomNum])
        }
    }
    return deck
}

export default CreateDeckWithRamdomCards
