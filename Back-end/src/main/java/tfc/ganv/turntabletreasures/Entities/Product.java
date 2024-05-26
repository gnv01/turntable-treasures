package tfc.ganv.turntabletreasures.Entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;
import tfc.ganv.turntabletreasures.Enum.ProductCategory;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String productName;

    @Column(name = "price")
    private Double productPrice;

    @Lob
    @Column(name = "description", length = 512)
    private String productDescription;

    @Column(name = "image_url")
    private String productImage;

    @Enumerated(EnumType.STRING)
    @Column(name = "category", nullable = false)
    private ProductCategory productCategory;

    @Column(name = "stock")
    private Integer productStock;

    @Column(name = "brand")
    private String productBrand;
}
