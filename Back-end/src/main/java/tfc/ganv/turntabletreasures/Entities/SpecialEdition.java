package tfc.ganv.turntabletreasures.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "special_editions")
public class SpecialEdition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSE;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "base_album_id")
    private Album baseAlbum;

    /* @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "album_id")
    private Album album; */

    /* @OneToMany(mappedBy = "specialEdition", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Song> extraSongs; */

}
