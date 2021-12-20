import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../playermenu/playermenu.css';
const Player = (props) => (
    <AudioPlayer className = 'player'
      src={"../music" + props.song}
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );

  export default Player;