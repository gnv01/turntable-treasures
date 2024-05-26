package tfc.ganv.turntabletreasures.Entities;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
@Table(name = "songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSong;

    @Column(name = "name", nullable = false)
    private String songName;

    @Column(name = "position")
    private String songPosition;

    @Column(name = "duration")
    @Temporal(TemporalType.TIME)
    @DateTimeFormat(pattern = "mm:ss") /* CHANGED THE PATTERN OF THE DATE FROM HH:mm:ss TO mm:ss */
    private Date songDuration;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "album_id")
    private Album album;

    /* @ManyToOne
        @JoinTable(name = "special_edition_songs", joinColumns = @JoinColumn(name = "song_id"), inverseJoinColumns = @JoinColumn(name = "special_edition_id"))
    private SpecialEdition specialEdition; */
    
}
