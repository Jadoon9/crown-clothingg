import "./categories.styles.scss";
import Directory from "./components/directory/Directory";

const categories = [
  { id: 1, title: "Hats", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png" },
  { id: 2, title: "Hats", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png" },
];
function App() {
  return <Directory categories={categories} />;
}

export default App;
