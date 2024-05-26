package tfc.ganv.turntabletreasures.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tfc.ganv.turntabletreasures.Entities.Album;
import tfc.ganv.turntabletreasures.Services.IAlbumService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/albums")
public class AlbumRestController {

    @Autowired
    IAlbumService albumService;

    @GetMapping("/all")
    public List<Album> getAllAlbums(){
        return albumService.getAllAlbums();
    }

    @PostMapping("/save")
    public Album saveAlbum(Album album) {
        albumService.save(album);
        return album;
    }

    @PutMapping("/update")
    public Album updateAlbum(Album album) {
        albumService.save(album);
        return album;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAlbum(@PathVariable("idAlbum") Long idAlbum) {
        albumService.delete(idAlbum);
    }

}
