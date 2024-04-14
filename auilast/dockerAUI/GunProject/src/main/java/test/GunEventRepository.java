package test;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;

@RequiredArgsConstructor
@Repository
public class GunEventRepository {
    private final RestTemplate restTemplate;

    public void create(UUID id) {
        restTemplate.put("/api/guns/{id}", null, id);
    }

    public void delete(UUID id) {
        restTemplate.delete("/api/guns/{id}", id);
    }
}