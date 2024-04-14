package test;

import org.springframework.stereotype.Component;

import java.util.UUID;
import java.util.function.BiFunction;

@Component
public class RequestToGunFunction implements BiFunction<UUID, PutGunRequest, Gun>
{

    @Override
    public Gun apply(UUID id, PutGunRequest request) {
        return Gun.builder()
                .id(id)
                .name(request.getName())
                .quantity(request.getDifficulty())
                .build();
    }

}
