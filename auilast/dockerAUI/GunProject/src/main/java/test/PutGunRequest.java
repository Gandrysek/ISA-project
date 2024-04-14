package test;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@ToString
@EqualsAndHashCode
public class PutGunRequest {

    /**
     * Name of the character.
     */
    private String name;

    /**
     * Character's background story.
     */
    private int difficulty;

    /**
     * Identifier of the character's profession.
     */
    private UUID gunClass;

}
