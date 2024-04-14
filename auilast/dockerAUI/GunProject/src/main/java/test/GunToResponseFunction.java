package test;

import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class GunToResponseFunction implements Function<Gun, GetGunResponse>
{
    @Override
    public GetGunResponse apply(Gun entity) {
        return GetGunResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .difficulty(entity.getQuantity())
                .build();
    }

}

