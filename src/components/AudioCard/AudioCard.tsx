import React from 'react';
import IAudioCard from './IAudioCard';

export default function AudioCard({ previewUrl }: IAudioCard) {
  return (
    <audio className='audio-player' controls src={previewUrl}>
      <track kind='captions' />
      {'O seu navegador não suporta o elemento '}
      <code>audio</code>
      {'.'}
    </audio>
  );
}
