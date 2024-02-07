import Header from "./components/Header";
import QuestionTimer from "./components/QuestionTimer";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <Header />
      <main>
        <Quiz />
        <QuestionTimer/>
      </main>
    </>
  );
}

export default App;
