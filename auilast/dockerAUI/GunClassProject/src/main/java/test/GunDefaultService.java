package test;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GunDefaultService
{
    private final GunsRepository repository;

    public Optional<Gun> find(UUID id)
    {
        return repository.findById(id);
    }

    public List<Gun> findAll()
    {
        return repository.findAll();
    }

    public void create(UUID id)
    {
        repository.save(Gun.builder().id(id).build());
    }

    public void delete(UUID id) {
        repository.findById(id).ifPresent(repository::delete);
    }
}
