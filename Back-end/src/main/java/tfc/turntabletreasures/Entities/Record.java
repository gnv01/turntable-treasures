package tfc.turntabletreasures.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "records")
public class Record extends Product{

    @Column(name = "artist", length = 100, nullable = false)
    private String artist;

}
