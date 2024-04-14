package test;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Function;

@Component
public class GunsToResponseFunction implements Function<List<Gun>, GetGunsResponse> {

    @Override
    public GetGunsResponse apply(List<Gun> entities) {
        return GetGunsResponse.builder()
                .guns(entities.stream()
                        .map(gun -> GetGunsResponse.Gun.builder()
                                .id(gun.getId())
                                .name(gun.getName())
                                .build())
                        .toList())
                .build();
    }
}

