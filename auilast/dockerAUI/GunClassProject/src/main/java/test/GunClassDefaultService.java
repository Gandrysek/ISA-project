package test;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GunClassDefaultService
{
    private final GunClassesRepository repository;
    
    private final GunsRepository gunsRepository;
    

    public List<GunClass> findAll() {
        return repository.findAll();
    }
    
    public List<GunClass> findAll(Gun gun) {
        return repository.findAllByGun(gun);
    }
    
    public Optional<List<GunClass>> findAllByGun(UUID gunId) {
        Optional<Gun> opt = gunsRepository.findById(gunId);
        if (opt.isEmpty())
        {
            return Optional.empty();
        }
        else
        {
            return Optional.ofNullable(repository.findAllByGun(opt.get()));
        }


    }
    
    public void create(GunClass GunClass) {
        if (gunsRepository.findById(GunClass.getGun().getId()).isEmpty())
        {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        else
        {
            repository.save(GunClass);
        }
    }
    
    public void update(GunClass GunClass) {
        repository.save(GunClass);
    }

    public Optional<GunClass> find(UUID id)
    {
        return repository.findById(id);
    }
    
    public void delete(UUID id) {
        repository.findById(id).ifPresent(repository::delete);
    }
    

}
