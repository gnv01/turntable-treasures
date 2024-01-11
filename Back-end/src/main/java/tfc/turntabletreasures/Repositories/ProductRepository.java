package tfc.turntabletreasures.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import tfc.turntabletreasures.Entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
