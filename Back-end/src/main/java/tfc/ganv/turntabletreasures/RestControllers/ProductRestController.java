package tfc.ganv.turntabletreasures.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tfc.ganv.turntabletreasures.Entities.Product;
import tfc.ganv.turntabletreasures.Services.IProductService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/products")
public class ProductRestController {

    @Autowired
    IProductService productService;

    @GetMapping("/all")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @PostMapping("/save")
    public Product saveProduct(Product product) {
        productService.save(product);
        return product;
    }

    @PutMapping("/update")
    public Product updateProduct(Product product) {
        productService.save(product);
        return product;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable("idProduct") Long idProduct) {
        productService.delete(idProduct);
    }

}
