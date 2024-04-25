package tfc.ganv.turntabletreasures.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "special_editions")
public class SpecialEdition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "base_album_id")
    private Album baseAlbum;

    /* @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "album_id")
    private Album album; */

    /* @OneToMany(mappedBy = "specialEdition", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Song> extraSongs; */

}
