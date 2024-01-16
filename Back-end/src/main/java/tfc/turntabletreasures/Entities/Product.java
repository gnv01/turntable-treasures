package tfc.turntabletreasures.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS) /* Due to the size of the project i opted to use the TABLE_PER_CLASS strategy for the inheritance of the entities. The use of this strategy can have performance implications and can be less efficient in bigger projects. */
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
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

    public Product() {
    }

    public Product(String productName, String productDescription, Double productPrice, String productImage,
            Long productStock) {
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productImage = productImage;
        this.productStock = productStock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public Long getProductStock() {
        return productStock;
    }

    public void setProductStock(Long productStock) {
        this.productStock = productStock;
    }

    @Override
    public String toString() {
        return "Product [id=" + id + ", productName=" + productName + ", productDescription=" + productDescription
                + ", productPrice=" + productPrice + ", productImage=" + productImage + ", productStock=" + productStock
                + "]";
    }

}
