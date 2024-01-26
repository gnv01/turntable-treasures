package tfc.ganv.turntabletreasures.Entities;

import jakarta.persistence.Column;
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
@Table(name = "songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String songName;

    @ManyToOne
    @JoinColumn(name = "album_id", nullable = false)
    private Album album;

    @Column(name = "position")
    private String songPosition;

    @ManyToOne
    @JoinColumn(name = "special_edition_id", nullable = false)
    private SpecialEdition specialEdition;
    
}
