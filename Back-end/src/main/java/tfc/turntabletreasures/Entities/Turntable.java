package tfc.turntabletreasures.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "turntables")
public class Turntable extends Product{

    @Column(name = "brand", length = 100, nullable = false)
    private String brand;
}
