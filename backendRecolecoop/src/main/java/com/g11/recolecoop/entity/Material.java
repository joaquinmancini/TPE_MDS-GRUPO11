package com.g11.recolecoop.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter @NoArgsConstructor
public class Material {

    @Id
    private Long id_material;

    private String name;

    private String Description;

    private String imgBase64;

    private Double weight;

}
