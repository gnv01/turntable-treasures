import React, { useEffect, useRef, useState } from "react";
import { SongInterface } from "../types/SongInterface";

interface SongListProps {
  songs: SongInterface[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  const [isActive, setIsActive] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evitar que el evento se propague hacia arriba
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (panelRef.current) {
      if (isActive) {
        panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`;
      } else {
        panelRef.current.style.maxHeight = "0px";
      }
    }
  }, [isActive]);

  return (
    <div className="song-list">
      <header
        className={`song-list-accordion ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion-title">Songs</p>
      </header>
      <div
        ref={panelRef}
        className="song-list-previous"
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.2s ease-out",
        }}
      >
        {songs.map((song) => (
          <div className="song-list-container">
            <p>
              {song.songPosition} - {song.songName}
            </p>
            <p>{song.songDuration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
