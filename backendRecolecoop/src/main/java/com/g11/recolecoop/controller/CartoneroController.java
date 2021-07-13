package com.g11.recolecoop.controller;

import com.g11.recolecoop.entity.Cartonero;
import com.g11.recolecoop.entity.Material;
import com.g11.recolecoop.service.CartoneroService;
import com.g11.recolecoop.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/cartonero")
public class CartoneroController {

    @Autowired
    private CartoneroService cartoneroService;

    @PostMapping("/saveCartonero")
    public void saveCartonero(@Valid @RequestBody Cartonero cartonero) {
        cartoneroService.save(cartonero);
    }

    @GetMapping("/getCartoneros")
    public List<Cartonero> getCartoneros() {
        return cartoneroService.getAll();
    }

    @GetMapping("/getCartoneroById")
    public Cartonero getCartoneroById(@Valid @RequestParam Long id_cartonero) {
        return cartoneroService.getById(id_cartonero);
    }

    @PostMapping("/deleteCartonero")
    public void deleteCartonero(@Valid @RequestParam Long id_cartonero) {
        cartoneroService.delete(id_cartonero);
    }

    @PostMapping("/updateCartonero")
    public void updateCartonero(@Valid @RequestBody Cartonero cartonero) { cartoneroService.update(cartonero); }

}
