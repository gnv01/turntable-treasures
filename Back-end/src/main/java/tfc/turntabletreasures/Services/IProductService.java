package tfc.turntabletreasures.Services;

import java.util.List;

import tfc.turntabletreasures.Entities.Product;

public interface IProductService {

    List<Product> findAll();

    Product findById(Long productId);

    Product save(Product product);

    void deleteById(Long productId);
}
