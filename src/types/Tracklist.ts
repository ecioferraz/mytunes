import AudioCardProps from '../components/AudioCard/AudioCard.props';

interface Tracklist extends AudioCardProps {
  artistName: string;
  kind: string;
  trackId: number;
  trackName: string;
}

export default Tracklist;
