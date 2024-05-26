package tfc.ganv.turntabletreasures.Services;

import java.util.List;

import tfc.ganv.turntabletreasures.Entities.Album;

public interface IAlbumService{

    List<Album> getAllAlbums();

    Album save(Album album);

    void delete(Long idAlbum);

}
