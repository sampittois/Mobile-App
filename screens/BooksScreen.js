import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Book from '../components/Book';

const BooksScreen = ({ navigation }) => {
  const books = [
    {
      imageUrl: "https://i.pinimg.com/236x/91/86/7b/91867bde9980c0a1184c255ff84d87fd.jpg",
      title: "Better Than The Movies",
      author: "Lynn Painter",
      price: "€12,95",
      description: "In this rom-com about rom-coms, in the spirit of Kasie West and Jenn Bennett, a hopeless romantic teen attempts to secure a happily-ever-after moment with her forever crush, but finds herself reluctantly drawn to the boy next door.\n\nPerpetual daydreamer Liz Buxbaum gave her heart to Michael a long time ago. But her cool, aloof forever crush never really saw her before he moved away. Now that he’s back in town, Liz will do whatever it takes to get on his radar - and maybe snag him as a prom date - even befriend Wes Bennet.\n\nThe annoyingly attractive next-door neighbor might seem like a prime candidate for romantic-comedy fantasies, but Wes has only been a pain in Liz’s butt since they were kids. Pranks involving frogs and decapitated lawn gnomes do not a potential boyfriend make. Yet, somehow, Wes and Michael are hitting it off, which means Wes is Liz’s in.\n\nBut as Liz and Wes scheme to get Liz noticed by Michael so she can have her magical prom moment, she’s shocked to discover that she likes being around Wes. And as they continue to grow closer, she must reexamine everything she thought she knew about love - and rethink her own ideas of what happily ever after should look like.",
      publicationDate: "2021-05-04",
      pages: 384,
    },
    {
      imageUrl: "https://i.pinimg.com/474x/e7/08/94/e70894aa905f09c4e0b40dc95019995f.jpg",
      title: "Powerless",
      author: "Lauren Roberts",
      price: "€12,95",
      description: "She is the very thing he’s spent his whole life hunting.\nHe is the very thing she’s spent her whole life pretending to be.\n\nOnly the extraordinary belong in the kingdom of Ilya—the exceptional, the empowered, the Elites.\n\nThe powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished in order to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity.\n\nSurviving in the slums as an Ordinary is no simple task, and Paedyn knows this better than most. Having been trained by her father to be overly observant since she was a child, Paedyn poses as a Psychic in the crowded city, blending in with the Elites as best she can in order to stay alive and out of trouble. Easier said than done.\n\nWhen Paedyn unsuspectingly saves one of Ilyas princes, she finds herself thrown into the Purging Trials. The brutal competition exists to showcase the Elites’ powers—the very thing Paedyn lacks. If the Trials and the opponents within them don’t kill her, the prince she’s fighting feelings for certainly will if he discovers what she is—completely Ordinary.",
      publicationDate: "2023-01-10",
      pages: 450,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/dd/4f/b2/dd4fb256f289918399a59c6c6b0c144f.jpg",
      title: "Twisted Love",
      author: "Ana Huang",
      price: "€13,95",
      description: `A steamy, emotional romance novel.\n\nHe has a heart of ice...but for her, he'd burn the world.\n\nAlex Volkov is a devil blessed with the face of an angel and cursed with a past he can’t escape.\n\nDriven by a tragedy that has haunted him for most of his life, his ruthless pursuits for success and vengeance leave little room for matters of the heart.\n\nBut when he’s forced to look after his best friend’s sister, he starts to feel something in his chest:\nA crack.\nA melt.\nA fire that could end his world as he knew it.\n\n***\n\nAva Chen is a free spirit trapped by nightmares of a childhood she can’t remember.\n\nBut despite her broken past, she’s never stopped seeing the beauty in the world…including the heart beneath the icy exterior of a man she shouldn’t want.\n\nHer brother’s best friend.\nHer neighbor.\nHer savior and her downfall.\n\nTheirs is a love that was never supposed to happen—but when it does, it unleashes secrets that could destroy them both…and everything they hold dear.\n\nTwisted Love is a brother’s best friend/opposites attract romance with a hint of suspense. It's book one in the Twisted series but can be read as a standalone.\n\nWARNING: This book contains a possessive, morally gray alphahole; explicit sexual content, and profanity. No cheating or menage, but if you're looking for a traditionally sweet, loveable hero, this is not the book for you. Recommended for 18+.`,
      publicationDate: "2021-04-29",
      pages: 356,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/f3/d6/eb/f3d6eb4c47a9046eb3172580de8e9b2b.jpg",
      title: "Beach Read",
      author: "Emily Henry",
      price: "€10,00",
      description: `A romance writer who no longer believes in love and a literary writer stuck in a rut engage in a summer-long challenge that may just upend everything they believe about happily ever afters.\n\nAugustus Everett is an acclaimed author of literary fiction. January Andrews writes bestselling romance. When she pens a happily ever after, he kills off his entire cast.\n\nThey’re polar opposites.\n\nIn fact, the only thing they have in common is that for the next three months, they’re living in neighboring beach houses, broke, and bogged down with writer’s block.\n\nUntil, one hazy evening, one thing leads to another and they strike a deal designed to force them out of their creative ruts: Augustus will spend the summer writing something happy, and January will pen the next Great American Novel. She’ll take him on field trips worthy of any rom-com montage, and he’ll take her to interview surviving members of a backwoods death cult (obviously). Everyone will finish a book and no-one will fall in love. Really.`,
      publicationDate: "2020-05-19",
      pages: 384,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/82/15/49/821549091be38d31b3030f85dd025d93.jpg",
      title: "The Cheat Sheet",
      author: "Sarah Adams",
      price: "€14,00",
      description: `Is it ever too late to leave the friend-zone?\n\nHi, my name is Bree Camden, and I’m hopelessly in love with my best friend and star quarterback Nathan Donelson (so is half of America, judging by the tabloids and how much the guy dates). The first step is admitting, right? Except, I can never admit it to him because he clearly doesn’t see me that way, and the last thing I want is for things to get weird between us.\n\nNothing but good old-fashioned, no-touching-the-sexiest-man-alive, platonic friendship for us! Everything is exactly how I like it! Yes. Good. (I’m not crying, I’m just peeling an onion.)\n\nOur friendship is going swimmingly until I accidentally spill my beans to a reporter over too much tequila, and now the world seems to think me and Nathan belong together. Oh, and did I mention we have to date publicly for three weeks until after the Super Bowl because we signed a contract with...oops, forgot I can’t tell anyone about that!\n\nBottom line is, now my best friend is smudging all the lines and acting very un-platonic, and I’m just trying to keep my body from bursting into flames every time he touches me.\n\nHow am I going to make it through three weeks of fake dating Nathan without anything changing between us? Especially when it almost-sort-a-kinda seems like he’s fighting for a completely different outcome?\n\nSend help.\nXO Bree`,
      publicationDate: "2021-08-17",
      pages: 304,
    },
    {
      imageUrl: "https://i.pinimg.com/474x/9a/38/57/9a38579586a70981c288bb1a32e925d5.jpg",
      title: "Butcher & Blackbird",
      author: "Brynne Weaver",
      price: "€15,50",
      description: `When a chance encounter sparks an unlikely bond between rival murderers Sloane and Rowan, the two find something elusive—the friendship of like-minded, pitch-black souls. From small town West Virginia to upscale California, from downtown Boston to rural Texas, the two hunters collide in an annual game of blood and suffering, one that pits them against the most dangerous monsters in the country.\n\nBut as their friendship develops into something more, the restless ghosts left in their wake are only a few steps behind, ready to claim more than just their newfound love. Can Rowan and Sloane dig themselves out of a game of graves? Or have they finally met their match?`,
      publicationDate: "2022-10-05",
      pages: 320,
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {books.map((book, index) => (
        <View key={index} style={styles.bookContainer}>
          <Book
            imageUrl={book.imageUrl}
            title={book.title}
            author={book.author}
            price={book.price}
            onPress={() => navigation.navigate('Amount', { book })}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Details', {
                imageUrl: book.imageUrl,
                title: book.title,
                author: book.author,
                price: book.price,
                description: book.description,
                publicationDate: book.publicationDate,
                pages: book.pages
              })}
            >
              <Text style={styles.buttonText}>Bekijk Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#A3B18A',
  },
  bookContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 0,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6D4C41',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F5E6CA',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BooksScreen;
