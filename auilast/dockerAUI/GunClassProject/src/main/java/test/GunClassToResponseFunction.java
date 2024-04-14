package test;

import org.springframework.stereotype.Component;
import test.GetGunClassResponse;
import test.GunClass;


import java.util.function.Function;

@Component
public class GunClassToResponseFunction implements Function<GunClass, GetGunClassResponse> {

    @Override
    public GetGunClassResponse apply(GunClass entity) {
        return GetGunClassResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .ammo(entity.getAmmo())
                .caliber(entity.getCaliber())
                .gun(GetGunClassResponse.Gun.builder()
                        .id(entity.getGun().getId())
                        .build())
                .build();
    }

}
