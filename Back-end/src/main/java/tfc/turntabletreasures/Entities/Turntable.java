package tfc.turntabletreasures.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "turntables")
public class Turntable extends Product{

    @Column(name = "brand", length = 100, nullable = false)
    private String brand;

    public Turntable() {
    }

    public Turntable(String productName, String productDescription, Double productPrice, String productImage,
            Long productStock, String brand) {
        super(productName, productDescription, productPrice, productImage, productStock);
        this.brand = brand;
    }
}
