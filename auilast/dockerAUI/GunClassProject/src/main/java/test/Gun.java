package test;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
@Entity
@Table(name = "guns")
public class Gun implements Comparable<Gun>, Serializable
{
    @Id
    private UUID id;
    @OneToMany(mappedBy = "gun", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @ToString.Exclude
    private List<GunClass> gunClasses;
    public List<GunClass> getGunClasses() {
        return gunClasses;
    }

    public void setGunClasses(List<GunClass> gClasses) {
        this.gunClasses = gClasses;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Gun that = (Gun) o;
        return Objects.equals(id, that.id);
    }


    @Override
    public int hashCode() {
        return Objects.hash(id);
    }



    @Override
    public int compareTo(Gun o) {
        return 0;
    }
}
