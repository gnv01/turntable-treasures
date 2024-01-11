package tfc.turntabletreasures.Services;

import java.util.List;

import tfc.turntabletreasures.Entities.Product;

public interface IProductService {

    List<Product> findAll();

    Product findById(Long productId);

    Product saveProduct(Product product);

    void updateProduct(Product product);

    void deleteById(Long productId);
}
