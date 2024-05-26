package tfc.ganv.turntabletreasures.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tfc.ganv.turntabletreasures.Entities.Song;
import tfc.ganv.turntabletreasures.Services.ISongService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/songs")
public class SongRestController {

    @Autowired
    ISongService songService;

    @GetMapping("/all")
    public List<Song> getAllSongs() {
        return songService.getAllSongs();
    }
}
