package test;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class InitializeData implements InitializingBean
{
    private final GunDefaultService gunService;

    public void afterPropertiesSet() throws Exception
    {
        Gun p1 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e76")).name("TT").quantity(5).build();
        Gun p2 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e66")).name("Glock").quantity(4).build();
        Gun p3 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e56")).name("AK-47").quantity(3).build();
        Gun p4 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e46")).name("M16").quantity(2).build();
        Gun p5 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e36")).name("Azimov").quantity(2).build();
        Gun p6 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e75")).name("Walter A.H.").quantity(2).build();
        gunService.create(p1);
        gunService.create(p2);
        gunService.create(p3);
        gunService.create(p4);
        gunService.create(p5);
        gunService.create(p6);
    }
}
