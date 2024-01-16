package tfc.turntabletreasures.Entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

public class SpecialEdition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 155, nullable = false)
    private String specialEditionName;

    @OneToMany(mappedBy = "specialEdition", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Song> extraSongs;

    public SpecialEdition() {
    }

    public SpecialEdition(Long id, String specialEditionName, List<Song> extraSongs) {
        this.id = id;
        this.specialEditionName = specialEditionName;
        this.extraSongs = extraSongs;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSpecialEditionName() {
        return specialEditionName;
    }

    public void setSpecialEditionName(String specialEditionName) {
        this.specialEditionName = specialEditionName;
    }

    public List<Song> getExtraSongs() {
        return extraSongs;
    }

    public void setExtraSongs(List<Song> extraSongs) {
        this.extraSongs = extraSongs;
    }

    @Override
    public String toString() {
        return "SpecialEdition [id=" + id + ", specialEditionName=" + specialEditionName + ", extraSongs=" + extraSongs
                + "]";
    }

}
