package tfc.turntabletreasures.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tfc.turntabletreasures.Entities.Product;
import tfc.turntabletreasures.Services.IProductService;

@RestController
@RequestMapping("/api")
public class ProductRestController {

    @Autowired
    IProductService productService;

    @GetMapping("/products")
    public List<Product> findAll() {
        return productService.findAll();
    }

    @GetMapping("/products/{productId}")
    public Product findById(Long productId) {
        return productService.findById(productId);
    }

    @PostMapping("/saveProduct")
    public Product save(Product product) {
        return productService.saveProduct(product);
    }

    @DeleteMapping("/deleteProduct/{productId}")
    public void deleteById(Long productId) {
        productService.deleteById(productId);
    }

    @PutMapping("/updateProduct")
    public void update(Product product) {
        productService.updateProduct(product);
    }

}
