import { IAudioCard } from '../components/AudioCard';

interface ITracklist extends IAudioCard {
  artistName: string;
  kind: string;
  trackId: number;
  trackName: string;
}

export default ITracklist;
