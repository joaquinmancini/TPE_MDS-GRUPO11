package com.g11.recolecoop.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Cartonero {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String lastname;

    private String address;

    private Integer transportLoad;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cartonero")
    private List<Material> materialList;

}

/*
{
        "nombre": "Cornelius",
        "apellido": "Dietrich",
        "direccion": "15405 Beryl Mills",
        "capacidad_transporte": 5248,
        "cantidad_materiales": [
            {
                "nombre": "Plactico",
                "kilos": 37
            },
            {
                "nombre": "Vidrio",
                "kilos": 63
            },
            {
                "nombre": "Goma",
                "kilos": 89
            },
            {
                "nombre": "Carton",
                "kilos": 21
            },
            {
                "nombre": "Metal",
                "kilos": 11
            }
        ],
        "id": "1"
    }
 */