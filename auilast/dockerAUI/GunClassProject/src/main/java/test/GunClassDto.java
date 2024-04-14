package test;

import lombok.Builder;
import lombok.ToString;

import java.io.Serializable;
import java.util.Objects;

@Builder
@ToString
public class GunClassDto implements Comparable<GunClassDto>, Serializable
{
    private String name;
    private float caliber;
    private int ammo;
    private String gun;

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

//    public String getJob() {
//        return job;
//    }
//
//    public void setJob(String job) {
//        this.job = job;
//    }

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
        GunClassDto that = (GunClassDto) o;
        return caliber == that.caliber && Objects.equals(name, that.name);
    }


    @Override
    public int hashCode() {
        return Objects.hash(name, caliber, gun);
    }


    @Override
    public int compareTo(GunClassDto o) {
        return 0;
    }
}