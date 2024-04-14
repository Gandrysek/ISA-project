package test;

import org.springframework.stereotype.Component;
import test.GetGunClassesResponse;
import test.GunClass;

import java.util.List;
import java.util.function.Function;

/**
 * Coverts {@link List<Character>} to {@link test.GetGunClassesResponse}.
 */
@Component
public class GunClassesToResponseFunction implements Function<List<GunClass>, GetGunClassesResponse> {

    @Override
    public GetGunClassesResponse apply(List<GunClass> entities) {
        return GetGunClassesResponse.builder()
                .gunClasses(entities.stream()
                        .map(gun -> GetGunClassesResponse.GunClass.builder()
                                .id(gun.getId())
                                .name(gun.getName())
                                .build())
                        .toList())
                .build();
    }

}

