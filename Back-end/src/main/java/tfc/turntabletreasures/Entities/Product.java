package tfc.turntabletreasures.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "products")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 155, nullable = false)
    private String productName;

    @Column(name = "description", length = 500, nullable = false)
    private String productDescription;

    @Column(name = "price", nullable = false)
    private Double productPrice;

    @Column(name = "image_url", length = 200, nullable = false)
    private String productImage;

    @Column(name = "stock", nullable = false)
    private Long productStock;

}
