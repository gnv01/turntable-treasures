package tfc.ganv.turntabletreasures.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tfc.ganv.turntabletreasures.Entities.Product;
import tfc.ganv.turntabletreasures.Repositories.IProductRepository;

@Service
public class ProductService implements IProductService{

    @Autowired
    IProductRepository productRepo;

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @Override
    public Product save(Product product) {
        return productRepo.save(product);
    }

    @Override
    public void delete(Long idProduct) {
        productRepo.deleteById(idProduct);
    }

}
