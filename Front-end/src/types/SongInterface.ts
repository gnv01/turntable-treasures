export interface SongInterface {
  idSong: number;
  songName: string;
  songPosition: string;
  songDuration: string;
}

/* We create an interface for albums so the TypeScript compiler can check if the data we receive from the API matches the structure we expect. This way, we can avoid runtime errors and make our code more robust. */
