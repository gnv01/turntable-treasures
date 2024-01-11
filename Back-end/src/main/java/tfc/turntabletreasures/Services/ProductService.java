package tfc.turntabletreasures.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void updateProduct(Product product) {
        Product productExists = productRepository.findById(product.getId()).orElse(null);

        if (productExists != null) {
            productExists.setProductName(product.getProductName());
            productExists.setProductDescription(product.getProductDescription());
            productExists.setProductPrice(product.getProductPrice());
            productExists.setProductImage(product.getProductImage());
            productExists.setProductCategory(product.getProductCategory());
            productExists.setProductStock(product.getProductStock());

            productRepository.save(productExists);
        }
    }

    @Override
    public void deleteById(@PathVariable ("id") Long productId) {
        productRepository.deleteById(productId);
    }

}
