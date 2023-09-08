import { useState } from "react";
import { Tweet } from "./Tweet";

// Mon premier composant React
function App() {
  let [tweets, setTweets] = useState([
    {
      id: 1,
      name: "EJAD",
      content: "Je vais bien",
      like: 1005,
    },
    {
      id: 2,
      name: "Elle",
      content: "Je vais bien",
      like: 2010,
    },
    {
      id: 3,
      name: "Florentin",
      content: "Je vais bien",
      like: 105,
    },
    {
      id: 4,
      name: "Moïse",
      content: "Je vais bien",
      like: 100,
    },
  ]);

  // Pour la suppression d'un tweet à l'appui du bouton
  const aSupprimer = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  }

  // Incrémentation du nombe de like au click
  const onClick = (tweetId) => {
    setTweets(curr => {
      return curr.map(tweet => {
        if (tweet.id === tweetId) {
          return { ...tweet, like: tweet.like + 1 };
        }
        return tweet;
      });
    });
  };


  // Gestion de l'envoi du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    const nom = event.target.username.value;
    const contenu = event.target.contents.value;

    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name: nom,
      content: contenu,
      like: 0,
    }

    // Ajout du nouveau tweet
    setTweets([...tweets, newTweet]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="tweet-form">
        <h3>Nouveau tweet</h3>
        <input type="text" name="username" placeholder="@nom"/>
        <input type="text" name="contents" placeholder="@content" />
        <button type="submit">Envoyer</button>
      </form>
      <div className="container-tweets">
        { tweets.map((tweet) => {
            return (
              <Tweet 
                key = {tweet.id}
                id= {tweet.id}
                name = {tweet.name}
                content = {tweet.content}
                like = {tweet.like}
                onDelete = {(id_du_tweet = tweet.id) => {
                  aSupprimer(id_du_tweet);
                }}
                onLike = {(id_du_tweet = tweet.id) => {
                  onClick(id_du_tweet)
                }}
              />
            );
          } )
        }
      </div>
    </div>
  );
}
// On l'exporte maintenant pour que ça puisse fonctionner
export default App;

// Ma fonction personnelle
// function Ejad() {
//   return (
//     <nav>
//       <ul>
//         <li>Acceuil</li>
//         <li>Chercher</li>
//         <li>Inscription</li>
//       </ul>
//     </nav>
//   )
// }

// export default Ejad;
