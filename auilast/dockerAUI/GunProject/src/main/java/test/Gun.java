package test;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
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
    private String name;
    private int quantity;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int difficulty) {
        this.quantity = difficulty;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Gun that = (Gun) o;
        return quantity == that.quantity && Objects.equals(name, that.name);
    }


    @Override
    public int hashCode() {
        return Objects.hash(name, quantity);
    }



    @Override
    public int compareTo(Gun o) {
        return 0;
    }
}
