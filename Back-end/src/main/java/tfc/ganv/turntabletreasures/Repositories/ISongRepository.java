package tfc.ganv.turntabletreasures.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tfc.ganv.turntabletreasures.Entities.Song;

@Repository
public interface ISongRepository extends JpaRepository<Song, Long>{

}
