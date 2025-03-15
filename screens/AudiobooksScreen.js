import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Book from '../components/Book';

const AudiobooksScreen = ({ navigation }) => {
  const audiobooks = [
    {
      imageUrl: "https://i.pinimg.com/474x/bf/07/7f/bf077f25b1d90e6f2a3ae0617a4d3d6d.jpg",
      title: "Lights Out",
      author: "Navessa Allen",
      price: "€8,99",
      description: `“I don’t need another kink.”

That thought pops into my head whenever I pull up my favorite social media app, but alas, every time I scroll, I learn something new about myself, and another one is born. And yes, I know I’m responsible for what the algorithm shows me, but I’m trying to ignore that fact.

Lately, my feed has been dominated by masked men. I’ve favorited videos with them dressed in full cosplay, decked out in futuristic military apparel, and wrapped up like ghouls.

But more than anything else, my FYP is filled with shirtless men wearing ghost masks. Bonus points if they’re heavily tattooed, wielding a knife, or covered in fake blood. At night, I dream about being chased by them, of them catching me and doing deliciously dark things to my more than willing body.

I never could have guessed that by sending one drunken text, those dreams would become my new reality.

Lights Out is a fast-paced dark romance with a morally grey male lead. Some themes and scenes may be disturbing to readers. Please check the TWs at the beginning of the book.`,
      publicationDate: "2022-06-15",
      pages: 320,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/7d/fa/f0/7dfaf091a604cd9bdda8e79b43076d89.jpg",
      title: "Losing Neverland",
      author: "Evelyn Montgomery",
      price: "€14,99",
      description: `All is not as it seems in Neverland.
As for Peter & Hook, 
well I know the secret most don’t.
The real truth behind the myth.
The hidden wonder you’ve never known 
disguised as the notorious legend.

I know the nightmare that brings 
Hook to his knees.
The concealed facts which bring out 
nothing but his ruthless darkness.

I know the inescapable reality that one day 
changed Peter Pan forever. 
I witnessed Peter’s inevitable fall from grace.
His loss of innocence.
A destiny he one day couldn’t fly away from.

All you’ve ever been told is a lie.
A hoax.
A pixie trick.

I know the truth because - I’m their ruin.
I’m their demise.
I’m the end of what was & 
the beginning of what’s to come.

My name is Wendy Moira Angela Darling.

I’m the inescapable fate they couldn’t defeat. 
The chosen one who inevitably forces 
their surrender.
And I’m the reason for losing Neverland.`,
      publicationDate: "2021-09-20",
      pages: 410,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/b9/27/7e/b9277e75136cbd792514783ea4eb7f91.jpg",
      title: "Leather & Lark",
      author: "Brynne Weaver",
      price: "€13,50",
      description: `Contract killer Lachlan Kane wants a quiet life working in his leather studio and forgetting all about his traumatic past. But when he botches a job for his boss’s biggest client, Lachlan knows he’ll never claw his way out of the underworld. At least, not until songbird Lark Montague offers him a deal: use his skills to hunt down a killer and she’ll find a way to secure his freedom. The catch? He has to marry her first. 
 
And they can’t stand each other. 
 
Indie singer-songwriter Lark is the sunshine and glitter that burns through every cloud and clings to every crevice that Lachlan Kane tries to hide inside. The surly older brother of her best friend’s soulmate, Lachlan thinks she’s just a privileged princess, but Lark has plenty of secrets hiding in the shadows of her bright light. With her formidable family in a tailspin and her best friend’s happiness on the line, she’s willing to make a vow to the man she’s determined to hate, no matter how tempting the broody assassin might be. 

As Lachlan and Lark navigate the dark world that binds them together, it becomes impossible to discern their fake marriage from a real one. But it’s not just familiar dangers that haunt them. 
There’s another phantom lurking on their doorstep. 

And this one has come for blood.`,
      publicationDate: "2023-03-10",
      pages: 375,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/a0/9a/7e/a09a7ef089fe3798b02bc65fa1198f09.jpg",
      title: "Little Stranger",
      author: "Leigh Rivers",
      price: "€10,00",
      description: `OWNING HER IS ALL HE EVER WANTED

She betrayed him, and now he wants revenge against the foster sister who became his forbidden obsession the second he laid eyes on her. After she sends him to prison for years, he’s free and ready to haunt her.

Everything about Olivia belongs to Malachi Vize.
Her mind
Her body
Her soul
Her fear
Her pain

On Halloween night, he can no longer lurk in the shadows. All he has left to own is her heart, even if he needs to take it.

This story comes with extremely triggering content. Please read the "Content Warning" page.`,
      publicationDate: "2022-01-05",
      pages: 290,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/e1/b0/1b/e1b01b64096e1092fcca9bac39a78965.jpg",
      title: "Reckless",
      author: "Lauren Roberts",
      price: "€14,00",
      description: `The kingdom of Ilya is in turmoil…

After surviving the Purging Trials, Ordinary-born Paedyn Gray has killed the King, and kickstarted a Resistance throughout the land. Now she’s running from the one person she had wanted to run to.

Kai Azer is now Ilya’s Enforcer, loyal to his brother Kitt, the new King. He has vowed to find Paedyn and bring her to justice.

Across the deadly Scorches, and deep into the hostile city of Dor, Kai pursues the one person he wishes he didn’t have to. But in a city without Elites, the balance between the hunter and hunted shifts – and the battle between duty and desire is deadly.

Be swept away by this kiss-or-kill romantasy trilogy taking the world by storm.`,
      publicationDate: "2021-12-12",
      pages: 400,
    },
    {
      imageUrl: "https://i.pinimg.com/236x/2f/77/99/2f77995867c0d2d54e29203aaedf5f3c.jpg",
      title: "Wildfire",
      author: "Hannah Grace",
      price: "€15,50",
      description: `The latest in the Maple Hills series follows two summer camp counselors who reconnect after a sizzling one-night stand.

Maple Hills students Russ Callaghan and Aurora Roberts cross paths at a party celebrating the end of the academic year, where a drinking game results in them having a passionate one-night stand. Never one to overstay her welcome (or expect much from a man), Aurora slips away before Russ even has the chance to ask for her full name.

Imagine their surprise when they bump into each other on the first day of the summer camp where they are both counselors, hoping to escape their complicated home lives by spending the summer working. Russ hopes if he gets far enough away from Maple Hills, he can avoid dealing with the repercussions of his father’s gambling addiction, while Aurora is tired of craving attention from everyone around her, and wants to go back to the last place she truly felt at home.

Russ knows breaking the camp’s strict “no staff fraternizing” rule will have him heading back to Maple Hills before the summer is over, but unfortunately for him, Aurora has never been very good at caring about the rules. Will the two learn to peacefully coexist? Or did their one night together start a fire they can’t put out?
`,
      publicationDate: "2023-05-07",
      pages: 350,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {audiobooks.map((book, index) => (
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

export default AudiobooksScreen;
