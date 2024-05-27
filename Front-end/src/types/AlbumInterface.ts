import { BaseItemInterface } from "./BaseItemInterface";
import { SongInterface } from "./SongInterface";

export interface AlbumInterface extends BaseItemInterface {
  idAlbum: number;
  artistName: string;
  albumDate: string;
  albumGenre: string;
  albumFormat: string;
  songs: SongInterface[];
}

/* We create an interface for albums so the TypeScript compiler can check if the data we receive from the API matches the structure we expect. This way, we can avoid runtime errors and make our code more robust. */
