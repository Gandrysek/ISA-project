package test;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
@Entity
@Table(name = "GunClasses")
public class GunClass implements Comparable<GunClass>, Serializable
{
    @Id
    private UUID id;
    private String name;
    private float caliber;
    private int ammo;
    @ManyToOne
    @JoinColumn(name = "gun")
    private Gun gun;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getCaliber() {
        return caliber;
    }

    public void setCaliber(float caliber) {
        this.caliber = caliber;
    }



    public int getAmmo() {
        return ammo;
    }

    public void setAmmo(int ammo) {
        this.ammo = ammo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GunClass gClass = (GunClass) o;
        return caliber == gClass.caliber && Objects.equals(name, gClass.name) && Objects.equals(gun, gClass.gun);
    }


    @Override
    public int hashCode() {
        return Objects.hash(name, caliber, gun);
    }


    @Override
    public int compareTo(GunClass o) {
        return 0;
    }
}

