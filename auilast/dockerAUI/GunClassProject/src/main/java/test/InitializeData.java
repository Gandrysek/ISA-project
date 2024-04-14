package test;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class InitializeData implements InitializingBean
{
    private final GunDefaultService gunService;
    private final GunClassDefaultService gunClassService;

    public void afterPropertiesSet() throws Exception
    {
        Gun p1 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e76")).gunClasses(new ArrayList<>()).build();
        Gun p2 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e66")).gunClasses(new ArrayList<>()).build();
        Gun p3 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e56")).gunClasses(new ArrayList<>()).build();
        Gun p4 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e46")).gunClasses(new ArrayList<>()).build();
        Gun p5 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e36")).gunClasses(new ArrayList<>()).build();
        Gun p6 = Gun.builder().id(UUID.fromString("f5875513-bf7b-4ae1-b8a5-5b70a1b90e75")).gunClasses(new ArrayList<>()).build();
        gunService.create(p1.getId());
        gunService.create(p2.getId());
        gunService.create(p3.getId());
        gunService.create(p4.getId());
        gunService.create(p5.getId());
        gunService.create(p6.getId());

        GunClass c1 = GunClass.builder().id(UUID.fromString("525d3e7b-bb1f-4c13-bf17-926d1a12e4c0")).name("Knives").caliber(8).ammo(50).gun(p1).build();
        GunClass c2 = GunClass.builder().id(UUID.fromString("3c6f1eb1-8069-44ab-988f-d7fed2b65d88")).name("Bombs").caliber(7).ammo(100).gun(p1).build();
        GunClass c3 = GunClass.builder().id(UUID.randomUUID()).name("Pistols").caliber(7.62f).ammo(7).gun(p1).build();
        GunClass c4 = GunClass.builder().id(UUID.randomUUID()).name("Rifles").caliber(7.62f).ammo(20).gun(p2).build();
        GunClass c5 = GunClass.builder().id(UUID.randomUUID()).name("Autos").caliber(7.62f).ammo(30).gun(p2).build();
        GunClass c6 = GunClass.builder().id(UUID.randomUUID()).name("Semiautos").caliber(7.62f).ammo(40).gun(p3).build();
        GunClass c7 = GunClass.builder().id(UUID.randomUUID()).name("Illegal").caliber(7.62f).ammo(10).gun(p4).build();
        GunClass c8 = GunClass.builder().id(UUID.randomUUID()).name("Pirate").caliber(7.62f).ammo(80).gun(p5).build();
        gunClassService.create(c1);
        gunClassService.create(c2);
        gunClassService.create(c3);
        gunClassService.create(c4);
        gunClassService.create(c5);
        gunClassService.create(c6);
        gunClassService.create(c7);
        gunClassService.create(c8);
    }
}
