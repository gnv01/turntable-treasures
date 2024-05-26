package tfc.ganv.turntabletreasures.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tfc.ganv.turntabletreasures.Entities.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long>{

}
