package tfc.ganv.turntabletreasures.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tfc.ganv.turntabletreasures.Entities.Album;

@Repository
public interface IAlbumRepository extends JpaRepository<Album, Long>{

}
