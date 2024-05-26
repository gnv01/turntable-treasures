package tfc.ganv.turntabletreasures.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tfc.ganv.turntabletreasures.Entities.Album;
import tfc.ganv.turntabletreasures.Repositories.IAlbumRepository;

@Service
public class AlbumService implements IAlbumService{

    @Autowired
    IAlbumRepository albumRepo;

    @Override
    public List<Album> getAllAlbums() {
        return albumRepo.findAll();
    }

    @Override
    public Album save(Album album) {
        return albumRepo.save(album);
    }

    @Override
    public void delete(Long idAlbum) {
        albumRepo.deleteById(idAlbum);
    }
}
