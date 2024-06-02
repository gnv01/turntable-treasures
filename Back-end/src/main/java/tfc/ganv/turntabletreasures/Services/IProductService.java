package tfc.ganv.turntabletreasures.Services;

import java.util.List;

import tfc.ganv.turntabletreasures.Entities.Product;

public interface IProductService {

    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product save(Product product);

    void delete(Long idProduct);

}
