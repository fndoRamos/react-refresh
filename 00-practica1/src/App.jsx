import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: false
    },
    {
      userName: 'fernando',
      name: 'Fernando Ramos',
      isFollowing: true
    },
    {
      userName: 'mercedes',
      name: 'Mercedes Chapa',
      isFollowing: false
    },
    {
      userName: 'eduardo',
      name: 'Eduardo Buzón',
      isFollowing: false
    }
  ]

  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="app">
      {
        users.map(user => {
          const {userName, name, isFollowing} = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
              formatUserName={formatUserName}
            />
          )
        })
      }
    </section>
  );
}
