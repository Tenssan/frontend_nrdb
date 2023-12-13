import monoMesaRedondaBlack from '../public/monos_planeando_black.png'
import monoMesaRedondaBlue from '../public/monos_planeando_blue.png'
import monoMesaRedondaRed from '../public/monos_planeando_red.png'
import monoEstudiandoWhite from '../public/monos_eestudiando_white.png'
import monoEstudiandoGray from '../public/monos_eestudiando_gray.png'
import monoNadando from '../public/monos_nadando_black.png'
import monoComiendo from '../public/monos_comiendo_graphite.png'
import monoPeleandoBlack from '../public/monos_peleando_black.png'
import monoPeleandoSilver from '../public/monos_peleando_silver.png'
import monoFiestaBlack from '../public/monos_en_fiesta_black.png'
import monoFiestaSilver from '../public/monos_en_fiesta_silver.png'
import Img from '../public/Placeholder.jpg';

export const PopularProductsList = [
    {
      id: "1",
      name: "Monos Estudiando",
      description: "Step into the enchanting realm of cosmic knowledge with our extraordinary T-shirt, a mystical fusion of celestial wonder and intellectual pursuit. Within the velvety depths of the nocturnal canvas, an awe-inspiring tableau unfolds: behold a mischievous yet scholarly monkey, seated beneath the cosmic expanse, deeply immersed in the magical world of mathematics. This bewitching garment transports you to a plane where the celestial meets the scholarly. The night sky serves as a celestial tapestry, adorned with twinkling stars that seem to whisper secrets in arcane equations, their glow both enchanting and thought-provoking. Amidst this stellar symphony, the monkey, adorned with an air of wisdom and adorned in scholarly accessories, unravels the cosmic enigmas with a fervor that bridges the divide between whimsy and wisdom. As you gaze upon the design, the mathematical equations spiral and dance in a celestial ballet around the primate, each line a shimmering strand connecting the monkey's astute mind to the mysteries of the universe. The scene is a cosmic library of sorts, with a mystical chalkboard offering glimpses into the monkey's quest for celestial truth. Accompanied by the radiant glow of the crescent moon, this design emanates an ethereal luminescence, beckoning the wearer to join the monkey on its intellectual odyssey through the cosmos. Embrace the fusion of the enigmatic and the scholarly, where the playful curiosity of the monkey meets the celestial grandeur of the night sky, all woven into the fabric of this extraordinary T-shirt. Step into the unknown, embrace the cosmic dance of mathematical wisdom, and wear this garment as a testament to your connection with the ineffable mysteries of the universe. Available exclusively on our webpage, this T-shirt is not just an article of clothing but a gateway to a world where the celestial and the intellectual converge in wondrous harmony.",
      price: 2999,
      brand: "Monobrand",
      category: "Category A",
      inStock: true,
      images: [
        {
          color: "White",
          colorCode: "#FFFFFF",
          image:monoEstudiandoWhite.src,
        },
        {
          color: "Gray",
          colorCode: "#808080",
          image:monoEstudiandoGray.src,
        },
      ],
      reviews: [],
    },
    {
        id: "3",
        name: "Monos Planeando",
        description: "Embark on a legendary journey into the heart of Camelot with our mythical T-shirt, an extraordinary tableau that captures the essence of honor, chivalry, and camaraderie. Picture a majestic round table adorned not with nobles but with a band of noble primates, the monkeys, each embodying the spirit of knights in the court of King Arthur Pendragon.This captivating scene showcases a regal round table, where an assembly of monkeys, draped in ornate armor and bearing noble emblems, convenes in earnest discussion and camaraderie. Each monkey exudes the valor and dignity of a knight, their posture emanating a noble bearing, while their eyes hold the wisdom of the ages, mirroring the ethos of Arthurian legend. The monkeys, each portrayed with their unique regal attire, are engaged in animated conversations and debates, showcasing the camaraderie and dedication to upholding the virtues of honor, loyalty, and valor. Their collective presence exudes an air of enchantment, echoing the tales of gallantry and valor from the fabled court of King Arthur. Surrounding this prestigious assembly, the ambiance resonates with an ethereal glow, symbolizing the mystic origins and legendary grandeur of Camelot. The tapestry of this tableau entwines the magical essence of folklore with the lightheartedness of the monkeys, creating a harmonious balance between the mythical and the playful. The background is an exquisite portrayal of Camelot's legendary grandeur, with distant castles and rolling hills, evoking the majesty of a bygone era. The atmosphere is charged with an undercurrent of noble purpose, creating an amalgamation of mystique and the fantastical. This T-shirt design is not just a garment; it is an homage to the timeless virtues of chivalry and camaraderie. Available exclusively on our webpage, it invites you to immerse yourself in the age-old ethos of knighthood, where the playful innocence of the monkeys converges with the grandeur and nobility of Arthurian legend. Join this noble assembly and carry with you the valor and honor of the fabled knights of Camelot.",
        price: 100,
        brand: "Monobrand",
        category: "Category C",
        inStock: true,
        images: [
          {
            color: "Black",
            colorCode: "#000000",
            image:monoMesaRedondaBlack.src,
          },
          {
            color: "Blue",
            colorCode: " #0000FF",
            image:monoMesaRedondaBlue.src,
          },
          {
            color: "Red",
            colorCode: "#FF0000",
            image:monoMesaRedondaRed.src,
          },
        ],
        reviews: [
          {
            id: "2",
            userId: "2",
            productId: "3",
            rating: 4,
            comment:
              "mea polera",
            createdDate: "2023-06-26T15:53:44.483Z",
            user: {
              id: "2",
              name: "Carlosweed",
              email: "example1@gmail.com",
              emailVerified: null,
              image:Img.src,
              hashedPassword: null,
              createdAt: "2023-06-26T15:40:52.558Z",
              updatedAt: "2023-06-26T15:40:52.558Z",
              role: "USER",
            },
          },
          {
            id: "3",
            userId: "1",
            productId: "3",
            rating: 4,
            comment: "monoslab",
            createdDate: "2023-06-26T14:30:40.998Z",
            user: {
              id: "1",
              name: "ElMatoi",
              email: "example@gmail.com",
              emailVerified: null,
              image:Img.src,
              hashedPassword: null,
              createdAt: "2023-05-30T08:08:53.979Z",
              updatedAt: "2023-05-30T08:08:53.979Z",
              role: "ADMIN",
            },
          },
        ],
      },
    {
        id: "5",
        name: 'Monos Peleando',
        description:"Prepare to witness a celestial battle of epic proportions with our awe-inspiring T-shirt design. The scene unfolds high in the heavens, where a troop of mystical monkeys engages in an otherworldly conflict, wielding spears in a mythical war that transcends the boundaries of the sky.Amidst the clouds and celestial grandeur, a celestial battleground emerges, featuring monkeys adorned in magnificent armor, each wielding gleaming spears as they soar through the skies. The primates, with an otherworldly aura and a fierce determination in their eyes, engage in a fantastical aerial combat that speaks of a timeless conflict between mystical realms. Their aerial choreography is a mesmerizing dance of war, as the monkeys clash with valor and determination, their movements a testament to the ancient art of celestial battle. The spears they wield sparkle with a mystical radiance, symbolizing the power and intensity of the conflict among the heavens. The sky, adorned with a blend of ethereal colors and radiant light, serves as the backdrop for this celestial clash. The clouds part to reveal a canvas of divine landscapes and cosmic wonders, setting the stage for this timeless conflict of mythical proportions. This design encapsulates the essence of an otherworldly battle and the mystic fervor of the celestial monkeys as they engage in a struggle of legendary significance. Available exclusively on our webpage, this T-shirt is not just an article of clothing; it is an homage to the age-old legends of celestial conflicts and the mystical prowess of these primates engaged in a war that transcends the skies.",
        price: 50,
        brand: "Monobrand",
        category: "Category B",
        inStock: true,
        images: [
          {
            color: "Black",
            colorCode: "#000000",
            image:monoPeleandoBlack.src,
          },
          {
            color: "Silver",
            colorCode: "#C0C0C0",
            image:monoPeleandoSilver.src,
          },
        ],
        reviews: [],
      },
];


