package tfc.ganv.turntabletreasures.Services;

import java.util.List;

import tfc.ganv.turntabletreasures.Entities.Song;

public interface ISongService {

    List<Song> getAllSongs();

    Song save(Song song);

    void delete(Long idSong);

    /* List<Song> getSongsByAlbumId(Long albumId); */

}
