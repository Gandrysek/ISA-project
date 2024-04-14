package test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface GunsRepository extends JpaRepository<Gun, UUID>
{

}
