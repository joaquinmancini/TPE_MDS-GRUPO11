package com.g11.recolecoop.service;

import com.g11.recolecoop.entity.Pedido;
import com.g11.recolecoop.repository.PedidosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidosRepository pedidosRepository;

    public List<Pedido> getPedidos() {
        return pedidosRepository.findAll();
    }

    public void savePedido(Pedido pedido) {
        pedidosRepository.save(pedido);
    }
}
