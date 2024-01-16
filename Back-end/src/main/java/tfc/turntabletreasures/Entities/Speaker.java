package tfc.turntabletreasures.Entities;

import jakarta.persistence.Column;

public class Speaker extends Product{

    @Column(name = "brand", length = 100, nullable = false)
    private String brand;

    public Speaker() {
    }

    public Speaker(String productName, String productDescription, Double productPrice, String productImage,
            Long productStock, String brand) {
        super(productName, productDescription, productPrice, productImage, productStock);
        this.brand = brand;
    }

}
