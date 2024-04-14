package test;

import lombok.AllArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
@Log
@AllArgsConstructor
public class GunDefaultController
{
    private final GunDefaultService gunService;

    /*
    @Autowired
    public ProfessionDefaultController(
            ProfessionService service,
            ProfessionToResponseFunction professionToResponse,
            ProfessionsToResponseFunction professionsToResponse
    ) {
        this.service = service;
        this.professionToResponse = professionToResponse;
        this.professionsToResponse = professionsToResponse;
    }
    */

    @PutMapping("/api/guns/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void putGun(@PathVariable UUID id) {
        gunService.create(id);
    }


    @DeleteMapping("/api/guns/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGun(@PathVariable UUID id) {
        gunService.find(id)
                .ifPresentOrElse(
                        profession -> gunService.delete(id),
                        () -> {
                            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
                        }
                );
    }


}
