import AudioCardProps from './AudioCard.props';

export default function AudioCard({ previewUrl }: AudioCardProps) {
  return (
    <audio className="audio-player" controls src={previewUrl}>
      <track kind="captions" />
      {'O seu navegador não suporta o elemento '}
      <code>audio</code>
      {'.'}
    </audio>
  );
}
