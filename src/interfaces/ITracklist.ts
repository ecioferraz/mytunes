import { IAudioCard } from '../components/AudioCard';

interface ITracklist extends IAudioCard {
  kind: string;
  trackId: number;
  trackName: string;
}

export default ITracklist;
