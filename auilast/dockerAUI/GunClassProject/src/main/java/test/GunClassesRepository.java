package test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public interface GunClassesRepository extends JpaRepository<GunClass, UUID>
{
    List<GunClass> findAllByGun(Gun gun);
}
