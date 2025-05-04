import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';

interface VoiceModulationPreviewProps {
  audioUrl?: string;
  waveformData?: number[];
  previewText?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

export default function VoiceModulationPreview({
  audioUrl,
  waveformData = [],
  previewText = "The quick brown fox jumps over the lazy dog.",
  onPlay,
  onPause
}: VoiceModulationPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Generate placeholder waveform data if none provided
  const displayWaveform = waveformData.length > 0 
    ? waveformData 
    : Array(40).fill(0).map(() => Math.random() * 0.8 + 0.2);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const updateProgress = () => {
      const currentProgress = audio.currentTime / audio.duration;
      setProgress(isNaN(currentProgress) ? 0 : currentProgress);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      if (onPause) onPause();
    };
    
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      if (onPause) onPause();
    } else {
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
      });
      if (onPlay) onPlay();
    }
    
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0]);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 space-y-4">
        <p className="text-sm font-medium mb-3">{previewText}</p>
        
        <div className="h-20 flex items-center">
          <div className="flex-1 h-full flex items-center">
            <div className="w-full flex items-center justify-center gap-0.5">
              {displayWaveform.map((height, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-full"
                  style={{
                    height: `${height * 100}%`,
                    backgroundColor: progress * displayWaveform.length > i
                      ? 'var(--primary)' 
                      : 'var(--muted)',
                    transition: 'height 0.2s ease, background-color 0.2s ease',
                    opacity: progress * displayWaveform.length > i ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
          
          <div className="w-24">
            <Slider
              value={[volume]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              aria-label="Volume"
            />
          </div>
          
          <div className="text-xs text-muted-foreground ml-auto">
            {audioUrl ? 'Preview available' : 'No audio available'}
          </div>
        </div>
        
        {audioUrl && (
          <audio ref={audioRef} src={audioUrl} preload="metadata" />
        )}
      </CardContent>
    </Card>
  );
}