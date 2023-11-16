import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="app">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}

        userName="fernando"
        name="Fernando Ramos"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="mercedes"
        name="Mercedes Chapa"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="edurardo"
        name="Eduardo Buzón"
      />
    </section>
  );
}
