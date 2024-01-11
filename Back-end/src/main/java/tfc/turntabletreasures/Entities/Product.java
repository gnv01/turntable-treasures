package tfc.turntabletreasures.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import tfc.turntabletreasures.Enumerated.Category;

@Entity
@Table(name = "products")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_name", length = 155, nullable = false)
    private String productName;

    @Column(name = "product_description", length = 500, nullable = false)
    private String productDescription;

    @Column(name = "product_price", nullable = false)
    private Double productPrice;

    @Column(name = "product_image", length = 200, nullable = false)
    private String productImage;

    @Column(name = "product_category", nullable = false)
    @Enumerated(EnumType.STRING)
    private Category productCategory;

    @Column(name = "product_stock", nullable = false)
    private Long productStock;

}
