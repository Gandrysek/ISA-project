package test;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@ToString
@EqualsAndHashCode
public class GetGunClassResponse {


    @Getter
    @Setter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @ToString
    @EqualsAndHashCode
    public static class Gun {


        private UUID id;

    }


    private UUID id;


    private String name;

    /**
     * Character's background story.
     */
    private float caliber;

    /**
     * Character's age.
     */
    private int ammo;

    /**
     * Character's strength.
     */
    private Gun gun;

}
