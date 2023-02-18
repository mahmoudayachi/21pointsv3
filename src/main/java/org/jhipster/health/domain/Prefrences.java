package org.jhipster.health.domain;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.jhipster.health.domain.enumeration.Units;

/**
 * A Prefrences.
 */
@Entity
@Table(name = "prefrences")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@org.springframework.data.elasticsearch.annotations.Document(indexName = "prefrences")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Prefrences implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    private Long id;

    @NotNull
    @Min(value = 10)
    @Max(value = 21)
    @Column(name = "weeklygoal", nullable = false)
    private Integer weeklygoal;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "weightunits", nullable = false)
    private Units weightunits;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Prefrences id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getWeeklygoal() {
        return this.weeklygoal;
    }

    public Prefrences weeklygoal(Integer weeklygoal) {
        this.setWeeklygoal(weeklygoal);
        return this;
    }

    public void setWeeklygoal(Integer weeklygoal) {
        this.weeklygoal = weeklygoal;
    }

    public Units getWeightunits() {
        return this.weightunits;
    }

    public Prefrences weightunits(Units weightunits) {
        this.setWeightunits(weightunits);
        return this;
    }

    public void setWeightunits(Units weightunits) {
        this.weightunits = weightunits;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Prefrences user(User user) {
        this.setUser(user);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Prefrences)) {
            return false;
        }
        return id != null && id.equals(((Prefrences) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Prefrences{" +
            "id=" + getId() +
            ", weeklygoal=" + getWeeklygoal() +
            ", weightunits='" + getWeightunits() + "'" +
            "}";
    }
}
