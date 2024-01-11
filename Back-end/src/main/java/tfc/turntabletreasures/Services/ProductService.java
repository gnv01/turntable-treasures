package tfc.turntabletreasures.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tfc.turntabletreasures.Entities.Product;
import tfc.turntabletreasures.Repositories.ProductRepository;

@Service
public class ProductService implements IProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(Long productId) {
        Optional<Product> op = productRepository.findById(productId);
        if (op.isPresent()) {
            return op.get();
        } else {
            return null;
            
        }
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteById(Long productId) {
        productRepository.deleteById(productId);
    }

}
