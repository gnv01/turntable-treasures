package tfc.ganv.turntabletreasures.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tfc.ganv.turntabletreasures.Entities.Song;
import tfc.ganv.turntabletreasures.Repositories.ISongRepository;

@Service
public class SongService implements ISongService{

    @Autowired
    ISongRepository songRepo;

    @Override
    public List<Song> getAllSongs() {
        return songRepo.findAll();
    }

    @Override
    public Song save(Song song) {
        return songRepo.save(song);
    }

    @Override
    public void delete(Long idSong) {
        songRepo.deleteById(idSong);
    }

    /* @Override
    public List<Song> getSongsByAlbumId(Long albumId) {
        return songRepo.findByAlbumId(albumId);
    } */

}
