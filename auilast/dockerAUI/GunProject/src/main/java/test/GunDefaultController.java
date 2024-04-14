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
    private final GunToResponseFunction gunToResponse;
    private final GunsToResponseFunction gunsToResponse;
    private final RequestToGunFunction requestToGun;

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

    @GetMapping("api/guns")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public GetGunsResponse getGuns() {
        return gunsToResponse.apply(gunService.findAll());
    }

    @GetMapping("/api/guns/{id}")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public GetGunResponse getGun(@PathVariable UUID id) {
        return gunService.find(id)
                .map(gunToResponse)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
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

    @PutMapping("/api/guns/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void putGun(@PathVariable UUID id, @RequestBody PutGunRequest request) {
        gunService.create(requestToGun.apply(id, request));
    }

}
