package test;

import org.springframework.stereotype.Component;

import java.util.UUID;
import java.util.function.BiFunction;

@Component
public class RequestToGunClassFunction implements BiFunction<UUID, PutGunClassRequest, GunClass> {

    @Override
    public GunClass apply(UUID id, PutGunClassRequest request) {

        return GunClass.builder()
                .id(id)
                .name(request.getName())
                .caliber(request.getCaliber())
                .ammo(request.getAmmo())
                .gun(Gun.builder()
                        .id(request.getGun())
                        .build())
                .build();
    }

}
