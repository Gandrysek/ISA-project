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
public class GunClassDefaultController{

    private final GunClassDefaultService gunClassService;
    private final GunClassToResponseFunction gunClassToResponse;
    private final GunClassesToResponseFunction gunClassesToResponse;
    private final RequestToGunClassFunction requestToGunClass;

    @GetMapping("api/gunClasses")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public GetGunClassesResponse getGunClasses() {
        return gunClassesToResponse.apply(gunClassService.findAll());
    }

    @GetMapping("/api/guns/{gunId}/GunClasses")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public GetGunClassesResponse getGunGunClasses(@PathVariable UUID gunId) {
        return gunClassService.findAllByGun(gunId)
                .map(gunClassesToResponse)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/api/gunClasses/{id}")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public GetGunClassResponse getGunClass(@PathVariable UUID id) {
        return gunClassService.find(id)
                .map(gunClassToResponse)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/api/gunClasses/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void putgunClass(@PathVariable UUID id, @RequestBody PutGunClassRequest request) {
        gunClassService.create(requestToGunClass.apply(id, request));
    }

    @DeleteMapping("/api/gunClasses/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGunClass(@PathVariable UUID id) {
        gunClassService.find(id)
                .ifPresentOrElse(
                        gunClass -> gunClassService.delete(id),
                        () -> {
                            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
                        }
                );
    }
}