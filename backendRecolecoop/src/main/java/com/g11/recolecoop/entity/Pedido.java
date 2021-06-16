package com.g11.recolecoop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
@Getter @Setter
public class Pedido {

    @Id
    private Long id;

    private String solicitante;

    private String direccion;

    private String email;

    private String horario;

    private String volumen;

    private String imagen;
/*

    Endpoint: getPedidos
    Json de ejemplo:
    {
        "id": "1",
            "solicitante": "Vickie Morissette",
            "direccion": "342 Heidenreich Squares",
            "email": "Mateo_Douglas@hotmail.com",
            "horario": "2003-06-29T13:49:00.761Z",
            "volumen": "Bentley Volt",
            "imagen": "http://placeimg.com/640/480/cats"
    },
 */
}
