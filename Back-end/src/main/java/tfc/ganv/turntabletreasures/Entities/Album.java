package tfc.ganv.turntabletreasures.Entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "albums")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAlbum;

    @Column(name = "artist", nullable = false)
    private String artistName;

    @Column(name = "date")
    private String albumDate;

    @Column(name = "genre", nullable = false)
    private String albumGenre;

    @Column(name = "format")
    private String albumFormat;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Product product;

    @OneToMany(mappedBy = "album")
    private List<Song> songs;

    @OneToMany(mappedBy = "baseAlbum")
    private List<SpecialEdition> specialEditions;
    
}