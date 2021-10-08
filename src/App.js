import "./App.css";
import Videos from "./Videos";
import abcde from "./216333992_210883207588511_8827726372978041790_n.mp4";
import messi1 from "./154915101_471806707334904_4932722834283280854_n.mp4";
import messi2 from "./181833783_846401632621491_995714543922806307_n.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Videos
          source={abcde}
          channel="edSongs"
          description="Check out latest song"
          song="Bad Habits"
          likes={123}
          messages={400}
          shares={200}
        />
        <Videos
          source={messi1}
          channel="messi"
          description="Check out latest video"
          song="Pepsi"
          likes={848}
          messages={712}
          shares={457}
        />
        <Videos
          source={messi2}
          channel="messi"
          description="Check out latest video"
          song="Ice Football"
          likes={617}
          messages={526}
          shares={356}
        />
      </div>
    </div>
  );
}

export default App;
