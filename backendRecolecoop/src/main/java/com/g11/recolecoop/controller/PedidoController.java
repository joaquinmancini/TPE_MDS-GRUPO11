package com.g11.recolecoop.controller;

import com.g11.recolecoop.entity.Pedido;
import com.g11.recolecoop.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/pedido")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping("/getPedidos")
    public List<Pedido> getPedidos() {
        return pedidoService.getPedidos();
    }

    @PostMapping("/savePedido")
    public void savePedido(@Valid @RequestBody Pedido pedido) {
        pedidoService.savePedido(pedido);
    }
}
