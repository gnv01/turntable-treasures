package tfc.turntabletreasures.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "records")
public class Record extends Product{

    @Column(name = "artist", length = 100, nullable = false)
    private String artist;

    public Record() {
    }

    public Record(String productName, String productDescription, Double productPrice, String productImage,
            Long productStock, String artist) {
        super(productName, productDescription, productPrice, productImage, productStock);
        this.artist = artist;
    }

}
