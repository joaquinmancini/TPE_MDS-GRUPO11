package com.g11.recolecoop.repository;

import com.g11.recolecoop.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidosRepository extends JpaRepository<Pedido, Long> {
}
