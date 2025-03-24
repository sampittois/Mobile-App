import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Book from '../components/Book';

const EbooksScreen = ({ navigation }) => {
  const ebooks = [
    {
      imageUrl: "https://i.pinimg.com/474x/45/8e/5e/458e5e95928d889cc7040b3deca56c6a.jpg",
      title: "Caraval",
      author: "Stephanie Garber",
      price: "€8,00",
      description: `A legendary competition.
A mesmerizing romance.
An unbreakable bond
between two sisters.
15.00
Scarlett Dragna has never left the tiny island where she and her sister, Tella, live with their powerful, and cruel, father. Now Scarlett’s father has arranged a marriage for her, and Scarlett thinks her dreams of seeing Caraval—the faraway, once-a-year performance where the audience participates in the show—are over.

But this year, Scarlett’s long-dreamt-of invitation finally arrives. With the help of a mysterious sailor, Tella whisks Scarlett away to the show. Only, as soon as they arrive, Tella is kidnapped by Caraval’s mastermind organizer, Legend. It turns out that this season’s Caraval revolves around Tella, and whoever finds her first is the winner.

Scarlett has been told that everything that happens during Caraval is only an elaborate performance. Nevertheless she becomes enmeshed in a game of love, heartbreak, and magic. And whether Caraval is real or not, Scarlett must find Tella before the five nights of the game are over or a dangerous domino effect of consequences will be set off, and her beloved sister will disappear forever.

Welcome, welcome to Caraval . . . beware of getting swept too far away.`,
      publicationDate: "2017-01-31",
      pages: 416,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/ee/06/da/ee06da4b1bb681c5b9e9bc03b0d9f7ae.jpg",
      title: "A Court Of Thorns And Roses",
      author: "Sarah J. Maas",
      price: "€12,95",
      description: `When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.

At least, he’s not a beast all the time.

As she adapts to her new home, her feelings for the faerie, Tamlin, transform from icy hostility into a fiery passion that burns through every lie she’s been told about the beautiful, dangerous world of the Fae. But something is not right in the faerie lands. An ancient, wicked shadow is growing, and Feyre must find a way to stop it, or doom Tamlin—and his world—forever.

From bestselling author Sarah J. Maas comes a seductive, breathtaking book that blends romance, adventure, and faerie lore into an unforgettable read.`,
      publicationDate: "2015-05-05",
      pages: 432,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/1c/51/82/1c5182ab63143b58c3a83cf09cc79d56.jpg",
      title: "Storm and Silence",
      author: "Robert Thier",
      price: "€13,95",
      description: `Freedom—that is what Lilly Linton wants most in life. Not marriage, not a brood of squalling brats, and certainly not love, thank you very much!
But freedom is a rare commodity in 19th-century London, where girls are expected to spend their lives sitting at home, fully occupied with looking pretty. Lilly is at her wits’ end—until a chance encounter with a dark, dangerous and powerful stranger changes her life forever...

Enter the world of Mr Rikkard Ambrose, where the only rule is: Knowledge is power is time is money!`,
      publicationDate: "2016-03-19",
      pages: 720,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/ce/c5/d1/cec5d16df4b2ea892922a45aa9ce9845.jpg",
      title: "The Cruel Prince",
      author: "Holly Black",
      price: "€10,00",
      description: `Of course I want to be like them. They’re beautiful as blades forged in some divine fire. They will live forever.

And Cardan is even more beautiful than the rest. I hate him more than all the others. I hate him so much that sometimes when I look at him, I can hardly breathe.

Jude was seven when her parents were murdered and she and her two sisters were stolen away to live in the treacherous High Court of Faerie. Ten years later, Jude wants nothing more than to belong there, despite her mortality. But many of the fey despise humans. Especially Prince Cardan, the youngest and wickedest son of the High King.

To win a place at the Court, she must defy him–and face the consequences.

As Jude becomes more deeply embroiled in palace intrigues and deceptions, she discovers her own capacity for trickery and bloodshed. But as betrayal threatens to drown the Courts of Faerie in violence, Jude will need to risk her life in a dangerous alliance to save her sisters, and Faerie itself.`,
      publicationDate: "2018-01-02",
      pages: 370,
    },
    {
      imageUrl: "https://i.pinimg.com/474x/9d/31/3e/9d313e321d634f89637ed43d8aef3834.jpg",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "€15,00",
      description: `Pride and Prejudice has charmed generations of readers for more than two centuries. Jane Austen's much-adapted novel is famed for its witty, spirited heroine, sensational romances, and deft remarks on the triumphs and pitfalls of social convention. Author Jane Austen (1775-1817) was an English novelist whose works of social realism achieved unprecedented critical and popular success, though Austen herself remained an anonymous writer throughout her life.`,
      publicationDate: "1813-01-28",
      pages: 432,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/44/b4/f5/44b4f5bf3847d12c4bb8dc39d57775bd.jpg",
      title: "Fourth Wing",
      author: "Rebecca Yarros",
      price: "€15,50",
      description: `Enter the brutal and elite world of a war college for dragon riders...

Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.

But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them.

With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant.

She’ll need every edge her wits can give her just to see the next sunrise.

Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret.

Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: graduate or die`,
      publicationDate: "2023-05-02",
      pages: 512,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {ebooks.map((book, index) => (
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

export default EbooksScreen;
