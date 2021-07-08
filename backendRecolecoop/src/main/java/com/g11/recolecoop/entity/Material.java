package com.g11.recolecoop.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter @NoArgsConstructor
@Table(name="material")
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

//    private String Description;

//    private String imgBase64;

    private Double weight;

    @ManyToOne
    @JoinColumn(name = "cartonero_id")
    private Cartonero cartonero;

}
